[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ISpotPriceInfo

# Type Alias: ISpotPriceInfo

> **ISpotPriceInfo** = `object`

ISpotPriceInfo
Gives the current market price for a specific asset

## Properties

### price

> **price**: [`IPrice`](../interfaces/IPrice.md)

The price of the asset

***

### provider

> **provider**: [`OracleProviderType`](../enumerations/OracleProviderType.md)

The oracle provider type

***

### token

> **token**: [`IToken`](../interfaces/IToken.md)

The token for which the price is being requested. Also included in price, but added here for convenience
