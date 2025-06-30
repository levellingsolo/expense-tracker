import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'

import Header from '@/components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Import Roboto (regular) for sans
const robotoSans = Roboto({
  subsets: ['latin'],
  weight: ['400'],
})

// Import Roboto Mono for monospaced font
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'Track your expenses',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={`${robotoSans.className} ${robotoMono.className}`}>
        <Header />
        <main className="container">
        {children}
        </main>
        <ToastContainer />
      </body>
    </html>
    </ClerkProvider>
  )
}
