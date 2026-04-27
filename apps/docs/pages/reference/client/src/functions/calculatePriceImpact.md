[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / calculatePriceImpact

# Function: calculatePriceImpact()

> **calculatePriceImpact**(`spotPrice`, `quotePrice`): [`IPercentage`](../interfaces/IPercentage.md) \| `null`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `spotPrice` | [`IPrice`](../interfaces/IPrice.md) | This price represents a blend of spot prices from various exchanges. |
| `quotePrice` | [`IPrice`](../interfaces/IPrice.md) | The offer price is price quoted to us by a liquidity provider and takes into account price impact - where price impact is a measure of how much our trade affects the price. It is determined by the breadth and depth of liquidity. |

## Returns

[`IPercentage`](../interfaces/IPercentage.md) \| `null`
