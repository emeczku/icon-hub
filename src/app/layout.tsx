import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Icon Hub',
  description: 'Speed up adding technology to your sites',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className={'container mx-auto'}>{children}</main>
      </body>
    </html>
  )
}
