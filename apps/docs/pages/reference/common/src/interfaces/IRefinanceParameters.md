[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IRefinanceParameters

# Interface: IRefinanceParameters

Parameters for a refinance simulation

## Extends

- [`IRefinanceParametersData`](../type-aliases/IRefinanceParametersData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

***

### slippage

> `readonly` **slippage**: [`IPercentage`](IPercentage.md)

Maximum slippage allowed for the simulation

#### Overrides

`IRefinanceParametersData.slippage`

***

### sourcePosition

> `readonly` **sourcePosition**: [`ILendingPosition`](ILendingPosition.md)

Existing position to be refinanced

#### Overrides

`IRefinanceParametersData.sourcePosition`

***

### targetPool

> `readonly` **targetPool**: [`ILendingPool`](ILendingPool.md)

Target pool where the source position will be moved

#### Overrides

`IRefinanceParametersData.targetPool`
