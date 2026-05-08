[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3LendingPoolDataSchema

# Variable: AaveV3LendingPoolDataSchema

> `const` **AaveV3LendingPoolDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `id`: `ZodType`\<[`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md), `ZodTypeDef`, [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md)\>; `type`: `ZodLiteral`\<[`Lending`](../../../../client/src/enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `id`: [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}, \{ `collateralToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken`: [`IToken`](../../../../client/src/interfaces/IToken.md); `id`: [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md); `type`: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending); \}\>

Zod schema for IAaveV3LendingPool
