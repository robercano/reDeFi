[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerLendingPoolDataSchema

# Variable: MakerLendingPoolDataSchema

> `const` **MakerLendingPoolDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `id`: `ZodType`\<[`IMakerLendingPoolId`](../../../../client/src/interfaces/IMakerLendingPoolId.md), `ZodTypeDef`, [`IMakerLendingPoolId`](../../../../client/src/interfaces/IMakerLendingPoolId.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `id`: [`IMakerLendingPoolId`](../../../../client/src/interfaces/IMakerLendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `id`: [`IMakerLendingPoolId`](../../../../client/src/interfaces/IMakerLendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for IMakerLendingPool
