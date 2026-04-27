[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPoolInfoDataSchema

# Variable: LendingPoolInfoDataSchema

> `const` **LendingPoolInfoDataSchema**: `z.ZodObject`\<\{ `collateral`: `z.ZodType`\<[`ICollateralInfo`](../interfaces/ICollateralInfo.md), `z.ZodTypeDef`, [`ICollateralInfo`](../interfaces/ICollateralInfo.md)\>; `debt`: `z.ZodType`\<[`IDebtInfo`](../interfaces/IDebtInfo.md), `z.ZodTypeDef`, [`IDebtInfo`](../interfaces/IDebtInfo.md)\>; `id`: `z.ZodType`\<[`ILendingPoolId`](../interfaces/ILendingPoolId.md), `z.ZodTypeDef`, [`ILendingPoolId`](../interfaces/ILendingPoolId.md)\>; `type`: `z.ZodLiteral`\<[`Lending`](../enumerations/PoolType.md#lending)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `collateral`: [`ICollateralInfo`](../interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../interfaces/IDebtInfo.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: [`Lending`](../enumerations/PoolType.md#lending); \}, \{ `collateral`: [`ICollateralInfo`](../interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../interfaces/IDebtInfo.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: [`Lending`](../enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for ILendingPoolInfo
