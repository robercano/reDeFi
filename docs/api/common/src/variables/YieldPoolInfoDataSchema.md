[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / YieldPoolInfoDataSchema

# Variable: YieldPoolInfoDataSchema

> `const` **YieldPoolInfoDataSchema**: `ZodObject`\<\{ `currentApy`: `ZodType`\<[`IPercentage`](../interfaces/IPercentage.md), `ZodTypeDef`, [`IPercentage`](../interfaces/IPercentage.md)\>; `id`: `ZodType`\<[`IYieldPoolId`](../interfaces/IYieldPoolId.md), `ZodTypeDef`, [`IYieldPoolId`](../interfaces/IYieldPoolId.md)\>; `receiptToken`: `ZodType`\<[`IToken`](../interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `totalValueLocked`: `ZodType`\<[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md), `ZodTypeDef`, [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)\>; `type`: `ZodLiteral`\<[`Yield`](../enumerations/PoolType.md#yield)\>; `underlyingToken`: `ZodType`\<[`IToken`](../interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `yieldType`: `ZodNativeEnum`\<*typeof* [`YieldType`](../enumerations/YieldType.md)\>; \}, `"strip"`, `ZodTypeAny`, \{ `currentApy?`: [`IPercentage`](../interfaces/IPercentage.md); `id?`: [`IYieldPoolId`](../interfaces/IYieldPoolId.md); `receiptToken?`: [`IToken`](../interfaces/IToken.md); `totalValueLocked?`: [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md); `type?`: [`Yield`](../enumerations/PoolType.md#yield); `underlyingToken?`: [`IToken`](../interfaces/IToken.md); `yieldType?`: [`YieldType`](../enumerations/YieldType.md); \}, \{ `currentApy?`: [`IPercentage`](../interfaces/IPercentage.md); `id?`: [`IYieldPoolId`](../interfaces/IYieldPoolId.md); `receiptToken?`: [`IToken`](../interfaces/IToken.md); `totalValueLocked?`: [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md); `type?`: [`Yield`](../enumerations/PoolType.md#yield); `underlyingToken?`: [`IToken`](../interfaces/IToken.md); `yieldType?`: [`YieldType`](../enumerations/YieldType.md); \}\>

Zod schema for IYieldPoolInfo
