[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkLendingPoolIdDataSchema

# Variable: SparkLendingPoolIdDataSchema

> `const` **SparkLendingPoolIdDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `emodeType`: `ZodNativeEnum`\<*typeof* [`EmodeType`](../enumerations/EmodeType.md)\>; `protocol`: `ZodType`\<[`ISparkProtocol`](../interfaces/ISparkProtocol.md), `ZodTypeDef`, [`ISparkProtocol`](../interfaces/ISparkProtocol.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `emodeType`: [`EmodeType`](../enumerations/EmodeType.md); `protocol`: [`ISparkProtocol`](../interfaces/ISparkProtocol.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `emodeType`: [`EmodeType`](../enumerations/EmodeType.md); `protocol`: [`ISparkProtocol`](../interfaces/ISparkProtocol.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for ISparkLendingPoolId
