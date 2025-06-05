'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'

const faqs = [
  {
    question: 'Can I work solo or in a team?',
    answer: 'You can participate either as an individual or as part of a team. Both options are welcome!'
  },
  {
    question: 'What\'s the team size limit?',
    answer: 'Teams can have up to 4 members. This limit helps ensure balanced competition and effective collaboration.'
  },
  {
    question: 'Do I need to be a student or IEEE member?',
    answer: 'No, the hackathon is open to everyone regardless of student status or IEEE membership. We welcome participants from all backgrounds and experience levels.'
  },
  {
    question: 'Will there be mentorship during the event?',
    answer: 'While there won\'t be dedicated mentors, we will have experienced volunteers available to answer questions and provide guidance throughout the hackathon, and we also host a series of workshops leading up to the event.'
  },
  {
    question: 'Are there any restrictions on using existing code?',
    answer: 'You can use open-source libraries and frameworks, but your core project implementation should be original work created during the hackathon. All sources must be properly attributed.'
  }
]

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-4xl font-medium tracking-tighter text-primary sm:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Find answers to common questions about the hackathon.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white p-2">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="mb-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="cursor-pointer flex w-full justify-between rounded-lg bg-blue-50 px-4 py-4 text-left text-lg font-medium text-primary hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-primary`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
