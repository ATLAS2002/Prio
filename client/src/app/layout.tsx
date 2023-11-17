import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Prio',
  description: 'Prioritize your loved ones'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={space_grotesk.className}>{children}</body>
    </html>
  )
}
