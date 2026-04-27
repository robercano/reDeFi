[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPoolDataSchema

# Variable: LendingPoolDataSchema

> `const` **LendingPoolDataSchema**: `z.ZodObject`\<\{ `collateralToken`: `z.ZodType`\<[`IToken`](../interfaces/IToken.md), `z.ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `debtToken`: `z.ZodType`\<[`IToken`](../interfaces/IToken.md), `z.ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `id`: `z.ZodType`\<[`ILendingPoolId`](../interfaces/ILendingPoolId.md), `z.ZodTypeDef`, [`ILendingPoolId`](../interfaces/ILendingPoolId.md)\>; `type`: `z.ZodLiteral`\<[`Lending`](../enumerations/PoolType.md#lending)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `collateralToken`: [`IToken`](../interfaces/IToken.md); `debtToken`: [`IToken`](../interfaces/IToken.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: [`Lending`](../enumerations/PoolType.md#lending); \}, \{ `collateralToken`: [`IToken`](../interfaces/IToken.md); `debtToken`: [`IToken`](../interfaces/IToken.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: [`Lending`](../enumerations/PoolType.md#lending); \}\>

## Description

Zod schema for ILendingPool
