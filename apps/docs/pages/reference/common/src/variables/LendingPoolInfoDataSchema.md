[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / LendingPoolInfoDataSchema

# Variable: LendingPoolInfoDataSchema

> `const` **LendingPoolInfoDataSchema**: `ZodObject`\<\{ `collateral`: `ZodType`\<[`ICollateralInfo`](../interfaces/ICollateralInfo.md), `ZodTypeDef`, [`ICollateralInfo`](../interfaces/ICollateralInfo.md)\>; `debt`: `ZodType`\<[`IDebtInfo`](../interfaces/IDebtInfo.md), `ZodTypeDef`, [`IDebtInfo`](../interfaces/IDebtInfo.md)\>; `id`: `ZodType`\<[`ILendingPoolId`](../interfaces/ILendingPoolId.md), `ZodTypeDef`, [`ILendingPoolId`](../interfaces/ILendingPoolId.md)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateral`: [`ICollateralInfo`](../interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../interfaces/IDebtInfo.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: `Lending`; \}, \{ `collateral`: [`ICollateralInfo`](../interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../interfaces/IDebtInfo.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: `Lending`; \}\>

## Description

Zod schema for ILendingPoolInfo
