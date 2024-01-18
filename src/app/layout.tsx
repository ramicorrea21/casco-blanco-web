import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import NavBar from './components/navbar'
import Footer from './components/footer'
import WspButton from './components/wsp'

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
        <NavBar/>
        {children}
        <div className='footer-cont'>
        <Footer/>
        </div>
        </body>
    </html>
  )
}
