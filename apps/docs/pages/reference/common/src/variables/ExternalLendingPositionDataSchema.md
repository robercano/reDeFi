[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / ExternalLendingPositionDataSchema

# Variable: ExternalLendingPositionDataSchema

> `const` **ExternalLendingPositionDataSchema**: `ZodObject`\<\{ `collateralAmount`: `ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `debtAmount`: `ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `id`: `ZodType`\<[`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md), `ZodTypeDef`, [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md)\>; `pool`: `ZodType`\<[`ILendingPool`](../interfaces/ILendingPool.md), `ZodTypeDef`, [`ILendingPool`](../interfaces/ILendingPool.md)\>; `subtype`: `ZodNativeEnum`\<*typeof* [`LendingPositionType`](../../../client/src/enumerations/LendingPositionType.md)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md); `pool`: [`ILendingPool`](../interfaces/ILendingPool.md); `subtype`: [`LendingPositionType`](../../../client/src/enumerations/LendingPositionType.md); `type`: `Lending`; \}, \{ `collateralAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md); `pool`: [`ILendingPool`](../interfaces/ILendingPool.md); `subtype`: [`LendingPositionType`](../../../client/src/enumerations/LendingPositionType.md); `type`: `Lending`; \}\>

## Description

Zod schema for IExternalLendingPosition
