import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Commonly Used Arabic Phrases | Abdur-Rahman Bilal',
  description: 'Commonly Used Arabic Phrases stickers',
  openGraph: {
    title: 'Commonly Used Arabic Phrases | Abdur-Rahman Bilal',
    description: 'Commonly Used Arabic Phrases stickers',
    images: ['/assets/coverimage.png'],
    type: 'website',
    url: 'https://commonarabic.aramservices.com/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
