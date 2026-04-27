[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3PositionIdDataSchema

# Variable: AaveV3PositionIdDataSchema

> `const` **AaveV3PositionIdDataSchema**: `ZodObject`\<\{ `id`: `ZodString`; `poolId`: `ZodType`\<[`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md), `ZodTypeDef`, [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PositionType.md#lending)\>; `walletAddress`: `ZodType`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md), `ZodTypeDef`, [`IAddress`](../../../../client/src/interfaces/IAddress.md)\>; \}, `"strip"`, `ZodTypeAny`, \{ `id`: `string`; `poolId`: [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PositionType.md#lending); `walletAddress`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \}, \{ `id`: `string`; `poolId`: [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PositionType.md#lending); `walletAddress`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \}\>

## Description

Zod schema for IAaveV3LendingPositionId
