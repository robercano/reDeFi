[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ExternalLendingPositionDataSchema

# Variable: ExternalLendingPositionDataSchema

> `const` **ExternalLendingPositionDataSchema**: `z.ZodObject`\<\{ `collateralAmount`: `z.ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `z.ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `debtAmount`: `z.ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `z.ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `id`: `z.ZodType`\<[`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md), `z.ZodTypeDef`, [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md)\>; `pool`: `z.ZodType`\<[`ILendingPool`](../interfaces/ILendingPool.md), `z.ZodTypeDef`, [`ILendingPool`](../interfaces/ILendingPool.md)\>; `subtype`: `z.ZodNativeEnum`\<[`LendingPositionType`](../enumerations/LendingPositionType.md)\>; `type`: `z.ZodLiteral`\<[`Lending`](../enumerations/PositionType.md#lending)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `collateralAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md); `pool`: [`ILendingPool`](../interfaces/ILendingPool.md); `subtype`: [`LendingPositionType`](../enumerations/LendingPositionType.md); `type`: [`Lending`](../enumerations/PositionType.md#lending); \}, \{ `collateralAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md); `pool`: [`ILendingPool`](../interfaces/ILendingPool.md); `subtype`: [`LendingPositionType`](../enumerations/LendingPositionType.md); `type`: [`Lending`](../enumerations/PositionType.md#lending); \}\>

## Description

Zod schema for IExternalLendingPosition
