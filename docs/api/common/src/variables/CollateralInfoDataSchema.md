[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / CollateralInfoDataSchema

# Variable: CollateralInfoDataSchema

> `const` **CollateralInfoDataSchema**: `ZodObject`\<\{ `liquidationPenalty`: `ZodType`\<[`IPercentage`](../interfaces/IPercentage.md), `ZodTypeDef`, [`IPercentage`](../interfaces/IPercentage.md)\>; `liquidationThreshold`: `ZodType`\<[`IRiskRatio`](../interfaces/IRiskRatio.md), `ZodTypeDef`, [`IRiskRatio`](../interfaces/IRiskRatio.md)\>; `maxSupply`: `ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `price`: `ZodType`\<[`IPrice`](../interfaces/IPrice.md), `ZodTypeDef`, [`IPrice`](../interfaces/IPrice.md)\>; `priceUSD`: `ZodType`\<[`IPrice`](../interfaces/IPrice.md), `ZodTypeDef`, [`IPrice`](../interfaces/IPrice.md)\>; `token`: `ZodType`\<[`IToken`](../interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `tokensLocked`: `ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; \}, `"strip"`, `ZodTypeAny`, \{ `liquidationPenalty?`: [`IPercentage`](../interfaces/IPercentage.md); `liquidationThreshold?`: [`IRiskRatio`](../interfaces/IRiskRatio.md); `maxSupply?`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `price?`: [`IPrice`](../interfaces/IPrice.md); `priceUSD?`: [`IPrice`](../interfaces/IPrice.md); `token?`: [`IToken`](../interfaces/IToken.md); `tokensLocked?`: [`ITokenAmount`](../interfaces/ITokenAmount.md); \}, \{ `liquidationPenalty?`: [`IPercentage`](../interfaces/IPercentage.md); `liquidationThreshold?`: [`IRiskRatio`](../interfaces/IRiskRatio.md); `maxSupply?`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `price?`: [`IPrice`](../interfaces/IPrice.md); `priceUSD?`: [`IPrice`](../interfaces/IPrice.md); `token?`: [`IToken`](../interfaces/IToken.md); `tokensLocked?`: [`ITokenAmount`](../interfaces/ITokenAmount.md); \}\>

Zod schema for ICollateralInfo
