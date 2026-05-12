[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3LendingPoolDataSchema

# Variable: AaveV3LendingPoolDataSchema

> `const` **AaveV3LendingPoolDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `debtToken`: `ZodType`\<[`IToken`](../../../../client/src/interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../../../../client/src/interfaces/IToken.md)\>; `id`: `ZodType`\<[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md), `ZodTypeDef`, [`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken?`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken?`: [`IToken`](../../../../client/src/interfaces/IToken.md); `id?`: [`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md); `type?`: `Lending`; \}, \{ `collateralToken?`: [`IToken`](../../../../client/src/interfaces/IToken.md); `debtToken?`: [`IToken`](../../../../client/src/interfaces/IToken.md); `id?`: [`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md); `type?`: `Lending`; \}\>

Zod schema for IAaveV3LendingPool
