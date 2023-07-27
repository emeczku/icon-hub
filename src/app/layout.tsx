import '../styles/globals.css'
import { ReactNode } from 'react'
import ReduxProvider from '@/components/ReduxProvider'

export const metadata = {
  title: 'Icon Hub',
  description: 'Speed up adding technology to your sites',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={'bg-gray-50'}>
        <ReduxProvider>
          <main className={'pt-10 pb-10 container mx-auto'}>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  )
}
