[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / YieldPositionDataSchema

# Variable: YieldPositionDataSchema

> `const` **YieldPositionDataSchema**: `ZodObject`\<\{ `claimableRewards`: `ZodArray`\<`ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>, `"many"`\>; `currentAmount`: `ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `id`: `ZodType`\<[`IYieldPositionId`](../interfaces/IYieldPositionId.md), `ZodTypeDef`, [`IYieldPositionId`](../interfaces/IYieldPositionId.md)\>; `pool`: `ZodType`\<[`IPool`](../interfaces/IPool.md), `ZodTypeDef`, [`IPool`](../interfaces/IPool.md)\>; `poolId`: `ZodType`\<[`IYieldPoolId`](../interfaces/IYieldPoolId.md), `ZodTypeDef`, [`IYieldPoolId`](../interfaces/IYieldPoolId.md)\>; `principalAmount`: `ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `type`: `ZodLiteral`\<[`Yield`](../enumerations/PositionType.md#yield)\>; \}, `"strip"`, `ZodTypeAny`, \{ `claimableRewards?`: [`ITokenAmount`](../interfaces/ITokenAmount.md)[]; `currentAmount?`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id?`: [`IYieldPositionId`](../interfaces/IYieldPositionId.md); `pool?`: [`IPool`](../interfaces/IPool.md); `poolId?`: [`IYieldPoolId`](../interfaces/IYieldPoolId.md); `principalAmount?`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `type?`: [`Yield`](../enumerations/PositionType.md#yield); \}, \{ `claimableRewards?`: [`ITokenAmount`](../interfaces/ITokenAmount.md)[]; `currentAmount?`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id?`: [`IYieldPositionId`](../interfaces/IYieldPositionId.md); `pool?`: [`IPool`](../interfaces/IPool.md); `poolId?`: [`IYieldPoolId`](../interfaces/IYieldPoolId.md); `principalAmount?`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `type?`: [`Yield`](../enumerations/PositionType.md#yield); \}\>

Zod schema for IYieldPosition
