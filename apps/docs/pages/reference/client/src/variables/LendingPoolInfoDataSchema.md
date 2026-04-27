[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPoolInfoDataSchema

# Variable: LendingPoolInfoDataSchema

> `const` **LendingPoolInfoDataSchema**: `ZodObject`\<\{ `collateral`: `ZodType`\<[`ICollateralInfo`](../interfaces/ICollateralInfo.md), `ZodTypeDef`, [`ICollateralInfo`](../interfaces/ICollateralInfo.md)\>; `debt`: `ZodType`\<[`IDebtInfo`](../interfaces/IDebtInfo.md), `ZodTypeDef`, [`IDebtInfo`](../interfaces/IDebtInfo.md)\>; `id`: `ZodType`\<[`ILendingPoolId`](../interfaces/ILendingPoolId.md), `ZodTypeDef`, [`ILendingPoolId`](../interfaces/ILendingPoolId.md)\>; `type`: `ZodLiteral`\<[`Lending`](../enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateral`: [`ICollateralInfo`](../interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../interfaces/IDebtInfo.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: [`Lending`](../enumerations/PoolType.md#lending); \}, \{ `collateral`: [`ICollateralInfo`](../interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../interfaces/IDebtInfo.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: [`Lending`](../enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for ILendingPoolInfo
