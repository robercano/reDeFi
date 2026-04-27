[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / LendingPositionDataSchema

# Variable: LendingPositionDataSchema

> `const` **LendingPositionDataSchema**: `ZodObject`\<\{ `collateralAmount`: `ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `debtAmount`: `ZodType`\<[`ITokenAmount`](../interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../interfaces/ITokenAmount.md)\>; `id`: `ZodType`\<[`ILendingPositionId`](../interfaces/ILendingPositionId.md), `ZodTypeDef`, [`ILendingPositionId`](../interfaces/ILendingPositionId.md)\>; `pool`: `ZodType`\<[`ILendingPool`](../interfaces/ILendingPool.md), `ZodTypeDef`, [`ILendingPool`](../interfaces/ILendingPool.md)\>; `subtype`: `ZodNativeEnum`\<*typeof* [`LendingPositionType`](../../../client/src/enumerations/LendingPositionType.md)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`ILendingPositionId`](../interfaces/ILendingPositionId.md); `pool`: [`ILendingPool`](../interfaces/ILendingPool.md); `subtype`: [`LendingPositionType`](../../../client/src/enumerations/LendingPositionType.md); `type`: `Lending`; \}, \{ `collateralAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `id`: [`ILendingPositionId`](../interfaces/ILendingPositionId.md); `pool`: [`ILendingPool`](../interfaces/ILendingPool.md); `subtype`: [`LendingPositionType`](../../../client/src/enumerations/LendingPositionType.md); `type`: `Lending`; \}\>

## Description

Zod schema for ILendingPosition
