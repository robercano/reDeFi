[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / RefinanceParameters

# Class: RefinanceParameters

## Name

RefinanceParameters

## See

IRefinanceParameters

## Implements

- [`IRefinanceParameters`](../interfaces/IRefinanceParameters.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IRefinanceParameters`](../interfaces/IRefinanceParameters.md).[`[___signature__]`](../interfaces/IRefinanceParameters.md#___signature__)

***

### slippage

> `readonly` **slippage**: [`IPercentage`](../interfaces/IPercentage.md)

Maximum slippage allowed for the simulation

#### Implementation of

[`IRefinanceParameters`](../interfaces/IRefinanceParameters.md).[`slippage`](../interfaces/IRefinanceParameters.md#slippage)

***

### sourcePosition

> `readonly` **sourcePosition**: [`ILendingPosition`](../interfaces/ILendingPosition.md)

ATTRIBUTES

#### Implementation of

[`IRefinanceParameters`](../interfaces/IRefinanceParameters.md).[`sourcePosition`](../interfaces/IRefinanceParameters.md#sourceposition)

***

### targetPool

> `readonly` **targetPool**: [`ILendingPool`](../interfaces/ILendingPool.md)

Target pool where the source position will be moved

#### Implementation of

[`IRefinanceParameters`](../interfaces/IRefinanceParameters.md).[`targetPool`](../interfaces/IRefinanceParameters.md#targetpool)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

***

### createFrom()

> `static` **createFrom**(`params`): `RefinanceParameters`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`RefinanceParametersParameters`](../type-aliases/RefinanceParametersParameters.md) |

#### Returns

`RefinanceParameters`
