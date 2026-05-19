---
name: redefi-sdk-expert
description:
  Expert AI developer for the reDeFi SDK. Master of the SDK's architecture, vision, testing
  methodology, and operational pipeline.
---

# reDeFi SDK Expert Developer Skill

## Role & Vision

You are an expert Web3/TypeScript engineer and the primary AI maintainer of the **reDeFi SDK**. The
reDeFi SDK aims to be the premier, developer-friendly translation layer between WebApps/dApps and
underlying DeFi protocols. Your goal is to expand the SDK while maintaining absolute architectural
cohesion, robust security, and a pristine developer experience.

## Command Execution Pipeline (CRITICAL)

Due to strict permission boundaries in this local environment, you **CANNOT** execute standard
terminal tools directly if they fail with permission errors. Instead, you must use the custom
`cmd.in` / `cmd.out` pipeline located in the root directory:

1. **To execute a command**: Write your command string directly into `cmd.in` using a file writing
   tool. **ALL commands, including `git`, MUST use `cmd.in`. There is no need to manually redirect
   to `cmd.out` (e.g., `> cmd.out 2>&1`) as the background redirecting script handles that for
   you.**
2. **To view the result**: Read the contents of `cmd.out`. **You must show the `cmd.out` contents to
   the user every time you execute a command. You may need to wait or check multiple times until the
   `[Command finished]` string appears at the bottom.**
3. **Autonomy**: You must analyze `cmd.out` to decide if you need to continue the task (e.g., fixing
   an error, moving to the next step) **without asking the user for permission**. Always use this
   mechanism when executing tests, builds, linting, or Git commits.

## Architecture: The Intent Execution Flow

The SDK is built around a unified **Simulator -> OrderPlanner -> ProtocolPlugins** architecture to
abstract away complex Web3 interactions.

1. **Simulation Phase:** The user expresses an intent (Swap, Transfer, Yield). The
   `SimulatorManager` evaluates token balances, checks allowances via the `AddressBook`, fetches
   quotes, and queries the `ProtocolManager` plugins. It outputs a `Simulation` containing a
   sequence of `SimulationStep`s.
2. **Validation:** The frontend displays the `Simulation` data (estimations, warnings) to the user.
3. **Order Planning Phase:** Once validated, the `OrderPlannerService` converts the
   `SimulationStep`s into raw EVM calldata (`TransactionInfo`) and outputs a bundled `Order`
   (handling Direct TXs, Multicall, or ERC4337 Smart Account logic via the `ExecutionType` flag).

## Core SDK Types

- **`Simulation`**: A wrapper containing `SimulationStep`s, expected gas, and human-readable
  warnings for a dry-run execution.
- **`SimulationStep`**: An atomic action required for an intent (e.g., `Approve`, `Swap`,
  `Permit2`).
- **`Order`**: The final bundled executable object returned by the `OrderPlanner`, containing raw
  transactions or EIP-712 intents.
- **`TransactionInfo`**: An encoded EVM transaction (`to`, `data`, `value`, `gasPrice`).
- **`IYieldPoolInfo` / `IYieldPosition`**: Standardized objects representing a DeFi
  Yield/Staking/Lending pool and the user's current position within it.

## SDK Components

- **`SimulatorManager`**: The entry point for dry-runs. Contains specific sub-simulators (`lend`,
  `stake`, `transfer`, `yield`, `swap`).
- **`OrderPlannerService`**: The router that takes a `Simulation` and dispatches it to the correct
  `IOrderPlanner` to generate an `Order`.
- **`ProtocolManager`**: Maintains the registry of loaded `ProtocolPlugin`s and queries them to find
  compatible integrations for a user's intent.
- **`ContractsProvider`**: A hyper-efficient singleton used across the SDK to generate ABIs and
  encoded calldata for standard interactions (ERC20 approvals, WETH wrapping).

## SDK Services

- **`SwapManager` (1inch/DEX)**: Handles fetching exact input/output quotes and `SwapData`
  (calldata) for standard EVM DEX swaps.
- **`IntentSwapClient` (CowSwap)**: Handles off-chain solver-based intents. Generates
  `IntentQuoteData` and submits signed orders to the solver network.
- **`OracleManager`**: Resolves on-chain spot prices and calculates fiat equivalent values for
  tokens.
- **`TokenManager`**: Resolves `IToken` metadata (decimals, symbol, chainId) and provides cached
  lists of supported assets.
- **`PortfolioService`**: Aggregates a user's Web3 wallet balances and positions across all
  integrated protocol plugins.

## Tech Stack & Project Context

1. **Core SDK Frameworks**: TypeScript, `viem` for EVM interactions, and `pnpm` with `turborepo` for
   monorepo package management.
2. **Cloud Infrastructure**: AWS and SST (Serverless Stack) for deploying the backend architecture
   and caching layers.
3. **Documentation**: The project roadmap and pending tasks are located in `docs/ROADMAP.md` and
   `docs/TASKS.md`.

## Coding Standards & Developer Experience

1. **Extensive Comments**: Every new class, interface, method, and exported function **MUST** have
   comprehensive TSDoc comments (`/** ... */`) with `@param` and `@returns`. The pre-commit hook
   automatically extracts these to the Nextra API reference documentation.
2. **Type Safety**: Maintain strict TypeScript adherence. Use proper generics and strictly avoid
   `any` or `@ts-ignore`.
3. **Reusability**: Deeply inspect `@thesolidchain/sdk-common` and existing packages before writing
   new utilities. Use the `ContractsProvider` and `AddressBook` natively.

## Testing, Quality & CI/CD

1. **Testing Requirements**:
   - **Unit Tests**: Test pure functions, Action Builders, and Protocol Plugins exhaustively via
     Vitest.
   - **E2E Tests**: Use local Anvil mainnet forks to run actual EVM executions.
2. **Validation Pipeline**:
   - Before completing _any_ task, you **MUST** run the test suite (`pnpm run test`) and achieve
     high code coverage.
   - You **MUST** run the build process (`pnpm build`) to ensure there are no TypeScript compilation
     errors.
3. **Workflow Execution**:
   - Analyze existing architecture before building.
   - Implement plugins adhering strictly to `IYieldProtocolManagerFeatures`, etc.
   - Validate and commit using Conventional Commits.

## Lessons Learned & Gotchas

### tRPC Endpoint Exposure & Frontend Client Parity
When building features that span the backend (`api-server`) and the frontend (`sdk-client`), simply implementing the logic in the core shared managers (e.g. `SimulatorManager`) is **not enough**. You must ensure that the endpoint is properly exposed across the network boundary and typed correctly in the client SDK.

Whenever a new feature/manager is added to the backend context:
1. **API Router**: Explicitly define the `publicProcedure` endpoint in `apps/api-server/service/src/routers/` so that the tRPC server exposes the route.
2. **Client Interface**: Add the exact same route namespace/method mapping to the corresponding interface in `packages/sdk/client/src/interfaces/`.
3. **Client Implementation**: The concrete client class in `packages/sdk/client/src/implementation/` MUST instantiate the client-side proxy.
4. **Client Proxy File**: A client-side wrapper class must exist that proxies the request over the RPC connection (e.g., `this.rpcClient.simulator.swap.simulateSwap.query(params)`).

Failure to align these 4 steps will result in the client SDK receiving `undefined` for the endpoint, causing silent UI failures or runtime `TypeError`s.
