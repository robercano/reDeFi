# Protocol Plugins Architecture Proposal

## Market Analysis: Top 10 DeFi Protocols

To build a robust and extensible `ProtocolPlugins` architecture for the reDeFi SDK, we analyzed the top 10 DeFi protocols based on TVL, usage, and product types.

| Protocol | Primary Products | Yield Type / Mechanics |
| :--- | :--- | :--- |
| **1. Lido** | Liquid Staking | Rebasing Yield (stETH) & Value-accruing (wstETH) |
| **2. Aave V3** | Lending & Borrowing | Rebasing Yield (aTokens) & Claimable Rewards |
| **3. Maker / Sky** | CDPs, Savings (DSR) | Value-accruing (sDAI / sUSDS) |
| **4. Uniswap V3** | DEX / AMM | Liquidity Provision (Trading Fees - NFT positions) |
| **5. Curve Finance** | Stableswap AMM | Liquidity Provision & Claimable Rewards (CRV emissions) |
| **6. Compound V3** | Lending & Borrowing | Value-accruing (cTokens) & Claimable Rewards (COMP) |
| **7. Convex Finance** | Yield Optimizer | Auto-compounding (Value-accruing) & Claimable Rewards |
| **8. Yearn Finance** | Yield Aggregator | Auto-compounding Vaults (Value-accruing) |
| **9. EigenLayer** | Restaking | Claimable Rewards / Points (Delegation) |
| **10. Pendle** | Yield Trading | Value-accruing (PT) & Variable/Claimable (YT) |

---

## Abstracting DeFi into "Yield Generation"

When analyzing Staking, Lending, and Liquidity Provision (LPing), we can unify these operations under a generalized **Yield Generation** abstraction. Rather than treating a Uniswap LP position as completely alien to an Aave lending position, we can categorize the underlying mechanics by **how the yield is distributed to the user**.

### The Three Pillars of Yield
1. **Value-Accruing Yield (Appreciation)**
   - **Mechanism:** The user receives a receipt token (e.g., `wstETH`, `sDAI`, `cUSDC`, `yvUSDC`). The quantity of the receipt token remains static, but its exchange rate against the underlying asset increases over time.
   - **Abstraction:** Yield = `(Current Exchange Rate * Receipt Tokens) - Principal Deposit`.
2. **Rebasing Yield**
   - **Mechanism:** The receipt token balance automatically increases in the user's wallet algorithmically (e.g., `stETH`, `aUSDC`).
   - **Abstraction:** Yield = `Current Balance - Principal Deposit`.
3. **Claimable Rewards (Emission / Minting)**
   - **Mechanism:** The yield does not affect the principal asset. Instead, a secondary reward token is emitted and accumulated in a contract, requiring a distinct `claim()` transaction (e.g., `CRV`, `CVX`, `COMP`).
   - **Abstraction:** Yield = `Sum of Unclaimed Reward Tokens`.

*Note on Liquidity Provision:* Providing liquidity to an AMM like Uniswap V3 can be abstracted as a complex Value-Accruing position where the principal fluctuates (Impermanent Loss) and claimable trading fees act similarly to Claimable Rewards.

---

## Proposed Architecture: `ProtocolPlugins`

To abstract all of these protocols under the `ProtocolPlugins` registry, each plugin will expose standard capabilities or **"Features"**.

### Feature Interfaces

A `ProtocolPlugin` can implement one or more of the following feature interfaces:
- `lending`: For collateralized debt and borrowing (`Aave`, `Compound`, `Maker`).
- `yield`: For passive yield generation (`Yearn`, `Lido`, `sDAI`).
- `stake`: For locking tokens to secure a network or protocol (`EigenLayer`, `Curve veCRV`).
- `liquidity`: For AMM positions (`Uniswap`, `Curve`).

### The Generalized Yield Interface

We propose introducing an `IYieldProtocolManagerFeatures` interface that unifies passive yield generation:

```typescript
export enum YieldType {
  REBASING = 'REBASING',
  VALUE_ACCRUING = 'VALUE_ACCRUING',
  CLAIMABLE = 'CLAIMABLE'
}

export interface IYieldPoolInfo {
  poolId: IYieldPoolId;
  underlyingToken: IToken;
  receiptToken: IToken;
  yieldType: YieldType;
  currentApy: IPercentage;
  totalValueLocked: IFiatCurrencyAmount;
}

export interface IYieldPosition {
  positionId: IPositionId;
  poolId: IYieldPoolId;
  principalAmount: ITokenAmount; // Amount initially deposited
  currentAmount: ITokenAmount;   // Current value of principal + accrued/rebased yield
  claimableRewards: ITokenAmount[]; // Any secondary tokens available to claim
}

export interface IYieldProtocolManagerFeatures {
  getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo>;
  getYieldPosition(positionId: IPositionId): Promise<IYieldPosition>;
  
  // Action Builders for the OrderPlanner
  buildDepositAction(params: { poolId: IYieldPoolId; amount: ITokenAmount }): Promise<IActionBuilder>;
  buildWithdrawAction(params: { poolId: IYieldPoolId; amount: ITokenAmount }): Promise<IActionBuilder>;
  buildClaimRewardsAction(params: { positionId: IPositionId }): Promise<IActionBuilder>;
}
```

### Implementation Flow

1. **SDK Client:** User requests to deposit USDC into the highest-yielding pool.
2. **Protocol Manager:** Queries `pluginsRegistry` for plugins supporting `.yield`.
3. **Simulation:** The Simulator uses the `IYieldProtocolManagerFeatures` to estimate gas and model the balance changes (USDC decreases, Receipt Token increases).
4. **Order Planner:** Calls `buildDepositAction()` on the specific plugin (e.g., Yearn plugin) to retrieve the raw calldata.
5. **Execution:** The execution engine (Smart Account, Multicall) dispatches the transaction.

### Conclusion
By categorizing all passive growth as `Yield` (broken down by its accrual mechanism: *Value-Accruing*, *Rebasing*, and *Claimable*), the reDeFi SDK can seamlessly route capital across vastly different protocols (Aave, Lido, Yearn) using a single, unified interface.
