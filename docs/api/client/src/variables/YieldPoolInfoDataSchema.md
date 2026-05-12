[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / YieldPoolInfoDataSchema

# Variable: YieldPoolInfoDataSchema

> `const` **YieldPoolInfoDataSchema**: `z.ZodObject`\<\{ `currentApy`: `z.ZodType`\<[`IPercentage`](../interfaces/IPercentage.md), `z.ZodTypeDef`, [`IPercentage`](../interfaces/IPercentage.md)\>; `id`: `z.ZodType`\<[`IYieldPoolId`](../interfaces/IYieldPoolId.md), `z.ZodTypeDef`, [`IYieldPoolId`](../interfaces/IYieldPoolId.md)\>; `receiptToken`: `z.ZodType`\<[`IToken`](../interfaces/IToken.md), `z.ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `totalValueLocked`: `z.ZodType`\<[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md), `z.ZodTypeDef`, [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)\>; `type`: `z.ZodLiteral`\<`PoolType.Yield`\>; `underlyingToken`: `z.ZodType`\<[`IToken`](../interfaces/IToken.md), `z.ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `yieldType`: `z.ZodNativeEnum`\<*typeof* [`YieldType`](../../../common/src/enumerations/YieldType.md)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `currentApy`: [`IPercentage`](../interfaces/IPercentage.md); `id`: [`IYieldPoolId`](../interfaces/IYieldPoolId.md); `receiptToken`: [`IToken`](../interfaces/IToken.md); `totalValueLocked`: [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md); `type`: `PoolType.Yield`; `underlyingToken`: [`IToken`](../interfaces/IToken.md); `yieldType`: [`YieldType`](../../../common/src/enumerations/YieldType.md); \}, \{ `currentApy`: [`IPercentage`](../interfaces/IPercentage.md); `id`: [`IYieldPoolId`](../interfaces/IYieldPoolId.md); `receiptToken`: [`IToken`](../interfaces/IToken.md); `totalValueLocked`: [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md); `type`: `PoolType.Yield`; `underlyingToken`: [`IToken`](../interfaces/IToken.md); `yieldType`: [`YieldType`](../../../common/src/enumerations/YieldType.md); \}\>

Zod schema for IYieldPoolInfo
