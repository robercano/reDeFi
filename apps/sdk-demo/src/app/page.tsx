'use client'

import React, { useState } from 'react'
import { TokenFetcher } from '../components/TokenFetcher'
import { PortfolioViewer } from '../components/PortfolioViewer'
import { YieldViewer } from '../components/YieldViewer'
import { SwapViewer } from '../components/SwapViewer'
import { IntentSwapViewer } from '../components/IntentSwapViewer'
import { ProtocolInteractor } from '../components/ProtocolInteractor'

// Tool registry representing the available SDK demonstrations
const SDK_TOOLS = [
  {
    id: 'portfolio-viewer',
    name: 'User Portfolio',
    description:
      'Fetch the aggregated portfolio balances and estimated fiat valuations for the actively connected user.',
    component: PortfolioViewer,
  },
  {
    id: 'protocol-interactor',
    name: 'Protocol Interactor',
    description: 'Interact with protocols (Aave, Yearn, Lido) to simulate and execute deposits or withdrawals.',
    component: ProtocolInteractor,
  },
  {
    id: 'yield-viewer',
    name: 'Yield Positions',
    description: 'Track and monitor your active yield-bearing positions across various protocols.',
    component: YieldViewer,
  },
  {
    id: 'token-fetcher',
    name: 'Token Fetcher',
    description: 'Fetch token metadata by symbol directly from the blockchain.',
    component: TokenFetcher,
  },
  {
    id: 'swap-viewer',
    name: 'Direct Swap Simulator',
    description:
      'Simulate decentralized exchanges to find optimal swap routes and quotes between two tokens.',
    component: SwapViewer,
  },
  {
    id: 'intent-swap-viewer',
    name: 'Intent Swap Simulator',
    description:
      'Use off-chain solvers (CowSwap) to find optimal intents and sign orders gaslessly.',
    component: IntentSwapViewer,
  },
]

import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const EmptyComponent = () => null

export default function Home() {
  const { address, chain, chainId, isConnected } = useAccount()

  // State to track which tool is currently selected
  const [activeToolId, setActiveToolId] = useState<string>(SDK_TOOLS[0].id)
  const [isToppingUp, setIsToppingUp] = useState(false)
  const [topUpMessage, setTopUpMessage] = useState('')

  const activeTool = SDK_TOOLS.find((t) => t.id === activeToolId)
  const ActiveComponent = activeTool?.component || EmptyComponent

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden font-sans">
      {/* Ambient background glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--neon-orange)]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--neon-cyan)]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Top Navigation */}
      <nav className="w-full relative z-20 flex flex-wrap justify-center sm:justify-end p-4 md:p-6 md:px-12 items-center gap-2 md:gap-4">
          <button
            onClick={async () => {
              try {
                setIsToppingUp(true)
                setTopUpMessage('Topping up...')
                
                // Top up the requested test address
                const res1 = await fetch('/api/topup', {
                  method: 'POST',
                  body: JSON.stringify({ address: '0xAAf00613A099DeAe24EeB2c21Ad2965CaDEac244' }),
                })
                if (!res1.ok) {
                  const errorData = await res1.json().catch(() => ({}))
                  throw new Error(errorData.error || `HTTP ${res1.status}`)
                }
                
                // Top up the connected user wallet just in case they are different
                if (address && address.toLowerCase() !== '0xaaf00613a099deae24eeb2c21ad2965cadeac244') {
                  const res2 = await fetch('/api/topup', {
                    method: 'POST',
                    body: JSON.stringify({ address }),
                  })
                  if (!res2.ok) {
                    const errorData = await res2.json().catch(() => ({}))
                    throw new Error(errorData.error || `HTTP ${res2.status}`)
                  }
                }

                setTopUpMessage('Success!')
              } catch (err) {
                const error = err as Error
                console.error("Top up error:", error)
                setTopUpMessage(`Error: ${error.message.substring(0, 30)}...`)
                alert(`Top up failed details: ${error.message}`)
              } finally {
                setIsToppingUp(false)
                setTimeout(() => setTopUpMessage(''), 3000)
              }
            }}
            disabled={isToppingUp}
            className="px-3 py-2 md:px-4 md:py-2 bg-[var(--neon-orange)]/10 text-[var(--neon-orange)] border border-[var(--neon-orange)]/30 rounded-xl text-xs md:text-sm font-bold shadow-sm hover:bg-[var(--neon-orange)]/20 transition-all backdrop-blur-md whitespace-nowrap disabled:opacity-50"
          >
            {isToppingUp ? 'Topping up...' : topUpMessage || 'Top Up Fork'}
          </button>
        <a
          href="/api-reference/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex px-4 py-2 rounded-xl text-sm font-semibold text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30 hover:bg-[var(--neon-cyan)]/10 transition-all backdrop-blur-md"
        >
          API Reference ↗
        </a>
        <div className="hidden md:flex px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs font-mono text-neutral-400 shadow-sm items-center gap-2 backdrop-blur-md">
          <span className="text-[var(--neon-orange)]">Backend:</span>
          {process.env.NEXT_PUBLIC_API_URL || 'Not Configured'}
        </div>
        {isConnected && chainId && (
          <div className="hidden sm:flex px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-semibold text-neutral-300 shadow-sm items-center gap-2 backdrop-blur-md">
            <span
              className={`w-2 h-2 rounded-full ${chain ? 'bg-[var(--neon-cyan)] shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]'} animate-pulse`}
            ></span>
            {chain?.name || `Unknown Network (${chainId})`}
          </div>
        )}
        <ConnectButton chainStatus="none" />
      </nav>

      <main className="container mx-auto px-6 py-6 relative z-10 flex flex-col items-center min-h-screen">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/5 mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[var(--neon-cyan)] glow-effect-cyan"></span>
            <span className="text-sm font-medium text-[var(--neon-cyan)] tracking-wide">
              SDK Interactive Playground
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight drop-shadow-2xl">
            Developer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-orange)] to-[var(--neon-cyan)] filter drop-shadow-[0_0_20px_rgba(255,85,0,0.5)]">
              Toolkit Hub
            </span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Select a tool from the menu below to explore the SDK&apos;s capabilities in real-time.
            Built with React, beautifully typed, and blazing fast.
          </p>
        </header>

        {/* Tool Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SDK_TOOLS.map((tool) => {
            const isActive = activeToolId === tool.id
            return (
              <button
                key={tool.id}
                onClick={() => setActiveToolId(tool.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 border backdrop-blur-md ${
                  isActive
                    ? 'bg-[var(--neon-cyan)]/10 border-[var(--neon-cyan)] text-[var(--neon-cyan)] shadow-[0_0_20px_rgba(0,240,255,0.15)] scale-105'
                    : 'bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'
                }`}
              >
                {/* Simple icon representation */}
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
                )}
                {tool.name}
              </button>
            )
          })}
        </div>

        {/* Active Tool Workspace */}
        <div className="w-full flex flex-col items-center transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">{activeTool?.name}</h2>
            <p className="text-neutral-400">{activeTool?.description}</p>
          </div>

          <div className="w-full">
            <ActiveComponent />
          </div>
        </div>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `,
        }}
      />
    </div>
  )
}
