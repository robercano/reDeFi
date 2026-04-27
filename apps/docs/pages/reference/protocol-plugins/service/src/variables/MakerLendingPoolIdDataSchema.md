[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerLendingPoolIdDataSchema

# Variable: MakerLendingPoolIdDataSchema

> `const` **MakerLendingPoolIdDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `ilkType`: `ZodNativeEnum`\<*typeof* [`ILKType`](../../../../client/src/enumerations/ILKType.md)\>; `protocol`: `ZodType`\<[`IMakerProtocol`](../../../../client/src/interfaces/IMakerProtocol.md), `ZodTypeDef`, [`IMakerProtocol`](../../../../client/src/interfaces/IMakerProtocol.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `ilkType`: [`ILKType`](../../../../client/src/enumerations/ILKType.md); `protocol`: [`IMakerProtocol`](../../../../client/src/interfaces/IMakerProtocol.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `ilkType`: [`ILKType`](../../../../client/src/enumerations/ILKType.md); `protocol`: [`IMakerProtocol`](../../../../client/src/interfaces/IMakerProtocol.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for IMakerLendingPoolId
