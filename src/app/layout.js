import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import SmoothScrollProvider from '@/components/smooth-scroll-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata = {
  title: 'Fermi Energy - Revolutionary Energy Solutions',
  description:
    'Pioneering breakthrough technologies in sustainable energy, quantum efficiency, and next-generation power systems.',
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico', sizes: 'any' },
    ],
    apple: { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-body`}
        suppressHydrationWarning={true}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
