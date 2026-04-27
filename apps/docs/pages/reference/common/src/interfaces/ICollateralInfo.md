[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / ICollateralInfo

# Interface: ICollateralInfo

ICollateralInfo

## Description

Contains extended information about a collateral token of a lending pool

## Extends

- [`ICollateralInfoData`](../type-aliases/ICollateralInfoData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### liquidationPenalty

> `readonly` **liquidationPenalty**: [`IPercentage`](IPercentage.md)

The penalty that is charged for liquidating a position

#### Overrides

`ICollateralInfoData.liquidationPenalty`

***

### liquidationThreshold

> `readonly` **liquidationThreshold**: [`IRiskRatio`](IRiskRatio.md)

The ratio between the collateral and the debt at which the position could be liquidated

#### Overrides

`ICollateralInfoData.liquidationThreshold`

***

### maxSupply

> `readonly` **maxSupply**: [`ITokenAmount`](ITokenAmount.md)

The maximum amount of the token that can be supplied

#### Overrides

`ICollateralInfoData.maxSupply`

***

### price

> `readonly` **price**: [`IPrice`](IPrice.md)

The price of the token in the protocol's default denomination

#### Overrides

`ICollateralInfoData.price`

***

### priceUSD

> `readonly` **priceUSD**: [`IPrice`](IPrice.md)

The price of the token in USD

#### Overrides

`ICollateralInfoData.priceUSD`

***

### token

> `readonly` **token**: [`IToken`](IToken.md)

The token that represents the collateral

#### Overrides

`ICollateralInfoData.token`

***

### tokensLocked

> `readonly` **tokensLocked**: [`ITokenAmount`](ITokenAmount.md)

The amount of the token that is currently locked in the pool

#### Overrides

`ICollateralInfoData.tokensLocked`
