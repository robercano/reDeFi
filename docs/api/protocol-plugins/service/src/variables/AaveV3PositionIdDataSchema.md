[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3PositionIdDataSchema

# Variable: AaveV3PositionIdDataSchema

> `const` **AaveV3PositionIdDataSchema**: `ZodObject`\<\{ `id`: `ZodString`; `poolId`: `ZodType`\<[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md), `ZodTypeDef`, [`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md)\>; `type`: `ZodLiteral`\<`Lending`\>; `walletAddress`: `ZodType`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md), `ZodTypeDef`, [`IAddress`](../../../../client/src/interfaces/IAddress.md)\>; \}, `"strip"`, `ZodTypeAny`, \{ `id?`: `string`; `poolId?`: [`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md); `type?`: `Lending`; `walletAddress?`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \}, \{ `id?`: `string`; `poolId?`: [`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md); `type?`: `Lending`; `walletAddress?`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \}\>

Zod schema for IAaveV3LendingPositionId
