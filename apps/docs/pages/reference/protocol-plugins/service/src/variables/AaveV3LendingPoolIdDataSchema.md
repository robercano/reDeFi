[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3LendingPoolIdDataSchema

# Variable: AaveV3LendingPoolIdDataSchema

> `const` **AaveV3LendingPoolIdDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `emodeType`: `ZodNativeEnum`\<*typeof* [`EmodeType`](../../../../client/src/enumerations/EmodeType.md)\>; `protocol`: `ZodType`\<[`IAaveV3Protocol`](../../../../client/src/interfaces/IAaveV3Protocol.md), `ZodTypeDef`, [`IAaveV3Protocol`](../../../../client/src/interfaces/IAaveV3Protocol.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `emodeType`: [`EmodeType`](../../../../client/src/enumerations/EmodeType.md); `protocol`: [`IAaveV3Protocol`](../../../../client/src/interfaces/IAaveV3Protocol.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `emodeType`: [`EmodeType`](../../../../client/src/enumerations/EmodeType.md); `protocol`: [`IAaveV3Protocol`](../../../../client/src/interfaces/IAaveV3Protocol.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

Zod schema for IAaveV3LendingPoolId
