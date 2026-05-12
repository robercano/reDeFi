[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / PriceMulReturnType

# Type Alias: PriceMulReturnType\<T\>

> **PriceMulReturnType**\<`T`\> = `T` *extends* [`ITokenAmount`](../interfaces/ITokenAmount.md) ? [`ITokenAmount`](../interfaces/ITokenAmount.md) \| [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md) : `T` *extends* [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md) ? [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md) \| [`ITokenAmount`](../interfaces/ITokenAmount.md) : [`IPrice`](../interfaces/IPrice.md)

## Type Parameters

### T

`T`
