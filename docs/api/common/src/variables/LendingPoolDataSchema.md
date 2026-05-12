[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / LendingPoolDataSchema

# Variable: LendingPoolDataSchema

> `const` **LendingPoolDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `id`: `ZodType`\<[`ILendingPoolId`](../interfaces/ILendingPoolId.md), `ZodTypeDef`, [`ILendingPoolId`](../interfaces/ILendingPoolId.md)\>; `type`: `ZodLiteral`\<[`Lending`](../enumerations/PoolType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken?`: [`IToken`](../interfaces/IToken.md); `debtToken?`: [`IToken`](../interfaces/IToken.md); `id?`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type?`: [`Lending`](../enumerations/PoolType.md#lending); \}, \{ `collateralToken?`: [`IToken`](../interfaces/IToken.md); `debtToken?`: [`IToken`](../interfaces/IToken.md); `id?`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type?`: [`Lending`](../enumerations/PoolType.md#lending); \}\>

Zod schema for ILendingPool
