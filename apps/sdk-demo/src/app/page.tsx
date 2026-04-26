'use client'

import React, { useState } from 'react'
import { TokenFetcher } from '../components/TokenFetcher'
import { PortfolioViewer } from '../components/PortfolioViewer'
import { YieldViewer } from '../components/YieldViewer'
import { SwapViewer } from '../components/SwapViewer'

// Tool registry representing the available SDK demonstrations
const SDK_TOOLS = [
  {
    id: 'portfolio-viewer',
    name: 'User Portfolio',
    description: 'Fetch the aggregated portfolio balances and estimated fiat valuations for the actively connected user.',
    component: PortfolioViewer,
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
    name: 'Swap Simulator',
    description: 'Simulate decentralized exchanges to find optimal swap routes and quotes between two tokens.',
    component: SwapViewer,
  },
  // Placeholder to demonstrate how other tools can be added seamlessly
  {
    id: 'vault-manager',
    name: 'Vault Manager',
    description: 'Manage and interact with DeFi vaults using the SDK.',
    component: () => (
      <div className="w-full max-w-xl mx-auto mt-16 p-12 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-center">
        <svg className="w-12 h-12 mx-auto text-neutral-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
        <p className="text-neutral-400">The Vault Manager tool is currently under construction.</p>
      </div>
    ),
  },
]

import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const EmptyComponent = () => null

export default function Home() {
  const { chain, chainId, isConnected } = useAccount()
  
  // State to track which tool is currently selected
  const [activeToolId, setActiveToolId] = useState<string>(SDK_TOOLS[0].id)

  const activeTool = SDK_TOOLS.find((t) => t.id === activeToolId)
  const ActiveComponent = activeTool?.component || EmptyComponent

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden font-sans">
      {/* Ambient background glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--neon-orange)]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--neon-cyan)]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Top Navigation */}
      <nav className="w-full relative z-20 flex justify-end p-6 md:px-12 items-center gap-3">
        {isConnected && chainId && (
          <div className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-semibold text-neutral-300 shadow-sm flex items-center gap-2 backdrop-blur-md">
            <span className={`w-2 h-2 rounded-full ${chain ? 'bg-[var(--neon-cyan)] shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]'} animate-pulse`}></span>
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

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  )
}
