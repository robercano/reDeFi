# ReDeFi SDK Tasks

The reDeFi SDK has a well-defined architecture. Any tasks must comply with this architecture as defined in the [ROADMAP.md](./ROADMAP.md). If it is not clear how to adhere to the architecture, you must ask for advice.

## 0. CI/CD & Testing Infrastructure

- [x] Configure Github Actions to run `cicheck` on every push to `main` and automatically commit/publish the test coverage to `docs/TEST_COVERAGE.md`.
- [x] Configure Github Actions to automatically add/update status badges in `README.md` upon successful `cicheck` execution.
- [x] Complete E2E testing foundation using Playwright in `apps/sdk-demo`.
- [x] Expand Vitest component testing in `packages/sdk-react`.
- [ ] Solidify smart contract/web3 integrations using the local Anvil/Hardhat node.

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
- [x] **Maker / Sky:** (`MakerProtocolPlugin` - Yield)
- [x] **Uniswap V3:** (`UniswapV3ProtocolPlugin` - Liquidity)
- [ ] **Compound V3:** (`CompoundV3ProtocolPlugin` - Lending)
- [ ] **Convex Finance:** (`ConvexProtocolPlugin` - Yield)
- [ ] **EigenLayer:** (`EigenLayerProtocolPlugin` - Staking)
- [ ] **Pendle:** (`PendleProtocolPlugin` - Yield)
- [ ] **Curve Finance:** (`CurveProtocolPlugin` - Liquidity/Yield)

*NOTE: Replace mock data with real on-chain/subgraph data for the plugins once the integration works end-to-end.*

## 4. Expansion & Competitor Analysis (Post-V1)

Derived from our competitor analysis against Enso, Li.Fi, and Wagmi/viem, the following features are prioritized to dominate the DeFi aggregation market:

- [ ] **Cross-Chain Abstracted Intents:** Integrate a bridge abstraction into the `SimulatorManager` to allow cross-chain deposits/swaps (e.g., bridging Polygon USDC to Ethereum Lido).
- [ ] **Paymaster & Gas Abstraction:** Leverage `ExecutionType.ERC4337` to integrate bundlers/paymasters (like Pimlico or Biconomy), enabling sponsored, gasless transactions natively within the `OrderPlanner`.
- [ ] **Action Batching / Recipe Builder:** Enhance `SimulatorManager` to accept and dry-run sequential intents (e.g., Swap -> Approve -> Stake) and output a unified EIP-712 / Multicall bundle.
- [ ] **Yield / APY Discovery API:** Build a `DiscoveryManager` that indexes real-time APY across all supported yield/lending plugins, enabling a "deposit into best yield" routing intent.
