import './globals.css'
import { Inter } from 'next/font/google'
import SmoothScrollProvider from '@/components/smooth-scroll-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fermi Energy - Revolutionary Energy Solutions',
  description:
    'Pioneering breakthrough technologies in sustainable energy, quantum efficiency, and next-generation power systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
