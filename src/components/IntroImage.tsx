import Image from 'next/image'
import image from '@/images/intro.jpg'

export default function IntroImage() {
  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      <Image
        src={image}
        alt={'Intro Image'}
        fill
        className="object-cover object-center w-full h-full"
        priority
      />
      <div className="absolute inset-0
      opacity-50
      bg-gradient-to-br from-slate-50 to-slate-300
      pointer-events-none" />
    </div>
  )
}