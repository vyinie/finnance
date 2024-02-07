import type { Metadata } from 'next'
import './globals.css'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Finnance',
  icons: '/imgs/logo.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = cookies().get('theme')?.value || ''
  return (
    <html className={`${theme}`} id="html" lang="pt-br">
      <body className="text-gray-600 transition-colors dark:text-neutral-300">
        {children}
      </body>
    </html>
  )
}
