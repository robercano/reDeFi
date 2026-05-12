# reDeFi SDK Introduction

Welcome to the **reDeFi SDK**! This SDK provides a robust, intent-based, and protocol-agnostic layer for Web3 developers to integrate Decentralized Finance (DeFi) protocols effortlessly into their front-end applications.

## Overview

The reDeFi SDK is designed to abstract away the complexities of dealing with multiple DeFi protocols directly. By using the **SDK Client**, you interact with a unified interface to query balances, fetch yield and lending pools, and prepare swap or investment intents.

The Client SDK leverages:
- **`viem`** for fast and safe Ethereum interactions.
- A **Unified Protocol Manager** allowing you to query standardized Yield and Lending pools without knowing their underlying implementations.
- **Intent-Based Execution** for swapping and routing.

---

## Getting Started

### 1. Initialize the SDK Client

The `ISDKManager` is the main entry point for interacting with the SDK on the client side. You instantiate it by providing your application's configuration, specifically the `apiURL`.

```typescript
import { makeSDK, makeSDKWithSigner } from '@thesolidchain/sdk-client';

// Initialize the read-only client
const sdk = makeSDK({
  apiURL: 'https://api.redefi.com/v1',
});

// Or, if you need to execute transactions, provide a signer
const sdkWithSigner = makeSDKWithSigner({
  apiURL: 'https://api.redefi.com/v1',
  signer: myWalletSigner 
});
```

### 2. Fetching Pool Data

You can fetch rich, standardized data about any Yield or Lending pool using the `protocols` manager.

```typescript
import { ProtocolName, PoolType } from '@thesolidchain/sdk-common';

const poolId = {
  type: PoolType.Lending,
  protocol: { name: ProtocolName.AaveV3 },
  underlyingAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' // USDC
};

// Fetch current APY, TVL, and metrics for the Aave V3 USDC Pool
const poolInfo = await sdk.protocols.getLendingPoolInfo(poolId);
console.log(`Pool APY: ${poolInfo.currentApy.value}%`);
console.log(`TVL: $${poolInfo.totalValueLocked.value.toFixed(2)}`);
```

### 3. Fetching User Positions

You can retrieve the current investment position of the connected wallet via the `portfolio` manager.

```typescript
// Get all positions for the connected user
const portfolio = await sdk.portfolio.getPortfolio();

portfolio.positions.forEach(position => {
  console.log(`Deposited in ${position.protocol.name}: ${position.principalAmount.amount.toString()}`);
});
```

### 4. Executing an Intent

The SDK abstracts complex transactions into standard orders.

```typescript
// Prepare a deposit order for a specific pool
const order = await sdk.orders.buildDepositOrder({
  poolId,
  amount: '1000000000000000000', // 1 Token
});

// Execute the order (this handles approvals and interactions seamlessly)
await sdk.orders.executeOrder(order);
```

## Next Steps
- Head over to the [API Reference](api/README.md) to explore the full list of exposed managers, interfaces, and methods.
- Explore the internal plugin architecture if you wish to contribute to the core SDK.
