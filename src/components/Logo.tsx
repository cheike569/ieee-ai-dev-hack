import Link from 'next/link'
import logo from '@/images/logo.png'
import Image from "next/image";

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Link href={'/'}>
      <Image
        src={logo}
        width={626}
        height={382}
        className={'rounded-lg ' + props.className}
        alt={'IEEE AI Dev Hack 2025'}
      />
    </Link>
  )
}
