# reDeFi SDK Roadmap & Architecture

This document serves as the master roadmap and architectural reference for the reDeFi SDK. It consolidates the testing strategy, token fetching architecture, protocol plugin abstractions, and the overarching intent execution flow.

> [!IMPORTANT]
> For the actionable list of implementation steps, please refer to the **[TASKS.md](./TASKS.md)** document.

---

## 1. Core Architecture: Intent Execution Flow

The reDeFi SDK routes all DeFi operations (Swaps, Transfers, Yield generation, Staking, Lending) through a standardized two-step pipeline: **Simulation** and **Order Planning**.

### Phase 1: Simulation (`ISimulatorManager`)
The **Simulator** acts as the SDK's "Dry-Run" engine.
- **Process:** When a user expresses an intent (e.g., "Swap 100 USDC to ETH"), the Simulator evaluates their portfolio. It checks token allowances via the `AddressBook`, fetches quotes from aggregators (like 1inch or CowSwap via the `SwapManager`), and estimates gas.
- **Output:** It returns a `Simulation` object containing multiple `SimulationStep`s (e.g., Step 1: Approve USDC, Step 2: Swap). This provides the frontend with validation, human-readable warnings, and exact projected outputs.

### Phase 2: Order Planning (`IOrderPlannerService`)
Once the user validates the `Simulation`, it is passed to the **OrderPlanner**.
- **Process:** The `OrderPlannerService` dynamically routes the request to a specific planner (e.g., `SwapOrderPlanner`). The planner uses the `ContractsProvider` to convert the `SimulationStep`s into raw EVM calldata (`TransactionInfo`).
- **Output:** It formats a final `Order`. Based on an `ExecutionType` flag (Direct, Multicall, ERC4337), it can bundle multiple steps (like Approve + Action) into a single optimized payload, or return an EIP-712 payload for off-chain intents.

---

## 2. Protocol Plugins Architecture

To build a robust and extensible system, we abstract the top DeFi protocols into generalized interfaces.

### Abstracting DeFi into "Yield Generation"
We classify Staking, Lending, and Liquidity Provision under a unified **Yield Generation** abstraction based on how yield is distributed:
1. **Value-Accruing Yield (Appreciation):** Receipt token exchange rate increases (e.g., `wstETH`, `sDAI`).
2. **Rebasing Yield:** Balance automatically increases in wallet (e.g., `stETH`, `aUSDC`).
3. **Claimable Rewards (Emission):** Secondary tokens are emitted and must be claimed (e.g., `CRV`, `COMP`).

### Feature Interfaces
Concrete plugins implement standardized capabilities:
- `IYieldProtocolManagerFeatures`
- `ILendingProtocolManagerFeatures`
- `ILiquidityProtocolManagerFeatures`

**Execution Flow:**
The `Simulator` queries the `ProtocolManager` for a compatible plugin to calculate yield projections. Later, the `OrderPlanner` calls the plugin's action builders (e.g., `buildDepositAction()`) to retrieve raw calldata.

---

## 3. Token Fetcher Architecture

The SDK's `TokenManager` requires a robust list of supported tokens and icons, integrated seamlessly with the Serverless Stack (SST) environment.

- **Fetching:** Token synchronization is run on command via SST CLI scripts (`scripts/sync-tokens.ts`) or an Admin API Endpoint, rather than expensive continuous cron jobs.
- **Storage:** Icons are stored in an Amazon S3 Bucket. Metadata is stored in DynamoDB or RDS.
- **Serving:** An API Gateway endpoint queries the database, caches the serialized list in Redis, and serves it with low latency to the SDK client. Docker is explicitly avoided to maintain the serverless pay-per-request model.

---

## 4. Testing Strategy

The project ensures high reliability through a multi-layered testing stack:

- **E2E & Front-End Testing (Playwright):** Smoke tests, CORS/API validation, and UI simulations against the `sdk-demo` app.
- **Unit Testing (Vitest):** Exhaustive testing of pure logic, Action Builders, and Protocol Plugins to ensure exact EVM payload generation.
- **Component Testing (Vitest + RTL):** Testing isolated React components (`YieldViewer`, `PortfolioViewer`) in the SDK/Demo.
- **Web3 Integration (Anvil/Hardhat):** E2E testing against local nodes to verify intent execution, smart contract deployment, and actual state changes.

---

## 5. Post-V1 Expansion Strategy (Market Dominance)

Based on comprehensive competitor analysis (evaluating Enso Finance, Li.Fi, Socket, and Wagmi), the reDeFi SDK is positioned to bridge the gap between low-level EVM execution and high-level intent solvers. To achieve market dominance, the architecture will evolve to support:

1. **Cross-Chain Intent Abstraction:** Expanding the `SimulatorManager` and `OrderPlanner` to natively interpret cross-chain bridging routes alongside standard Swaps and Yield generation.
2. **Native ERC-4337 & Paymaster Integration:** Enabling seamless gas sponsorship and Smart Account (bundler) execution directly within the `OrderPlanner`, offering gasless transactions for end-users out-of-the-box.
3. **Action Batching (Recipes):** Allowing developers to bundle arbitrary sequences of intents (e.g., Unstake -> Swap -> Re-stake) into a deterministic client-side simulation and execution cycle, removing the reliance on centralized off-chain solvers.
4. **DeFi Discovery Layer:** Implementing a centralized index of real-time APYs and Health Factors across supported plugins to actively guide user intents towards optimal yields.
