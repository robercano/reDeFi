[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / LendingPoolDataSchema

# Variable: LendingPoolDataSchema

> `const` **LendingPoolDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; `id`: `ZodType`\<[`ILendingPoolId`](../interfaces/ILendingPoolId.md), `ZodTypeDef`, [`ILendingPoolId`](../interfaces/ILendingPoolId.md)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken`: [`IToken`](../interfaces/IToken.md); `debtToken`: [`IToken`](../interfaces/IToken.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: `Lending`; \}, \{ `collateralToken`: [`IToken`](../interfaces/IToken.md); `debtToken`: [`IToken`](../interfaces/IToken.md); `id`: [`ILendingPoolId`](../interfaces/ILendingPoolId.md); `type`: `Lending`; \}\>

## Description

Zod schema for ILendingPool
