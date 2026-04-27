[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / CollateralInfoDataSchema

# Variable: CollateralInfoDataSchema

> `const` **CollateralInfoDataSchema**: `z.ZodObject`\<\{ `liquidationPenalty`: `z.ZodType`\<[`IPercentage`](../interfaces/IPercentage.md), `z.ZodTypeDef`, [`IPercentage`](../interfaces/IPercentage.md)\>; `liquidationThreshold`: `z.ZodType`\<[`IRiskRatio`](../interfaces/IRiskRatio.md), `z.ZodTypeDef`, [`IRiskRatio`](../interfaces/IRiskRatio.md)\>; `maxSupply`: `z.ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `z.ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `price`: `z.ZodType`\<[`IPrice`](../interfaces/IPrice.md), `z.ZodTypeDef`, [`IPrice`](../interfaces/IPrice.md)\>; `priceUSD`: `z.ZodType`\<[`IPrice`](../interfaces/IPrice.md), `z.ZodTypeDef`, [`IPrice`](../interfaces/IPrice.md)\>; `token`: `z.ZodType`\<[`IToken`](../interfaces/IToken.md), `z.ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `tokensLocked`: `z.ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `z.ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `liquidationPenalty`: [`IPercentage`](../interfaces/IPercentage.md); `liquidationThreshold`: [`IRiskRatio`](../interfaces/IRiskRatio.md); `maxSupply`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `price`: [`IPrice`](../interfaces/IPrice.md); `priceUSD`: [`IPrice`](../interfaces/IPrice.md); `token`: [`IToken`](../interfaces/IToken.md); `tokensLocked`: [`ITokenAmount`](../interfaces/ITokenAmount.md); \}, \{ `liquidationPenalty`: [`IPercentage`](../interfaces/IPercentage.md); `liquidationThreshold`: [`IRiskRatio`](../interfaces/IRiskRatio.md); `maxSupply`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `price`: [`IPrice`](../interfaces/IPrice.md); `priceUSD`: [`IPrice`](../interfaces/IPrice.md); `token`: [`IToken`](../interfaces/IToken.md); `tokensLocked`: [`ITokenAmount`](../interfaces/ITokenAmount.md); \}\>

## Description

Zod schema for ICollateralInfo
