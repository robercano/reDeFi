[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [react/src](../README.md) / useSDK

# Function: useSDK()

> **useSDK**(`params`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `UseSdk` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `buildOrder()` | (`params`) => `Promise`\<[`Maybe`](../../../client/src/type-aliases/Maybe.md)\<[`Order`](../../../client/src/interfaces/Order.md)\>\> |
| `getChain()` | (`__namedParameters`) => `Promise`\<[`Chain`](../../../client/src/classes/Chain.md)\> |
| `getChainInfo()` | () => [`ChainInfo`](../../../client/src/classes/ChainInfo.md) |
| `getCurrentUser()` | () => [`User`](../../../client/src/classes/User.md) |
| `getLendingPool()` | (`params`) => `Promise`\<[`Maybe`](../../../client/src/type-aliases/Maybe.md)\<[`ILendingPool`](../../../client/src/interfaces/ILendingPool.md)\>\> |
| `getLendingPoolInfo()` | (`params`) => `Promise`\<[`Maybe`](../../../client/src/type-aliases/Maybe.md)\<[`ILendingPoolInfo`](../../../client/src/interfaces/ILendingPoolInfo.md)\>\> |
| `getSpotPrice()` | (`__namedParameters`) => `Promise`\<[`ISpotPriceInfo`](../../../client/src/type-aliases/ISpotPriceInfo.md)\> |
| `getSpotPrices()` | (`__namedParameters`) => `Promise`\<[`SpotPricesInfo`](../../../client/src/type-aliases/SpotPricesInfo.md)\> |
| `getSwapQuote()` | (`__namedParameters`) => `Promise`\<[`QuoteData`](../../../client/src/type-aliases/QuoteData.md)\> |
| `getTargetChainInfo()` | (`specificChainId`) => [`ChainInfo`](../../../client/src/classes/ChainInfo.md) |
| `getTokenBySymbol()` | (`__namedParameters`) => `Promise`\<[`IToken`](../../../client/src/interfaces/IToken.md)\> |
| `getTokenTotalSupply()` | (`__namedParameters`) => `Promise`\<[`ITokenAmount`](../../../client/src/interfaces/ITokenAmount.md)\> |
| `getUserPortfolio()` | (`params`) => `Promise`\<[`IUserPortfolio`](../../../client/src/interfaces/IUserPortfolio.md)\> |
| `getWalletAddress()` | () => [`Address`](../../../client/src/classes/Address.md) |
