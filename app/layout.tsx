import Navbar from '@/components/navbar'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salman Web Dev',
  description: 'Salman Shaikh Web Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
