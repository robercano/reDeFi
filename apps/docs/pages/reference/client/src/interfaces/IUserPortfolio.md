[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IUserPortfolio

# Interface: IUserPortfolio

## Name

IUserPortfolio

## Description

Represents the portfolio holdings of a specific user.

## Extends

- [`IUserPortfolioData`](../type-aliases/IUserPortfolioData.md).[`IPrintable`](IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

***

### totalFiatValue

> `readonly` **totalFiatValue**: [`IFiatCurrencyAmount`](IFiatCurrencyAmount.md)

#### Overrides

`IUserPortfolioData.totalFiatValue`

***

### user

> `readonly` **user**: [`IUser`](IUser.md)

#### Overrides

`IUserPortfolioData.user`

***

### walletHoldings

> `readonly` **walletHoldings**: [`IHolding`](IHolding.md)[]

#### Overrides

`IUserPortfolioData.walletHoldings`

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Name

toString

#### Description

Returns a string representation of the object

#### Inherited from

[`IPrintable`](IPrintable.md).[`toString`](IPrintable.md#tostring)
