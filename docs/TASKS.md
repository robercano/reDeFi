# ReDeFi SDK Tasks

The reDeFi SDK has a well-defined architecture. Any tasks must comply with this architecture as defined in the [ROADMAP.md](./ROADMAP.md). If it is not clear how to adhere to the architecture, you must ask for advice.

## 1. Core Architecture Refactoring

- [x] **Simulator Scope Expansion:**
  - [x] Add `swap` support to the `ISimulatorManager`.
  - [x] Refine `SimulationStep` types to clearly define pre-requisite actions (e.g., Direct Approvals, Permit, Permit2).
- [x] **Order Planner Enhancements:**
  - [x] Introduce an `ExecutionType` flag (e.g., `DIRECT`, `MULTICALL`, `ERC4337`) to `BuildOrderParams` to dictate how transactions are bundled.
  - [x] Ensure the `OrderPlannerService` dynamically accepts and processes Swaps, Transfers, Yield, and Staking simulations to generate standardized `Order` outputs.
  - [x] Implement Multicall and SmartAccount transaction bundling within the planners.

## 2. Frontend Swap Execution (SDK & React)

- [x] **Standard Swaps (1inch):**
  - [x] Add `getSwapDataExactInput` to `ISwapManagerClient` and implement it in `SwapManagerClient`.
  - [x] Create `getSwapDataHandler` in `sdk-react` and expose it via `useSDK`.
- [x] **Intent-Based Swaps (CowSwap):**
  - [x] Create React handlers for `getSellOrderQuote`, `sendOrder`, and `checkOrder`.
  - [x] Expose `intentSwaps` handlers via `useSDK`.
- [x] **UI Integration:** Add an "Execute Swap" flow in `SwapViewer.tsx` to utilize the exported payloads.

## 3. Protocol Plugins Implementation

Build the concrete plugins following the `IYieldProtocolManagerFeatures`, `ILendingProtocolManagerFeatures`, and `ILiquidityProtocolManagerFeatures` interfaces. Ensure comprehensive test coverage (>80%) and simulator end-to-end integration for each:

- [x] **Yearn Finance:** (`YearnProtocolPlugin` - Yield)
- [x] **Lido:** (`LidoProtocolPlugin` - Staking/Yield)
- [x] **Aave V3:** (`AaveV3ProtocolPlugin` - Lending)
- [ ] **Maker / Sky:** (`MakerProtocolPlugin` - Yield)
- [ ] **Uniswap V3:** (`UniswapV3ProtocolPlugin` - Liquidity)
- [ ] **Curve Finance:** (`CurveProtocolPlugin` - Liquidity/Yield)
- [ ] **Compound V3:** (`CompoundV3ProtocolPlugin` - Lending)
- [ ] **Convex Finance:** (`ConvexProtocolPlugin` - Yield)
- [ ] **EigenLayer:** (`EigenLayerProtocolPlugin` - Staking)
- [ ] **Pendle:** (`PendleProtocolPlugin` - Yield)

*NOTE: Replace mock data with real on-chain/subgraph data for the plugins once the integration works end-to-end.*

## 4. Testing & Quality Assurance

- [ ] Complete E2E testing foundation using Playwright in `apps/sdk-demo`.
- [ ] Test Smart Contract / Web3 integrations using a local Anvil/Hardhat node.
- [ ] Expand Vitest component testing in `packages/sdk-react`.

## 5. Expansion & Competitor Analysis

- [ ] Analyze what could be added to the SDK to make it the ultimate tool for anybody working in the DeFi environment: what's missing, what has more value, and how can we compete against other similar products in the market.
