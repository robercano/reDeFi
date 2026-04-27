[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkLendingPoolDataSchema

# Variable: SparkLendingPoolDataSchema

> `const` **SparkLendingPoolDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `id`: `ZodType`\<[`ISparkLendingPoolId`](../../../../client/src/interfaces/ISparkLendingPoolId.md), `ZodTypeDef`, [`ISparkLendingPoolId`](../../../../client/src/interfaces/ISparkLendingPoolId.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `id`: [`ISparkLendingPoolId`](../../../../client/src/interfaces/ISparkLendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `id`: [`ISparkLendingPoolId`](../../../../client/src/interfaces/ISparkLendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for ISparkLendingPool
