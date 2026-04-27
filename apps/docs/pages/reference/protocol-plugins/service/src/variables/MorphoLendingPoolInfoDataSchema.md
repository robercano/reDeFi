[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoLendingPoolInfoDataSchema

# Variable: MorphoLendingPoolInfoDataSchema

> `const` **MorphoLendingPoolInfoDataSchema**: `ZodObject`\<\{ `collateral`: `ZodType`\<[`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md), `ZodTypeDef`, [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md)\>; `debt`: `ZodType`\<[`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md), `ZodTypeDef`, [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md)\>; `id`: `ZodType`\<[`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md), `ZodTypeDef`, [`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateral`: [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md); `id`: [`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateral`: [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md); `id`: [`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for IMorphoLendingPoolInfo
