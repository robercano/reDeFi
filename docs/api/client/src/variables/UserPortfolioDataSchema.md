[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / UserPortfolioDataSchema

# Variable: UserPortfolioDataSchema

> `const` **UserPortfolioDataSchema**: `z.ZodObject`\<\{ `totalFiatValue`: `z.ZodType`\<[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md), `z.ZodTypeDef`, [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)\>; `user`: `z.ZodType`\<[`IUser`](../interfaces/IUser.md), `z.ZodTypeDef`, [`IUser`](../interfaces/IUser.md)\>; `walletHoldings`: `z.ZodArray`\<`z.ZodType`\<[`IHolding`](../interfaces/IHolding.md), `z.ZodTypeDef`, [`IHolding`](../interfaces/IHolding.md)\>, `"many"`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `totalFiatValue`: [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md); `user`: [`IUser`](../interfaces/IUser.md); `walletHoldings`: [`IHolding`](../interfaces/IHolding.md)[]; \}, \{ `totalFiatValue`: [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md); `user`: [`IUser`](../interfaces/IUser.md); `walletHoldings`: [`IHolding`](../interfaces/IHolding.md)[]; \}\>

Zod schema for IUserPortfolio
