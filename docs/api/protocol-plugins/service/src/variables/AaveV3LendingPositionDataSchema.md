[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3LendingPositionDataSchema

# Variable: AaveV3LendingPositionDataSchema

> `const` **AaveV3LendingPositionDataSchema**: `ZodObject`\<\{ `collateralAmount`: `ZodType`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>; `debtAmount`: `ZodType`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md), `ZodTypeDef`, [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>; `id`: `ZodType`\<[`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md), `ZodTypeDef`, [`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md)\>; `pool`: `ZodType`\<[`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md), `ZodTypeDef`, [`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md)\>; `subtype`: `ZodNativeEnum`\<*typeof* [`LendingPositionType`](../../../../common/src/enumerations/LendingPositionType.md)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralAmount?`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `debtAmount?`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `id?`: [`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md); `pool?`: [`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md); `subtype?`: [`LendingPositionType`](../../../../common/src/enumerations/LendingPositionType.md); `type?`: `Lending`; \}, \{ `collateralAmount?`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `debtAmount?`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `id?`: [`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md); `pool?`: [`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md); `subtype?`: [`LendingPositionType`](../../../../common/src/enumerations/LendingPositionType.md); `type?`: `Lending`; \}\>

Zod schema for IAaveV3PositionId
