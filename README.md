# ⚡ reDeFi Framework

[![CI](https://github.com/robercano/reDeFi/actions/workflows/ci.yaml/badge.svg)](https://github.com/robercano/reDeFi/actions/workflows/ci.yaml)
![Coverage](https://img.shields.io/badge/Coverage-80.64%25-brightgreen.svg)

Building modern decentralized finance interfaces shouldn't require copy-pasting hundreds of ABIs, writing custom GraphQL layers for broken subgraphs, or managing brittle contract transaction wrappers.

**reDeFi** is a unified, strongly-typed execution and state-management framework built to dramatically simplify on-chain integration without compromising on power. Whether you are building an aggregator, a wallet, or a specialized yield application, reDeFi abstracts away the friction of EVM interaction so you can focus on building your product's core value.

[View the full automated Test Coverage Report here](./docs/TEST_COVERAGE.md).

---

## The reDeFi Advantage

### 1. Radically Type-Safe By Default
Forget loosely typed return limits or casting unknown network interfaces. Every aspect of the SDK, from protocol configurations (Vaults, Fleet Commanders) to native transaction parameters, is modeled deeply in TypeScript using strict validations. If it compiles, the ABI matches.  

### 2. Unified Liquidity & Routing Intelligently Handled
Integrations with tier-1 decentralized exchanges and aggregators (like 1inch, CowSwap) are baked directly into the core framework. reDeFi automatically seeks the most capital-efficient pathways to route user liquidity from raw balances directly into deployed strategies.

### 3. Clear, Domain-Driven APIs
You shouldn’t need to be a Solidity expert to integrate DeFi. Our domain-driven architecture organizes complex multi-contract architectures—like multi-layered yield Vaults and tipping logic—into clean, single-point operations.

### 4. Effortless Monorepo Design & DX
The codebase runs purely on `pnpm` and integrates with `turborepo` for instant builds. Environment synchronization and CI pipelines natively enforce a world-class test-driven environment. Everything from smart-contract bindings to the local demo application works consistently right out of the box.

---

## 👩‍💻 The Developer Experience

To demonstrate the power of the framework, here is an example of querying a vault strategy and preparing a secure execution payload in just a few lines.

### Vault Yield & Transaction Prep

```typescript
import { ReDeFiContext } from '@thesolidchain/redefi-sdk';

// 1. Initialize the unified context
const ctx = new ReDeFiContext({
  apiKey: process.env.SDK_API_KEY,
  rpcGateway: process.env.SDK_RPC_GATEWAY,
});

// 2. Load the specific strategy vault
const vault = await ctx.vaults.getVault({
  chainId: 8453, // Seamlessly operates across Base, Arbitrum, Mainnet, etc.
  address: '0xABC...1234',
});

// 3. Prepare the execution transaction natively
// Gas estimations, decimal matching, and ABI encoding are calculated automatically underneath.
const depositTxPayload = await vault.prepareDeposit({
  userAddress: '0xClientAddress',
  amount: 50.0, // Natural numbers accepted; BigInt conversions are handled logically.
  slippageTolerance: 0.01 
});

// Pass payload to Ethers, viem, or your provider of choice
await walletProvider.sendTransaction(depositTxPayload);
```

### Routing & Swapping

Getting optimal swaps and preparing the network operations previously took dozens of lines handling nested external API error bounds. With reDeFi:

```typescript
// Query the absolute best path across multiple protocols simultaneously
const quote = await ctx.routing.getOptimalSwapQuote({
  fromToken: 'USDC',
  toToken: 'WETH',
  amountIn: '1000',
  chainId: 1 
});

// Convert the quote into a broadcastable tx 
const swapTx = await ctx.routing.buildSwapTransaction(quote, userWalletAddress);
```

---

## 🚀 Getting Started

Bootstrapping your environment is incredibly lightweight.

### 1. Installation

Clone the repository and install packages using `pnpm` (which ensures strict resolving):
```bash
pnpm install
```

### 2. Environment Variables

Create your local `.env` configuration file from the template provided. It is heavily documented and split into discrete modules for easy setup:

```bash
cp .env.template .env
```
*(You will only need specific 3rd party keys like CoinGecko or 1inch if executing live external protocol routing).*

### 3. Start Development 

Build all dependencies locally via Turbo and boot the complete framework alongside our sandbox `sdk-demo` frontend testbed.

```bash
# Clean builds and spins up watch mode instantly
pnpm run dev
```

---

## 🏗 Repository Layout

The monorepo operates on a clean slate structure designed for high-velocity iterations:

* `sdk/` - The beating heart of reDeFi. Includes completely normalized, robust abstraction layers, automated type-generation, unified oracle queries, and integrated protocol interactions.
* `apps/sdk-demo/` - Our native Next.js application designed to interactively test and showcase the real-time capabilities of the SDK backend in a consumer-like environment.

***

**reDeFi** — *The abstraction layer for tomorrow's decentralized applications. Powered by The Solid Chain.*
