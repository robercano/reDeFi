[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerLendingPoolIdDataSchema

# Variable: MakerLendingPoolIdDataSchema

> `const` **MakerLendingPoolIdDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `ilkType`: `ZodNativeEnum`\<*typeof* [`ILKType`](../enumerations/ILKType.md)\>; `protocol`: `ZodType`\<[`IMakerProtocol`](../interfaces/IMakerProtocol.md), `ZodTypeDef`, [`IMakerProtocol`](../interfaces/IMakerProtocol.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `ilkType`: [`ILKType`](../enumerations/ILKType.md); `protocol`: [`IMakerProtocol`](../interfaces/IMakerProtocol.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `ilkType`: [`ILKType`](../enumerations/ILKType.md); `protocol`: [`IMakerProtocol`](../interfaces/IMakerProtocol.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for IMakerLendingPoolId
