[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IDebtInfo

# Interface: IDebtInfo

IDebtInfo

## Description

Contains information about a debt token of a lending pool

Initially this is used for single pair lending pools, but it can be re-used in multi-token
lending pools

## Extends

- [`IDebtInfoData`](../type-aliases/IDebtInfoData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### debtAvailable

> `readonly` **debtAvailable**: [`ITokenAmount`](ITokenAmount.md)

The amount of the token that can still be borrowed

#### Overrides

`IDebtInfoData.debtAvailable`

***

### debtCeiling

> `readonly` **debtCeiling**: [`ITokenAmount`](ITokenAmount.md)

The maximum amount of the token that can be borrowed

#### Overrides

`IDebtInfoData.debtCeiling`

***

### dustLimit

> `readonly` **dustLimit**: [`ITokenAmount`](ITokenAmount.md)

The minimum amount of the token that can be borrowed

#### Overrides

`IDebtInfoData.dustLimit`

***

### interestRate

> `readonly` **interestRate**: [`IPercentage`](IPercentage.md)

The interest rate of the debt. TODO: which units??

#### Overrides

`IDebtInfoData.interestRate`

***

### originationFee

> `readonly` **originationFee**: [`IPercentage`](IPercentage.md)

The fee that is charged for creating a new debt

#### Overrides

`IDebtInfoData.originationFee`

***

### price

> `readonly` **price**: [`IPrice`](IPrice.md)

The price of the token in the protocol's default denomination

#### Overrides

`IDebtInfoData.price`

***

### priceUSD

> `readonly` **priceUSD**: [`IPrice`](IPrice.md)

The price of the token in USD

#### Overrides

`IDebtInfoData.priceUSD`

***

### token

> `readonly` **token**: [`IToken`](IToken.md)

The token that represents the debt

#### Overrides

`IDebtInfoData.token`

***

### totalBorrowed

> `readonly` **totalBorrowed**: [`ITokenAmount`](ITokenAmount.md)

The total amount of the token borrowed

#### Overrides

`IDebtInfoData.totalBorrowed`
