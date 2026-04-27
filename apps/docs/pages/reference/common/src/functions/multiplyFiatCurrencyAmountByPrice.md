[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / multiplyFiatCurrencyAmountByPrice

# Function: multiplyFiatCurrencyAmountByPrice()

> **multiplyFiatCurrencyAmountByPrice**(`fiatCurrencyAmount`, `price`): `Readonly`\<\{ `amount`: `string`; `fiat`: [`FiatCurrency`](../../../client/src/enumerations/FiatCurrency.md); \}\> \| `Readonly`\<\{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}\>

Multiply a fiat currency amount by a price

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fiatCurrencyAmount` | [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md) | The fiat currency amount to multiply |
| `price` | [`IPrice`](../interfaces/IPrice.md) | The price to multiply by |

## Returns

`Readonly`\<\{ `amount`: `string`; `fiat`: [`FiatCurrency`](../../../client/src/enumerations/FiatCurrency.md); \}\> \| `Readonly`\<\{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}\>

The resulting fiat currency amount or token amount depending on the price quote
