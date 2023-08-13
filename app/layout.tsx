import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Headers from '@/components/Headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shubham Shah',
  description: 'Welcome to my site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <section className="z-[1000] sticky top-0 " >
     <Header />
     {/* <Headers/> */}
     </section>
        {children}</body>
    </html>
  )
}
