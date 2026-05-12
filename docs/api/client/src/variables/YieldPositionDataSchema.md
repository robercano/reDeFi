[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / YieldPositionDataSchema

# Variable: YieldPositionDataSchema

> `const` **YieldPositionDataSchema**: `z.ZodObject`\<\{ `claimableRewards`: `z.ZodArray`\<`z.ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `z.ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>, `"many"`\>; `currentAmount`: `z.ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `z.ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `id`: `z.ZodType`\<[`IYieldPositionId`](../interfaces/IYieldPositionId.md), `z.ZodTypeDef`, [`IYieldPositionId`](../interfaces/IYieldPositionId.md)\>; `pool`: `z.ZodType`\<[`IPool`](../interfaces/IPool.md), `z.ZodTypeDef`, [`IPool`](../interfaces/IPool.md)\>; `poolId`: `z.ZodType`\<[`IYieldPoolId`](../interfaces/IYieldPoolId.md), `z.ZodTypeDef`, [`IYieldPoolId`](../interfaces/IYieldPoolId.md)\>; `principalAmount`: `z.ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `z.ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `type`: `z.ZodLiteral`\<`PositionType.Yield`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `claimableRewards`: [`ITokenAmount`](../interfaces/ITokenAmount.md)[]; `currentAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`IYieldPositionId`](../interfaces/IYieldPositionId.md); `pool`: [`IPool`](../interfaces/IPool.md); `poolId`: [`IYieldPoolId`](../interfaces/IYieldPoolId.md); `principalAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `type`: `PositionType.Yield`; \}, \{ `claimableRewards`: [`ITokenAmount`](../interfaces/ITokenAmount.md)[]; `currentAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`IYieldPositionId`](../interfaces/IYieldPositionId.md); `pool`: [`IPool`](../interfaces/IPool.md); `poolId`: [`IYieldPoolId`](../interfaces/IYieldPoolId.md); `principalAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `type`: `PositionType.Yield`; \}\>

Zod schema for IYieldPosition
