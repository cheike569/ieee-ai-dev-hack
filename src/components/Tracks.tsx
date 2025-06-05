import {
  SparklesIcon,
  BriefcaseIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  LightBulbIcon,
} from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'

const tracks = [
  {
    name: 'Main Track',
    description:
      'Open-ended—build anything with AI that creates real-world value or solves an interesting problem.',
    icon: SparklesIcon,
  },
  {
    name: 'Business Productivity',
    description:
      'Tools that help professionals or companies work smarter, automate workflows, or streamline operations.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Healthcare (Aging Population)',
    description:
      'Solutions for elderly care, health monitoring, or improving quality of life using AI.',
    icon: HeartIcon,
  },
  {
    name: 'Productivity for Young Professionals',
    description:
      'AI-powered tools to support career growth, organization, and time management for early-career individuals.',
    icon: LightBulbIcon,
  },
  {
    name: 'Voice & Conversational AI',
    description:
      'Projects focused on speech, voice assistants, or natural conversation—think voice bots, transcribers, and more.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Social Impact',
    description:
      'Build tools for positive change—support education, accessibility, sustainability, or marginalized communities.',
    icon: GlobeAltIcon,
  },
]

export default function Tracks() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-primary sm:text-5xl"
          >
            Hackathon Tracks
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Choose from focused tracks that align with your interests, or go
            wild in the main track. Each one lets you create something impactful
            with AI.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {tracks.map((track) => (
              <div key={track.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <track.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-primary"
                  />
                  {track.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{track.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
