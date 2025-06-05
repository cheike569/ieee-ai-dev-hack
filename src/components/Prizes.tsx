import {
  TrophyIcon,
  StarIcon,
  SparklesIcon,
  GiftIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

const prizes = [
  {
    name: '1st Place',
    description: (
      <>
        <strong className="font-semibold">$1,000</strong> cash prize for the top overall submission.
      </>
    ),
    icon: TrophyIcon,
  },
  {
    name: '2nd Place',
    description: (
      <>
        <strong className="font-semibold">$500</strong> prize for the second-best project.
      </>
    ),
    icon: StarIcon,
  },
  {
    name: '3rd Place',
    description: (
      <>
        <strong className="font-semibold">$250</strong> for the third-place winner.
      </>
    ),
    icon: SparklesIcon,
  },
  {
    name: 'Best Use of AI API',
    description: 'Showcase the best technical implementation using a generative AI API.',
    icon: GiftIcon,
  },
  {
    name: 'Audience Favorite',
    description: 'Voted by the community. Winner receives an exclusive IEEE Swag Pack.',
    icon: UsersIcon,
  },
]

export default function Prizes() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-2 text-4xl font-semibold tracking-tight text-pretty text-primary sm:text-5xl">
            Prizes & Recognition
          </h2>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {prizes.map((prize) => (
              <div key={prize.name}>
                <dt className="text-base font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary">
                    <prize.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {prize.name}
                </dt>
                <dd className="mt-1 text-base text-gray-600">{prize.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
