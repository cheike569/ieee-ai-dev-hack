import Image from 'next/image'
import image from '@/images/intro.jpg'

export default function IntroImage() {
  return (
    <div>
      <Image src={image} alt={'Intro Image'} width={1280} height={853} className="w-full h-auto" />
    </div>
  )
}