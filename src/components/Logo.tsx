import Link from 'next/link'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Link href={'/'}>
      <img
        src={'https://placehold.co/200x100'}
        width={200}
        height={100}
        alt={'IEEE AI Dev Hack 2025'}
      />
    </Link>
  )
}
