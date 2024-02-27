import type { Metadata } from 'next'
import { Inter , Open_Sans ,  } from 'next/font/google'
import './globals.css'
import AuthProvider from './context/AuthProvider'
import NavBar from '@/components/Navbar'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ['latin'] })
const opensans = Open_Sans({ subsets: ['latin'] , weight : ['400' ,'500' , '700'] })

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
        
        <body className={GeistSans.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
                <NavBar />
                {children}
            </AuthProvider>
          </ThemeProvider>
        </body>
    </html>
  )
}
