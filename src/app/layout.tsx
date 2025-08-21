import { type Metadata } from 'next'
import { DM_Sans, Inter, Outfit } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import RegistrationBanner from '@/components/RegistrationBanner'
import faviconPng from './favicon.png'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})


const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - IEEE AI Dev Hack 2025',
    default: 'IEEE AI Dev Hack 2025',
  },
  description:
    'Join IEEE AI Dev Hack 2025 - a remote hackathon from Sept 5–7 focused on building real-world AI tools. Compete on Devpost for cash prizes, workshops, and global impact. Open to students and developers worldwide!',
  icons: [
    { rel: 'icon', url: faviconPng.src, type: 'image/png' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
        outfit.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">
          <RegistrationBanner/>

          {children}
        </div>
      </body>
    </html>
  )
}
