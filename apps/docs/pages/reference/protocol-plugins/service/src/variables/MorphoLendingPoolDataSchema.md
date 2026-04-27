[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoLendingPoolDataSchema

# Variable: MorphoLendingPoolDataSchema

> `const` **MorphoLendingPoolDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `id`: `ZodType`\<[`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md), `ZodTypeDef`, [`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md)\>; `irm`: `ZodType`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md), `ZodTypeDef`, [`IAddress`](../../../../client/src/interfaces/IAddress.md)\>; `lltv`: `ZodType`\<[`IRiskRatio`](../../../../client/src/interfaces/IRiskRatio.md), `ZodTypeDef`, [`IRiskRatio`](../../../../client/src/interfaces/IRiskRatio.md)\>; `oracle`: `ZodType`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md), `ZodTypeDef`, [`IAddress`](../../../../client/src/interfaces/IAddress.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `id`: [`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md); `irm`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `lltv`: [`IRiskRatio`](../../../../client/src/interfaces/IRiskRatio.md); `oracle`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `id`: [`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md); `irm`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `lltv`: [`IRiskRatio`](../../../../client/src/interfaces/IRiskRatio.md); `oracle`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for IMorphoLendingPool
