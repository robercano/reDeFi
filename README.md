# ⚡ reDeFi SDK

[![CI](https://github.com/robercano/reDeFi/actions/workflows/ci.yaml/badge.svg)](https://github.com/robercano/reDeFi/actions/workflows/ci.yaml)
![Coverage](https://img.shields.io/badge/Coverage-78.96%25-yellow.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-7ac4ff.svg)](./LICENSE)

reDeFi is a multi-chain DeFi SDK and protocol ecosystem: a strongly-typed **TypeScript SDK** for swaps,
portfolio tracking, allowance management, and order planning/routing across DeFi protocols, backed by a
serverless API on AWS. The SDK talks to the backend over a type-safe [tRPC](https://trpc.io) contract, so
the request/response shapes for every call below are checked at compile time — no hand-written API
clients, no drifting types.

[View the automated Test Coverage Report](./docs/TEST_COVERAGE.md).

For the architecture, the verified current state of the project, and the implementation plan, see
**[docs/ROADMAP.md](./docs/ROADMAP.md)** — it is the source of truth for what is real vs. stubbed.
**[docs/TASKS.md](./docs/TASKS.md)** tracks the work items derived from it.

---

## What actually works today

Verified directly against the code in this repo:

- **`makeSDK` / `makeSDKWithSigner`** — typed client factories backed by the tRPC API.
- **Swaps** — live 1inch quotes/calldata (`sdk.swaps`) and CowSwap intent swaps with client-side EIP-712
  signing (`sdk.intentSwaps`).
- **Oracle** — spot prices via 1inch with a CoinGecko fallback (`sdk.oracle`).
- **Tokens** — a daily cron-fed token list with logos and metadata, served through the API (`sdk.tokens`,
  `chain.tokens`).
- **Portfolio** — wallet holdings and fiat-valued portfolio snapshots (`sdk.portfolio.getUserPortfolio`).
- **Allowance checks and on-chain approve transactions** (server-side `AllowanceManager`, used by the
  simulation/order pipeline).
- **Read paths** for the AaveV3, Lido, Maker, and CompoundV3 protocol plugins (`sdk.protocols`).

**Not ready yet** — don't build against these: simulator gas estimation and most Lend/Yield/Stake/Liquidity
simulation paths are stubs that echo their inputs back; `protocols.getPosition`-style position lookups and
`PortfolioManager.getPositions()` are unimplemented; Yearn and UniswapV3 deposit/withdraw calldata throw
`Not implemented`; Convex hardcodes pool ID `0`. See [docs/TASKS.md](./docs/TASKS.md) for the current
delivery plan tracking fixes to these gaps, and [docs/ROADMAP.md](./docs/ROADMAP.md) for the broader
architecture — before relying on anything not listed above as working.

---

## 🚀 Getting Started

### 1. Installation

This is a `pnpm` workspace orchestrated by Turborepo:

```bash
pnpm install
```

### 2. Environment variables

```bash
cp .env.template .env
```

Fill in the values you need (RPC URLs, 1inch/CoinGecko keys, etc. — see the template for the full list).
Real secrets never belong in the repo; `.env` is gitignored.

### 3. Run the workspace

```bash
pnpm run dev      # turbo run dev across every app/package, including the sdk-demo frontend
pnpm run build    # build all packages
pnpm run test     # run the Vitest suites
pnpm run lint     # eslint across the workspace
```

---

## 👩‍💻 Using the SDK

Everything below is imported from `@thesolidchain/sdk-client` (and value types from
`@thesolidchain/sdk-common`), matching the real exports in
[`packages/sdk/client/src/index.ts`](./packages/sdk/client/src/index.ts).

### Create a client

```typescript
import { makeSDK, makeSDKWithSigner } from '@thesolidchain/sdk-client'

// Read-only client
const sdk = makeSDK({
  apiURL: process.env.SDK_API_URL!,
  apiKey: process.env.SDK_API_KEY,
})

// Client that can also sign and send intent orders (e.g. CowSwap)
const signerSdk = makeSDKWithSigner({
  apiURL: process.env.SDK_API_URL!,
  apiKey: process.env.SDK_API_KEY,
  signer, // an ethers Signer
})
```

`sdk` (an `SDKManager`) exposes: `chains`, `tokens`, `users`, `portfolio`, `swaps`, `intentSwaps`,
`oracle`, `protocols`, `orders`, `simulator`, `activity`, and `eventBus`.

### Look up a chain and a token

```typescript
const chain = await sdk.chains.getChainById({ chainId: 1 })
const usdc = await chain.tokens.getTokenBySymbol({ symbol: 'USDC' })
```

### Get a swap quote and the calldata to execute it

```typescript
import { Address, Percentage, TokenAmount } from '@thesolidchain/sdk-common'

const fromAmount = TokenAmount.createFrom({ token: usdc, amount: '100' })
const weth = await chain.tokens.getTokenBySymbol({ symbol: 'WETH' })
const slippage = Percentage.createFrom({ value: 1 }) // 1%

const quote = await sdk.swaps.getSwapQuoteExactInput({
  fromAmount,
  toToken: weth,
  slippage,
})

const swapData = await sdk.swaps.getSwapDataExactInput({
  fromAmount,
  toToken: weth,
  recipient: Address.createFromEthereum({ value: userWalletAddress }),
  slippage,
})

// swapData.{targetContract, calldata, value} form the transaction to send through
// ethers/viem/your wallet provider
```

### Read a user's portfolio

```typescript
import { User, Wallet, Address } from '@thesolidchain/sdk-common'

const user = User.createFrom({
  chainInfo: chain.chainInfo,
  wallet: Wallet.createFrom({ address: Address.createFromEthereum({ value: userWalletAddress }) }),
})

const portfolio = await sdk.portfolio.getUserPortfolio({ user })
```

### Read a lending pool (AaveV3, CompoundV3, ...)

```typescript
// poolId is protocol-specific, e.g. AaveV3LendingPoolId.createFrom({...}) from
// @thesolidchain/protocol-plugins
const pool = await sdk.protocols.getLendingPool({ poolId })
const poolInfo = await sdk.protocols.getLendingPoolInfo({ poolId })
```

### Build an order for execution

```typescript
const order = await sdk.orders.buildOrder(buildOrderInputs)
// order.transactions can be sent through your wallet provider
```

See [`apps/sdk-demo`](./apps/sdk-demo) and the [`useSDK`](./packages/sdk/react/src/hooks/useSDK.ts) React
hook for complete, working call sites for all of the above.

---

## 🏗 Repository layout

- `apps/api-server/` — serverless tRPC API backend (protocol plugins, token/price/portfolio services).
- `apps/api-router/` — API routing layer service.
- `apps/api-authorizer/` — Lambda authorizer for the API gateway.
- `apps/jobs/` — scheduled/background job workers (e.g. the token-list sync cron).
- `apps/sdk-demo/` — demo app (Next.js) exercising the SDK end to end.
- `apps/sdk-infra/` — SST infrastructure/deployment app for the SDK backend.
- `packages/sdk/*` — the SDK itself, one package per service: `client` (this README's public API),
  `swap`, `oracle`, `order-planner`, `portfolio`, `allowance-manager`, `protocol-plugins`, `react`
  bindings, and more.
- `packages/ui/` — shared React UI component library.
- `packages/common/`, `packages/serverless-shared/` — shared utilities.
- `packages/abis/` — smart contract ABI definitions.
- `packages/deployment-types/`, `packages/deployment-utils/`, `packages/hardhat-utils/` — contract
  deployment tooling.
- `packages/config/` — shared eslint/jest/typescript/vitest configs.
- `docs/` — project and SDK documentation, including the [Roadmap](./docs/ROADMAP.md) and
  [Tasks](./docs/TASKS.md).

---

## 📄 License

[MIT](./LICENSE) © 2026 Roberto Cano — The Solid Chain.

---

**reDeFi** — a multi-chain DeFi SDK and protocol ecosystem, by The Solid Chain.
