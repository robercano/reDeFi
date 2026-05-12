[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / multiplyTokenAmountByPrice

# Function: multiplyTokenAmountByPrice()

> **multiplyTokenAmountByPrice**(`tokenAmount`, `price`): `Readonly`\<\{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}\> \| `Readonly`\<\{ `amount`: `string`; `fiat`: [`FiatCurrency`](../../../common/src/enumerations/FiatCurrency.md); \}\>

Multiply a token amount by a price

## Parameters

### tokenAmount

[`ITokenAmount`](../interfaces/ITokenAmount.md)

The token amount to multiply

### price

[`IPrice`](../interfaces/IPrice.md)

The price to multiply by

## Returns

`Readonly`\<\{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}\> \| `Readonly`\<\{ `amount`: `string`; `fiat`: [`FiatCurrency`](../../../common/src/enumerations/FiatCurrency.md); \}\>

The resulting token amount or currency amount depending on the price quote
