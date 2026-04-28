[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / UserPortfolio

# Class: UserPortfolio

UserPortfolio

## See

IUserPortfolio

## Implements

- [`IUserPortfolio`](../interfaces/IUserPortfolio.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IUserPortfolio`](../interfaces/IUserPortfolio.md).[`[___signature__]`](../interfaces/IUserPortfolio.md#___signature__)

***

### totalFiatValue

> `readonly` **totalFiatValue**: [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)

#### Implementation of

[`IUserPortfolio`](../interfaces/IUserPortfolio.md).[`totalFiatValue`](../interfaces/IUserPortfolio.md#totalfiatvalue)

***

### user

> `readonly` **user**: [`IUser`](../interfaces/IUser.md)

ATTRIBUTES

#### Implementation of

[`IUserPortfolio`](../interfaces/IUserPortfolio.md).[`user`](../interfaces/IUserPortfolio.md#user)

***

### walletHoldings

> `readonly` **walletHoldings**: [`IHolding`](../interfaces/IHolding.md)[]

#### Implementation of

[`IUserPortfolio`](../interfaces/IUserPortfolio.md).[`walletHoldings`](../interfaces/IUserPortfolio.md#walletholdings)

## Methods

### toString()

> **toString**(): `string`

toString

#### Returns

`string`

#### Implementation of

[`IUserPortfolio`](../interfaces/IUserPortfolio.md).[`toString`](../interfaces/IUserPortfolio.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `UserPortfolio`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`UserPortfolioParameters`](../type-aliases/UserPortfolioParameters.md) |

#### Returns

`UserPortfolio`
