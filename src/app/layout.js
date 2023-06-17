import './globals.scss'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'Francisco Coya Abajo | Software Engineer Student',
  description: 'Web Apllications Developer and Software Engineer Student',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
