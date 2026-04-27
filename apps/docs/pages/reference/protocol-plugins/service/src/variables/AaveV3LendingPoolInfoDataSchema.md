[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3LendingPoolInfoDataSchema

# Variable: AaveV3LendingPoolInfoDataSchema

> `const` **AaveV3LendingPoolInfoDataSchema**: `ZodObject`\<\{ `collateral`: `ZodType`\<[`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md), `ZodTypeDef`, [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md)\>; `debt`: `ZodType`\<[`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md), `ZodTypeDef`, [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md)\>; `id`: `ZodType`\<[`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md), `ZodTypeDef`, [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateral`: [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md); `id`: [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateral`: [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md); `id`: [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for IAaveV3LendingPool
