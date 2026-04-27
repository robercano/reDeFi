[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerLendingPositionDataSchema

# Variable: MakerLendingPositionDataSchema

> `const` **MakerLendingPositionDataSchema**: `ZodObject`\<\{ `collateralAmount`: `ZodType`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>; `debtAmount`: `ZodType`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>; `id`: `ZodType`\<[`IMakerLendingPositionId`](../interfaces/IMakerLendingPositionId.md), `ZodTypeDef`, [`IMakerLendingPositionId`](../interfaces/IMakerLendingPositionId.md)\>; `pool`: `ZodType`\<[`IMakerLendingPool`](../interfaces/IMakerLendingPool.md), `ZodTypeDef`, [`IMakerLendingPool`](../interfaces/IMakerLendingPool.md)\>; `subtype`: `ZodNativeEnum`\<*typeof* [`LendingPositionType`](../../../../client/src/enumerations/LendingPositionType.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PositionType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `id`: [`IMakerLendingPositionId`](../interfaces/IMakerLendingPositionId.md); `pool`: [`IMakerLendingPool`](../interfaces/IMakerLendingPool.md); `subtype`: [`LendingPositionType`](../../../../client/src/enumerations/LendingPositionType.md); `type`: [`Lending`](../../../../client/src/enumerations/PositionType.md#lending); \}, \{ `collateralAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `debtAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `id`: [`IMakerLendingPositionId`](../interfaces/IMakerLendingPositionId.md); `pool`: [`IMakerLendingPool`](../interfaces/IMakerLendingPool.md); `subtype`: [`LendingPositionType`](../../../../client/src/enumerations/LendingPositionType.md); `type`: [`Lending`](../../../../client/src/enumerations/PositionType.md#lending); \}\>

## Description

Zod schema for IMakerLendingPosition
