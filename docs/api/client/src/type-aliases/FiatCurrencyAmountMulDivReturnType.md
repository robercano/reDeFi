[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / FiatCurrencyAmountMulDivReturnType

# Type Alias: FiatCurrencyAmountMulDivReturnType\<T\>

> **FiatCurrencyAmountMulDivReturnType**\<`T`\> = `T` *extends* [`IPrice`](../interfaces/IPrice.md) ? [`ITokenAmount`](../interfaces/ITokenAmount.md) \| [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md) : `T` *extends* [`IPercentage`](../interfaces/IPercentage.md) \| `string` \| `number` ? [`ITokenAmount`](../interfaces/ITokenAmount.md) : `never`

## Type Parameters

### T

`T`
