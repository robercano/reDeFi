'use client'

import dynamic from 'next/dynamic'

const DynamicProviders = dynamic(() => import('./providers-inner').then((m) => m.ProvidersInner), {
  ssr: false,
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <DynamicProviders>{children}</DynamicProviders>
}
