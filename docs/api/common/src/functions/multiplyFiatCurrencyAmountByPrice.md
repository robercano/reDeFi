[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / multiplyFiatCurrencyAmountByPrice

# Function: multiplyFiatCurrencyAmountByPrice()

> **multiplyFiatCurrencyAmountByPrice**(`fiatCurrencyAmount`, `price`): `Readonly`\<\{ `amount?`: `string`; `token?`: [`IToken`](../interfaces/IToken.md); \}\> \| `Readonly`\<\{ `amount?`: `string`; `fiat?`: [`FiatCurrency`](../enumerations/FiatCurrency.md); \}\>

Multiply a fiat currency amount by a price

## Parameters

### fiatCurrencyAmount

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)

The fiat currency amount to multiply

### price

[`IPrice`](../interfaces/IPrice.md)

The price to multiply by

## Returns

`Readonly`\<\{ `amount?`: `string`; `token?`: [`IToken`](../interfaces/IToken.md); \}\> \| `Readonly`\<\{ `amount?`: `string`; `fiat?`: [`FiatCurrency`](../enumerations/FiatCurrency.md); \}\>

The resulting fiat currency amount or token amount depending on the price quote
