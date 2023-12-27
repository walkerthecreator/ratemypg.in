import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from './context/AuthProvider'
import NavBar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ratemypg',
  description: 'rate my pg is a review system for reviewing your accomodation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
            </head>
        
      <body className={inter.className}>
            <AuthProvider>
                <NavBar />
                {children}
            </AuthProvider>
        </body>
    </html>
  )
}
