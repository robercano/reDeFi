[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / SimulatedSwapData

# Type Alias: SimulatedSwapData

> **SimulatedSwapData** = `Omit`\<[`QuoteData`](QuoteData.md), `"estimatedGas"` \| `"routes"`\> & `object`

Represents the data returned for each Swap in simulation.
It is derived from the `QuoteData` type with the `estimatedGas` and 'routes' fields omitted,
as gas estimation is not relevant for simulation purposes.

## Type Declaration

### offerPrice

> **offerPrice**: [`IPrice`](../interfaces/IPrice.md)

### priceImpact

> **priceImpact**: [`IPercentage`](../interfaces/IPercentage.md) \| `null`

### slippage

> **slippage**: [`IPercentage`](../interfaces/IPercentage.md)

### spotPrice

> **spotPrice**: [`IPrice`](../interfaces/IPrice.md)
