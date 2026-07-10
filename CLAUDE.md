# reDeFi

## What this project is
reDeFi is a multi-chain DeFi SDK and protocol ecosystem: a TypeScript SDK for swaps, portfolio tracking,
allowance management, and order planning/routing across DeFi protocols (with pluggable per-protocol
integrations, e.g. Yearn), backed by a serverless API on AWS.

## Stack & layout
- Language / runtime: TypeScript, Node 24
- Package manager: pnpm (workspaces), orchestrated by Turborepo
- Key directories (mirror `.claude/gates.json` → `modules`):
  - `apps/api-server/` — serverless API backend for the SDK/protocol
  - `apps/api-router/` — API routing layer service
  - `apps/api-authorizer/` — Lambda authorizer for the API gateway
  - `apps/jobs/` — scheduled/background job workers
  - `apps/sdk-demo/` — demo app exercising the SDK
  - `apps/sdk-infra/` — SST infrastructure/deployment app for the SDK backend
  - `packages/sdk/*` — the SDK itself, one package per service (client, router, swap, oracle,
    order-planner, portfolio, allowance-manager, protocol-plugins, react bindings, etc.) — each
    subpackage is its own module in `gates.json`
  - `packages/ui/` — shared React UI component library
  - `packages/common/`, `packages/serverless-shared/` — shared utilities
  - `packages/abis/` — smart contract ABI definitions
  - `packages/deployment-types/`, `packages/deployment-utils/`, `packages/hardhat-utils/` — contract
    deployment tooling
  - `packages/config/` — shared eslint/jest/typescript/vitest configs
  - `docs/` — project and SDK documentation

## Conventions
- Code style / lint rules of note: ESLint via `@thesolidchain/eslint-config`, Prettier for formatting
  (`pnpm run format` / `format:fix`). Run `pnpm run check-circular` to catch circular imports.
- Testing approach: Vitest, colocated with source per package. Coverage is aggregated across packages via
  `pnpm run coverage:total`; TSDoc/comment coverage is tracked alongside test coverage.
- Definition of done: build, lint, and tests pass; coverage ≥ 80%; all four review lenses approve.

## Multi-agent orchestration (this template)
This repo is set up for orchestrated multi-agent development. See `docs/USAGE.md`.
- **Agents:** `.claude/agents/` — orchestrator, implementer (worktree-isolated), reviewer, test-runner.
- **Adapter:** `.claude/gates.json` — module map, gate commands, model routing. **This is the file to keep current.**
- **Gates run via** `.claude/scripts/gate.sh <name>` and the hooks in `.claude/settings.json`.
- **Workflow:** `.claude/workflows/feature-fanout.js` for deterministic fan-out.

### Module boundaries (hard rule)
A worker assigned to a module MUST NOT edit files outside that module's `path`. Cross-module work is
re-scoped by the orchestrator, never reached across by a worker. Note: `packages/sdk/*` is split into one
module per subpackage (e.g. `sdk-react`, `sdk-swap`, `sdk-oracle`) — a worker on `sdk-swap` may only touch
`packages/sdk/swap`, not the rest of the SDK.

### Merge policy
`pr-per-agent` — base branch `main`. (Mirrored in `gates.json` → `merge`.)

## Don'ts
- Don't put secrets in the repo. `.env` is gitignored — real secrets (RPC keys, Tenderly access keys,
  private keys) live there and in GitHub Actions secrets, never inline in code or committed config.
- Don't bypass the gates.
- The `packages/sdk/e2e` tests fork live chains via Tenderly and need funded test wallets — they are NOT
  wired into the automated gate loop (`e2e` gate is intentionally empty in `gates.json`). Don't assume CI
  runs them; run manually when touching swap/order execution paths.
- Don't `git add -A` / `git add .` / `git commit -a` — **stage explicit paths by name.** Under the sandbox,
  masked config paths (`.mcp.json`, `.gitconfig`, `.claude/{launch.json,routines,…}`, editor dirs) appear as
  `/dev/null` character-device nodes; git can't index a device node, so a blanket add aborts the whole commit
  (`can only add regular files, symbolic links or git-directories`). Ignore any `crw-` entries in `git status`
  — they're sandbox masks, not your changes. See `docs/HARDENING.md` → Caveats.
