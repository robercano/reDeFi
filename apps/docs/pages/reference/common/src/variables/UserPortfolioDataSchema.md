[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / UserPortfolioDataSchema

# Variable: UserPortfolioDataSchema

> `const` **UserPortfolioDataSchema**: `ZodObject`\<\{ `totalFiatValue`: `ZodType`\<[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md), `ZodTypeDef`, [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)\>; `user`: `ZodType`\<[`IUser`](../interfaces/IUser.md), `ZodTypeDef`, [`IUser`](../interfaces/IUser.md)\>; `walletHoldings`: `ZodArray`\<`ZodType`\<[`IHolding`](../interfaces/IHolding.md), `ZodTypeDef`, [`IHolding`](../interfaces/IHolding.md)\>, `"many"`\>; \}, `"strip"`, `ZodTypeAny`, \{ `totalFiatValue`: [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md); `user`: [`IUser`](../interfaces/IUser.md); `walletHoldings`: [`IHolding`](../interfaces/IHolding.md)[]; \}, \{ `totalFiatValue`: [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md); `user`: [`IUser`](../interfaces/IUser.md); `walletHoldings`: [`IHolding`](../interfaces/IHolding.md)[]; \}\>

Zod schema for IUserPortfolio
