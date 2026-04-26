# reDeFi Testing Strategy & Implementation Plan

## 🏆 Testing Stack
- **E2E & Front-End Testing:** Playwright (`@playwright/test`)
- **Unit & Component Testing:** Vitest + React Testing Library (RTL)

---

## 🚀 Implementation Phases

### Phase 1: E2E Testing Foundation (Playwright)
**Goal:** Establish E2E testing for the `sdk-demo` app.
- [ ] Install Playwright in `apps/sdk-demo`.
- [ ] Configure `playwright.config.ts` (baseUrl: `http://localhost:3000`).
- [ ] Write Smoke Test: Verify the `sdk-demo` app loads correctly.
- [ ] Write Yield Simulation E2E Test: Simulate entering an amount and viewing projected yields.
- [ ] Write CORS/API E2E Test: Intercept network requests and ensure API Gateway responses are successful.

### Phase 2: Unit Testing Foundation (Vitest)
**Goal:** Establish pure logic testing for SDK packages.
- [ ] Install Vitest in `packages/sdk` (and other related packages).
- [ ] Test `DatabaseTokensProvider`: Mock DynamoDB client and verify caching logic.
- [ ] Test Protocol Plugins (e.g., `AAVEv3ProtocolPlugin`): Verify APY calculations and payload generation locally.
- [ ] Test Action Builders: Assert exact expected EVM transaction payloads for given intents.

### Phase 3: Component Testing (Vitest + RTL)
**Goal:** Test isolated React components in the SDK/Demo.
- [ ] Install React Testing Library in `packages/react-sdk` (or UI components folder).
- [ ] Test `YieldViewer` component: Feed mocked SDK data and assert correct rendering.
- [ ] Test `PortfolioViewer` component: Validate empty states and error states.

### Phase 4: Smart Contract / Web3 Integration
**Goal:** Test blockchain interactions using a local node.
- [ ] Set up local Anvil/Hardhat network in tests.
- [ ] Test Superstate Ark Deployment scripts against the local node.
- [ ] E2E Web3 Test: Use the SDK to sign and broadcast a transaction to the local node, asserting state changes (balances, pool shares).
