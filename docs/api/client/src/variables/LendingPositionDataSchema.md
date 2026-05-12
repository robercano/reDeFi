[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPositionDataSchema

# Variable: LendingPositionDataSchema

> `const` **LendingPositionDataSchema**: `z.ZodObject`\<\{ `collateralAmount`: `z.ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `z.ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `debtAmount`: `z.ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `z.ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `id`: `z.ZodType`\<[`ILendingPositionId`](../interfaces/ILendingPositionId.md), `z.ZodTypeDef`, [`ILendingPositionId`](../interfaces/ILendingPositionId.md)\>; `pool`: `z.ZodType`\<[`ILendingPool`](../interfaces/ILendingPool.md), `z.ZodTypeDef`, [`ILendingPool`](../interfaces/ILendingPool.md)\>; `subtype`: `z.ZodNativeEnum`\<*typeof* [`LendingPositionType`](../../../common/src/enumerations/LendingPositionType.md)\>; `type`: `z.ZodLiteral`\<`PositionType.Lending`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `collateralAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`ILendingPositionId`](../interfaces/ILendingPositionId.md); `pool`: [`ILendingPool`](../interfaces/ILendingPool.md); `subtype`: [`LendingPositionType`](../../../common/src/enumerations/LendingPositionType.md); `type`: `PositionType.Lending`; \}, \{ `collateralAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`ILendingPositionId`](../interfaces/ILendingPositionId.md); `pool`: [`ILendingPool`](../interfaces/ILendingPool.md); `subtype`: [`LendingPositionType`](../../../common/src/enumerations/LendingPositionType.md); `type`: `PositionType.Lending`; \}\>

Zod schema for ILendingPosition
