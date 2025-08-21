import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-40 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="text-5xl tech-font font-bold tracking-tighter text-primary sm:text-7xl">
            IEEE AI Dev Hack 2025.
          </h1>
          <h2 className={'mt-6 text-xl font-semibold tracking-tight text-blue-900'}>
            Building the Future: AI-Powered Tools for Real-World Impact
          </h2>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Join innovators, coders, and creators from around the world for a weekend of boundless possibility. From September 19 - 21, dive into the cutting edge of artificial intelligence and software development—all from the comfort of your own workspace.
            </p>
            <p>
              Whether you&#39;re reimagining business workflows, building voice-powered assistants, or tackling healthcare challenges with AI, this is your moment to create something that matters.
            </p>
          </div>
          <Button href="https://ieee-ai-dev-hack-2025.devpost.com/" target={"_blank"} className="mt-10 w-full sm:hidden">
            Sign up now
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', 'TBA'],
              ['Tracks', '6'],
              ['Participants', '1200+'],
              ['Location', 'United States'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-primary">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
