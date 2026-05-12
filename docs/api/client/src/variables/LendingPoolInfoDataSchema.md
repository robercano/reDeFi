[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPoolInfoDataSchema

# Variable: LendingPoolInfoDataSchema

> `const` **LendingPoolInfoDataSchema**: `z.ZodObject`\<\{ `collateral`: `z.ZodType`\<[`ICollateralInfo`](../interfaces/ICollateralInfo.md), `z.ZodTypeDef`, [`ICollateralInfo`](../interfaces/ICollateralInfo.md)\>; `debt`: `z.ZodType`\<[`IDebtInfo`](../interfaces/IDebtInfo.md), `z.ZodTypeDef`, [`IDebtInfo`](../interfaces/IDebtInfo.md)\>; `id`: `z.ZodType`\<[`ILendingPoolId`](../interfaces/ILendingPoolId.md), `z.ZodTypeDef`, [`ILendingPoolId`](../interfaces/ILendingPoolId.md)\>; `type`: `z.ZodLiteral`\<`PoolType.Lending`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `collateral`: [`ICollateralInfo`](../interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../interfaces/IDebtInfo.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: `PoolType.Lending`; \}, \{ `collateral`: [`ICollateralInfo`](../interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../interfaces/IDebtInfo.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: `PoolType.Lending`; \}\>

Zod schema for ILendingPoolInfo
