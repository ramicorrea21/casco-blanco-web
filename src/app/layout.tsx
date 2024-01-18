import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar'
import Footer from './components/footer'


const inter = Inter({
  subsets: ['latin'],
})


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
      <body className={inter.className}>
        <NavBar/>
        {children}
        <div className='footer-cont'>
        <Footer/>
        </div>
        </body>
    </html>
  )
}
