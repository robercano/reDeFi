# ReDeFi SDK Roadmap & Pending Tasks

## Completed Tasks
- [x] Resolve `ELIFECYCLE` errors and fix E2E syntax errors during standard coverage runs.
- [x] Standardize test execution via Turbo in the monorepo (`packages/sdk/*`).
- [x] Perform full test coverage analysis across the SDK.
- [x] Identify packages needing tests to reach the 80% coverage threshold (e.g., `tokens-service`, `blockchain-client-provider`).
- [x] Refactor the StaticTokensProvider Implementation to use `ContractsProvider`.
- [x] Integrate Superstate Tokenized Funds (USTB/USCC).
- [x] Refactor Blockchain Provider Architecture (Alchemy integration).
- [x] Standardize Monorepo Dependency Management.
- [x] Resolve API Gateway CORS Errors for localhost.
- [x] Implement User Portfolio Demo.

## Pending Tasks
- [ ] Wire up `json-summary` Vitest coverage reporter.
- [ ] Track comment / JSDoc coverage and display both test and comment coverage on Nextra docs.
- [ ] Scaffold unit tests for core services (e.g., `swap-service`, `portfolio-service`, `api-server`) to fix 0% coverage.
- [ ] Increase SDK overall test coverage to 80% by targeting `tokens-service`, `blockchain-client-provider`, and `oracle-service`.
- [ ] Move to the React hook implementations.
