[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerLendingPoolInfoDataSchema

# Variable: MakerLendingPoolInfoDataSchema

> `const` **MakerLendingPoolInfoDataSchema**: `ZodObject`\<\{ `collateral`: `ZodType`\<[`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md), `ZodTypeDef`, [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md)\>; `debt`: `ZodType`\<[`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md), `ZodTypeDef`, [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md)\>; `id`: `ZodType`\<[`IMakerLendingPoolId`](../../../../client/src/interfaces/IMakerLendingPoolId.md), `ZodTypeDef`, [`IMakerLendingPoolId`](../../../../client/src/interfaces/IMakerLendingPoolId.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateral`: [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md); `id`: [`IMakerLendingPoolId`](../../../../client/src/interfaces/IMakerLendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateral`: [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md); `debt`: [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md); `id`: [`IMakerLendingPoolId`](../../../../client/src/interfaces/IMakerLendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

Zod schema for IMakerLendingPool
