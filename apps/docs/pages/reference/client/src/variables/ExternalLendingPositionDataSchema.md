[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ExternalLendingPositionDataSchema

# Variable: ExternalLendingPositionDataSchema

> `const` **ExternalLendingPositionDataSchema**: `ZodObject`\<\{ `collateralAmount`: `ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `debtAmount`: `ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `id`: `ZodType`\<[`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md), `ZodTypeDef`, [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md)\>; `pool`: `ZodType`\<[`ILendingPool`](../interfaces/ILendingPool.md), `ZodTypeDef`, [`ILendingPool`](../interfaces/ILendingPool.md)\>; `subtype`: `ZodNativeEnum`\<*typeof* [`LendingPositionType`](../enumerations/LendingPositionType.md)\>; `type`: `ZodLiteral`\<[`Lending`](../enumerations/PositionType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md); `pool`: [`ILendingPool`](../interfaces/ILendingPool.md); `subtype`: [`LendingPositionType`](../enumerations/LendingPositionType.md); `type`: [`Lending`](../enumerations/PositionType.md#lending); \}, \{ `collateralAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md); `pool`: [`ILendingPool`](../interfaces/ILendingPool.md); `subtype`: [`LendingPositionType`](../enumerations/LendingPositionType.md); `type`: [`Lending`](../enumerations/PositionType.md#lending); \}\>

Zod schema for IExternalLendingPosition
