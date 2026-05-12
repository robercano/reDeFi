# reDeFi SDK Introduction

Welcome to the **reDeFi SDK**! This SDK provides a robust, intent-based, and protocol-agnostic layer for Web3 developers to integrate Decentralized Finance (DeFi) protocols effortlessly into their applications.

## Overview

The reDeFi SDK is designed to abstract away the complexities of dealing with multiple DeFi protocols directly. Instead of managing complex multi-step contract calls (like approvals followed by deposits), developers interact with standard **Intent Builders** and the **Protocol Manager**.

The SDK leverages:
- **`viem`** for fast and safe Ethereum interactions.
- A **Plugin Architecture** meaning new protocols can be added independently without modifying the core SDK.
- **Multicall Caching** for optimized, hyper-efficient RPC usage.

---

## Getting Started

### 1. Initialize the SDK Context

The `ProtocolPluginContext` is the heart of the SDK. It binds together the blockchain provider, token caching, and oracle pricing to serve the rest of the managers.

```typescript
import { ChainFamilyMap } from '@thesolidchain/sdk-common';
import { ProtocolPluginContext } from '@thesolidchain/protocol-plugins-common';
import { BlockchainClient } from '@thesolidchain/blockchain-client';
import { TokensManager } from '@thesolidchain/tokens-service';
import { OracleManager } from '@thesolidchain/oracle-service';

// 1. Setup Blockchain Client
const provider = new BlockchainClient(ChainFamilyMap.Ethereum.Mainnet, 'https://eth-mainnet.alchemyapi.io/v2/YOUR_API_KEY');

// 2. Setup Tokens and Oracles
const tokensManager = new TokensManager({ provider });
const oracleManager = new OracleManager({ provider, tokensManager });

// 3. Create the Context
const context = new ProtocolPluginContext({
  provider,
  tokensManager,
  oracleManager
});
```

### 2. Configure the Protocol Manager

The `ProtocolManager` routes your requests to the correct underlying protocol plugin (e.g. Aave V3, Yearn, Lido).

```typescript
import { ProtocolManager } from '@thesolidchain/protocol-manager-service';
import { AAVEv3ProtocolPlugin } from '@thesolidchain/protocol-plugins-service';

const protocolManager = new ProtocolManager(context);

// Register Plugins
const aavePlugin = new AAVEv3ProtocolPlugin();
aavePlugin.initialize({ context });
protocolManager.registerPlugin(aavePlugin);
```

### 3. Fetching Pool Data

You can fetch rich, standardized data about any Yield or Lending pool using its `PoolId`.

```typescript
import { ProtocolName, PoolType } from '@thesolidchain/sdk-common';

const poolId = {
  type: PoolType.Lending,
  protocol: { name: ProtocolName.AaveV3 },
  underlyingAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' // USDC
};

const poolInfo = await protocolManager.getLendingPoolInfo(poolId);
console.log(`Pool APY: ${poolInfo.currentApy.value}%`);
console.log(`TVL: $${poolInfo.totalValueLocked.value.toFixed(2)}`);
```

### 4. Fetching User Positions

Similarly, you can retrieve the current investment position of a specific wallet.

```typescript
const positionId = {
  ...poolId,
  walletAddress: '0x1234567890123456789012345678901234567890'
};

const position = await protocolManager.getLendingPosition(positionId);
console.log(`Deposited: ${position.principalAmount.amount.toString()}`);
```

## Next Steps
- Head over to the [API Reference](api/README.md) to explore the full list of exposed managers, interfaces, and methods.
- Check the [Adding a New Plugin](ADD_NEW_PLUGIN.md) guide if you'd like to integrate a new protocol into the SDK.
