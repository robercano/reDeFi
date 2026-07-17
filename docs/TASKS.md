# reDeFi SDK Tasks

> This is the authoritative, truthful delivery plan for the reDeFi SDK: every work item below is scoped,
> ordered into phases, and tied to a tracking GitHub issue. For architectural background on the
> subsystems these items touch, see [ROADMAP.md](./ROADMAP.md).
>
> A box is checked `[x]` only when the corresponding work is verified merged into `origin/main` (via its
> tracking GitHub issue and/or PR history) — not because a commit message *claims* it's done. Earlier
> revisions of this file marked items done that were not; those claims have been corrected, and any new
> discrepancy between this file and reality should be filed as an issue against this file.

## Phase 0 — Security & hygiene

- [x] **W0.1** Revoke the committed GitHub PAT, rotate it, `git rm` `gh_token.txt`, and purge it from
  history. *(root)* — closes #4.
- [x] **W0.2** Untrack and gitignore junk: `k.py`, `k.sh`, `kill.js`, `scratch.ts`, `test_tenderly.js`,
  `vitest-*.log`, `lint_output.txt`, `protocol-plugins/service/scratch2.ts`, convex debug scripts,
  `sdk-demo/{playwright-report,test-results,server.log,build_error.log}`,
  `sdk/e2e/{test.log,coverage}`. *(root, sdk-protocol-plugins, sdk-demo, sdk-e2e)* — closes #5.
- [x] **W0.3** Auth hygiene: remove the `'default-dev-key'` fallbacks (fail deploy instead), stop logging
  rejected keys in the authorizer, remove the demo proxy user-agent bypass, make the demo basic-auth
  password env-only. *(sdk-infra, api-authorizer, sdk-demo)* — closes #6.
- [x] **W0.4** Fix the committed red state: failing `LendingOrderPlanner` tests and the
  `no-explicit-any` lint errors in order-planner. *(sdk-order-planner)* — closes #7.
- [ ] **W0.5** Rewrite `README.md` to describe the real API (`makeSDK`, `sdk.protocols/portfolio/orders`);
  regenerate TASKS.md from this section with truthful checkboxes. *(root, docs)* — #8 (this item; becomes
  done when its PR merges).

## Phase 1 — Correctness of what already ships

- [ ] **W1.1** Fix the decimals bug: switch Yearn/Lido/Maker/Convex data sources to
  `createFromBaseUnit`, fix the unit tests that codify the bug, add a regression test per data source.
  *(sdk-protocol-plugins, sdk-common)* — #9.
- [ ] **W1.2** Convex: make it real (resolve pid via `Booster.poolInfo`, real APY/underlying, calldata
  tests) or deregister the plugin until then. *(sdk-protocol-plugins)* — #10.
- [ ] **W1.3** UniswapV3: make it safe (slippage minimums, per-chain NPM addresses, token ordering, fee
  tier from pool ID, fix `decreaseLiquidity`, implement the read methods, calldata tests). Deregister
  until safe. *(sdk-protocol-plugins)* — #11.
- [ ] **W1.4** Yearn: implement deposit/withdraw (ERC-4626-style) + calldata tests. *(sdk-protocol-plugins)* — #12.
- [ ] **W1.5** Wire `ExecutionType` end-to-end and fix Multicall semantics (approvals cannot ride
  Multicall3; `allowFailure: false`; dedupe the Multicall3 ABI into sdk-common).
  *(sdk-order-planner, api-server, sdk-common)* — #13.
- [ ] **W1.6** CompoundV3: real pool info (oracle prices, liquidation thresholds/penalties, TVL/borrowed),
  `getClaimTransaction`, accrued interest, fix the poolId-as-pool cast. *(sdk-protocol-plugins)* — #14.
- [ ] **W1.7** Maker: real DSR/SSR APY from the Pot/sUSDS rate. *(sdk-protocol-plugins)* — #15.
- [ ] **W1.8** ProtocolManager/registry hardening: cache plugin instances, expose the missing routing
  surface, add `liquidity` to `BaseProtocolPlugin`, remove the `Object.assign` hack, fail loudly on
  undefined chain. *(sdk-protocol-manager, sdk-protocol-plugins)* — #16.
- [ ] **W1.9** `principalAmount` honesty: mark it optional/`unknown` in DTOs, stop echoing
  `currentAmount`. *(sdk-common, sdk-protocol-plugins, sdk-portfolio)* — #17.

## Phase 2 — Make the simulator real

- [ ] **W2.1** Shared simulation infrastructure: allowance-step computation and projected-output helpers.
  *(sdk-simulator)* — #18.
- [ ] **W2.2** Real Lending simulation: allowance steps, projected health factor/borrow capacity,
  price-denominated outputs. *(sdk-simulator)* — #19.
- [ ] **W2.3** Real Yield/Stake simulation: allowance steps, projected receipt-token amounts, APY-based
  projections. *(sdk-simulator)* — #20.
- [ ] **W2.4** Real Liquidity simulation: amounts/ratios from pool state, min-amounts from slippage.
  *(sdk-simulator)* — #21.
- [ ] **W2.5** Gas estimation service: `eth_estimateGas` against planner-produced calldata; populate
  `gasEstimations` everywhere. *(sdk-simulator, sdk-blockchain-client)* — #22.
- [ ] **W2.6** Swap simulation completeness: slippage on `minimumReceivedAmount`, oracle-sourced
  spot/offer prices, real `routes`, honor `preferredProvider`. *(sdk-simulator, sdk-swap)* — #23.
- [ ] **W2.7** Transfer intent: implement `TransferSimulatorManager` and a `TransferOrderPlanner` (or
  remove the intent type). *(sdk-simulator, sdk-order-planner)* — #24.
- [ ] **W2.8** Kill dead ends in the public API: implement `protocols.getPosition`, add a `name` GSI or
  drop `tokens.getTokenByName`, implement client `PortfolioManager.getPositions`/`UserClient.getPosition`.
  *(api-server, sdk-tokens, sdk-client)* — #25.
- [ ] **W2.9** Portfolio depth: parallelize holdings fetch, remove console.log spam, add protocol
  positions. *(sdk-portfolio)* — #26.

## Phase 3 — Make quality enforceable

- [ ] **W3.1** `gates.json` truth pass: add `sdk-simulator`, remove stale `sdk-router`, make
  `test_affected` actually filter, stop `coverage` re-running the full suite. *(meta — .claude/)* — #27.
- [ ] **W3.2** Coverage honesty: every package emits coverage; include `apps/**` in `cicheck`.
  *(meta, per-module)* — #28.
- [ ] **W3.3** Real typecheck gate (`tsc --noEmit` per module, incl. `sdk-infra` and `api-authorizer`).
  *(meta, api-authorizer)* — #29.
- [ ] **W3.4** Bring integration tests into a scheduled workflow (Tenderly), fix `TenderlyFork` disposal,
  un-skip the AaveV3 collateral assertion, move Maker's calldata tests into the gate.
  *(sdk-testing-utils, sdk-tenderly-utils, sdk-protocol-plugins, meta)* — #30.
- [ ] **W3.5** Playwright in CI for `sdk-demo`; deepen the specs beyond happy-path text assertions.
  *(sdk-demo)* — #31.
- [ ] **W3.6** Calldata-exactness unit tests for every plugin action. *(sdk-protocol-plugins)* — #32.
- [ ] **W3.7** Clean up `packages/sdk/e2e`: delete the phantom scripts and armada/Fleet naming, make the
  default `test` script honest. *(sdk-e2e)* — #33.
- [ ] **W3.8** Decide the Anvil question: adopt `AnvilFork` for a free local-CI tier, or delete it.
  *(sdk-testing-utils, meta)* — #34.

## Phase 4 — Architecture cleanup

- [ ] **W4.1** Fix the layering inversion: move shared provider/cache bases out of `apps/api-server`,
  extract the `SDKAppRouter` type into a lightweight contract package.
  *(api-server, serverless-shared, sdk-client, many)* — #35.
- [ ] **W4.2** Purge ancestor vestiges from sdk-common (Armada/Fleet/Ark types, `DEPRECATED.ts`) and dead
  code (builders subsystem, `EncodeStrategy`, client `SimulationManager`, `TokensManagerClient` v1).
  *(sdk-common, sdk-client, sdk-order-planner, sdk-protocol-plugins, sdk-simulator)* — #36.
- [ ] **W4.3** React layer: share one `SDKManager` via `SDKProvider` context, add hooks for
  yield/staking/liquidity pools + allowances. *(sdk-react)* — #37.
- [ ] **W4.4** Type-safety pass: replace `z.any()` tRPC inputs, eliminate `as unknown as` casts.
  *(api-server, sdk-simulator, sdk-order-planner, sdk-tokens)* — #38.
- [ ] **W4.5** Infra robustness: fix `create-backend.ts` version parsing, gate `.env.local` side effect,
  fix `fetchTokens` address-case mismatch, add tests for jobs and api-router.
  *(sdk-infra, jobs, api-router)* — #39.

## Phase 5 — Complete the protocol matrix

- [ ] **W5.1** Curve (`CurveProtocolPlugin` — Liquidity/Yield): pools, add/remove liquidity, gauge APY.
  *(sdk-protocol-plugins)* — #40.
- [ ] **W5.2** Pendle (`PendleProtocolPlugin` — Yield): PT/YT/LP markets, implied APY.
  *(sdk-protocol-plugins)* — #41.
- [ ] **W5.3** EigenLayer (`EigenLayerProtocolPlugin` — Staking/Restaking).
  *(sdk-protocol-plugins, sdk-common)* — #42.
- [ ] **W5.4** Multi-chain correctness pass: per-chain address maps everywhere, declared-chains vs.
  actual-support audits per plugin. *(sdk-protocol-plugins)* — #43.

## Phase 6 — Post-V1 differentiators

- [ ] **W6.1** Yield/APY Discovery API (`DiscoveryManager`). *(new module, api-server)* — #44.
- [ ] **W6.2** Permit2 support in simulation + planning. *(sdk-simulator, sdk-order-planner, sdk-allowance-manager)* — #45.
- [ ] **W6.3** ERC-4337 execution: bundler client, UserOperation construction, paymaster sponsorship.
  *(sdk-order-planner, new module)* — #46.
- [ ] **W6.4** Action batching / recipes: sequential multi-intent simulation and unified bundle output.
  *(sdk-simulator, sdk-order-planner)* — #47.
- [ ] **W6.5** Cross-chain intents: bridge abstraction in simulator + planner.
  *(sdk-simulator, sdk-order-planner, new module)* — #48.
- [ ] **W6.6** Real cost-basis/`principalAmount` via event indexing. *(sdk-portfolio)* — #49.
- [ ] **W6.7** Production readiness: per-client API keys, production deploy stage + workflow, CloudWatch
  alarms. *(api-authorizer, sdk-infra)* — #50.
