[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / PositionUtils

# Class: PositionUtils

## Constructors

### Constructor

> **new PositionUtils**(): `PositionUtils`

#### Returns

`PositionUtils`

## Methods

### getLiquidationPriceInDebtTokens()

> `static` **getLiquidationPriceInDebtTokens**(`__namedParameters`): `string`

This code calculates the value of one collateral token expressed in debt tokens at which the loan-to-value (LTV) ratio will be at liquidationThreshold

#### Parameters

##### \_\_namedParameters

###### debtPriceInUsd

`string`

###### liquidationThreshold

[`Percentage`](Percentage.md)

###### position

[`ILendingPosition`](../interfaces/ILendingPosition.md)

#### Returns

`string`

***

### getLTV()

> `static` **getLTV**(`__namedParameters`): [`IPercentage`](../interfaces/IPercentage.md)

#### Parameters

##### \_\_namedParameters

###### collateralPriceInUsd

`string`

###### collateralTokenAmount

[`ITokenAmount`](../interfaces/ITokenAmount.md)

###### debtPriceInUsd

`string`

###### debtTokenAmount

[`ITokenAmount`](../interfaces/ITokenAmount.md)

#### Returns

[`IPercentage`](../interfaces/IPercentage.md)
