import type { Metadata } from 'next'
import './globals.css'

// Fonts manually disabled for Turbopack debugging

export const metadata: Metadata = {
  title: 'The Solid Chain - SDK Demo',
  description: 'Next.js Demo App featuring The Solid Chain React SDK.',
}

import { Providers } from './providers'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`h-full antialiased dark`}>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
