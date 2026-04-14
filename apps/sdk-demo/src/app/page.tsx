"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--neon-orange)]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--neon-cyan)]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Main Content Container */}
      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        
        {/* Badge / Announcement */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/5 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-transform hover:scale-105 duration-300">
          <span className="flex h-2 w-2 rounded-full bg-[var(--neon-cyan)] glow-effect-cyan"></span>
          <span className="text-sm font-medium text-[var(--neon-cyan)] tracking-wide">SDK Client React Edition</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight drop-shadow-2xl">
          Build the Future of <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-orange)] to-[var(--neon-cyan)] filter drop-shadow-[0_0_20px_rgba(255,85,0,0.5)]">
            Decentralized Finance
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl font-light mx-auto leading-relaxed">
          The ultimate toolkit for seamless interactions with The Solid Chain. Experience blazing-fast transactions, strictly-typed contracts, and an unparalleled developer experience.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <button className="px-8 py-4 rounded-xl font-bold text-black bg-[var(--neon-orange)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,85,0,0.8)] glow-effect-orange active:scale-95 group">
            <span className="flex items-center gap-2">
              Start Building
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </button>
          
          <button className="px-8 py-4 rounded-xl font-bold box-border relative overflow-hidden group transition-all duration-300 border border-[var(--neon-cyan)]/50 bg-black/40 hover:bg-[var(--neon-cyan)]/10 active:scale-95 text-[var(--neon-cyan)] backdrop-blur-md">
            <span className="relative z-10 flex items-center gap-2">
              Read Documentation
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--neon-cyan)]/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
        </div>

        {/* Mock Data / Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 text-left w-full max-w-5xl">
          {[
            { title: "Strictly Typed", desc: "End-to-end type safety directly mapped to our deployed smart contracts.", color: "orange" },
            { title: "React First", desc: "Out-of-the-box React hooks to instantly fetch vault data and prices.", color: "cyan" },
            { title: "High Performance", desc: "Optimized multi-calls and efficient event batching architecture.", color: "orange" }
          ].map((feature, i) => (
            <div 
              key={i} 
              className={`p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--neon-${feature.color})]/50 group`}
            >
              <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-[var(--neon-${feature.color})]/10 text-[var(--neon-${feature.color})] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--neon-${feature.color}),0.4)]`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-neutral-400 font-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Global Shimmer Animation Definition */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </div>
  );
}
