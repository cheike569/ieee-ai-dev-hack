import {
  DocumentTextIcon,
  VideoCameraIcon,
  GlobeAltIcon,
  ClockIcon,
  LightBulbIcon,
  CodeBracketIcon,
  TagIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

const guidelines = [
  {
    name: 'Demo Video',
    description: 'A 3–5 minute demo video showcasing your project.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Devpost Project Page',
    description: 'A complete Devpost project page with description and team members.',
    icon: DocumentTextIcon,
  },
  {
    name: 'GitHub Repo or Live Demo',
    description: '(Optional) Link to your GitHub repository or a live demo of your project.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Deadline',
    description: 'Submit by: Sep 7 @ 4pm PST',
    icon: ClockIcon,
  },
]

const judgingCriteria = [
  {
    name: 'Innovation & Execution',
    description: '50% - Originality of the idea and quality of implementation',
    icon: LightBulbIcon,
  },
  {
    name: 'Technical Complexity',
    description: '30% - Sophistication of the technical solution',
    icon: CodeBracketIcon,
  },
  {
    name: 'Relevance to Track',
    description: '20% - How well the project aligns with the chosen track',
    icon: TagIcon,
  },
]

export default function SubmissionGuidelines() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-primary sm:text-5xl">
              Project Submission Guidelines
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              All submissions must include the following items to be considered for judging.
            </p>
          </div>
          <div className="col-span-3 space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-semibold text-primary">
                Submissions must include:
              </h3>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                {guidelines.map((guideline) => (
                  <div key={guideline.name} className="relative pl-16">
                    <dt className="text-base font-semibold text-gray-900">
                      <div className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-lg bg-primary">
                        <guideline.icon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      {guideline.name}
                    </dt>
                    <dd className="mt-2 text-base text-gray-600">{guideline.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-semibold text-primary">
                Judging Criteria:
              </h3>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
                {judgingCriteria.map((criteria) => (
                  <div key={criteria.name} className="relative pl-16">
                    <dt className="text-base font-semibold text-gray-900">
                      <div className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-lg bg-primary">
                        <criteria.icon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      {criteria.name}
                    </dt>
                    <dd className="mt-2 text-base text-gray-600">{criteria.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
