'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<{
    name: string
    description: string | null
    start: string
    end: string
  }>
}

const schedule: Array<Day> = [
  {
    date: 'Friday, Sep 5',
    dateTime: '2025-09-05',
    summary: 'We kick things off with a warm welcome and challenge briefing.',
    timeSlots: [
      {
        name: 'Kickoff & Opening Ceremony',
        description:
          'Meet the organizers, discover the tracks, and get ready to build.',
        start: '6:00PM',
        end: '7:00PM',
      },
    ],
  },
  {
    date: 'Saturday, Sep 6',
    dateTime: '2025-09-06',
    summary: 'An open day of hacking, building, mentoring, and workshops.',
    timeSlots: [
      {
        name: 'Hacking All Day',
        description:
          'Work with your team, attend mentor hours, and make progress.',
        start: '12:00AM',
        end: '11:59PM',
      },
    ],
  },
  {
    date: 'Sunday, Sep 7',
    dateTime: '2025-09-07',
    summary: 'It’s the final stretch—submit by 4pm sharp!',
    timeSlots: [
      {
        name: 'Final Submission Deadline',
        description: 'Submit your project on Devpost by 4:00PM PST.',
        start: '4:00PM',
        end: '4:00PM',
      },
    ],
  },
  {
    date: 'Wednesday, Sep 10',
    dateTime: '2025-09-10',
    summary: 'Winners announced.',
    timeSlots: [
      {
        name: 'Winners Announcement',
        description:
          'Join us for the live stream as we announce the winners and celebrate all participants.',
        start: '6:00PM',
        end: '7:00PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="data-selected:not-data-focus:outline-hidden">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="data-selected:not-data-focus:outline-hidden"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 mb-6 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur-sm',
      )}
    >
      {day.timeSlots.map((timeSlot, index) => (
        <li
          key={`${timeSlot.name}-${index}`}
          aria-label={`${timeSlot.name}${timeSlot.description ? `: ${timeSlot.description}` : ''} (${timeSlot.start} - ${timeSlot.end}) PST`}
        >
          {index > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-07:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-07:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime} className={'flex flex-col'}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="h-full" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-primary sm:text-5xl">
            Hackathon Schedule
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            From kickoff to final submission—here’s your timeline for building
            something great.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-mt-8 -mb-8" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
