import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Judges } from '@/components/Judges'
import Tracks from '@/components/Tracks'
import Prizes from '@/components/Prizes'
import SubmissionGuidelines from '@/components/SubmissionGuidelines'
import RegistrationBanner from '@/components/RegistrationBanner'
import FAQ from '@/components/FAQ'
import IntroImage from '@/components/IntroImage'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroImage />
      <Tracks/>
      <Prizes/>
      <SubmissionGuidelines />
      <Speakers />
      <Schedule />
      <Judges />
      {/*<Sponsors />*/}
      <FAQ />
    </>
  )
}
