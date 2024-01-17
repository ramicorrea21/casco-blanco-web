import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Navbar from './components/navbar'
import Footer from './components/footer'

const VitesseSans = localFont({src : '../../public/font/VitesseSans/VITESSESANS-MEDIUM.otf'})

export const metadata: Metadata = {
  title: 'Casco Blanco Materiales',
  description: 'Tu proxima casa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={VitesseSans.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
