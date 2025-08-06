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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-body`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
