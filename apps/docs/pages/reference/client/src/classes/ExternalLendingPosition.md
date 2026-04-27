[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ExternalLendingPosition

# Class: ExternalLendingPosition

## Name

ExternalLendingPosition

## See

IExternalLendingPosition

## Extends

- [`LendingPosition`](LendingPosition.md)

## Implements

- [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md).[`[___signature__]`](../interfaces/IExternalLendingPosition.md#___signature__-2)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`[___signature__]`](LendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IExternalLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IExternalLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Implementation of

[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md).[`collateralAmount`](../interfaces/IExternalLendingPosition.md#collateralamount)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`collateralAmount`](LendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Implementation of

[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md).[`debtAmount`](../interfaces/IExternalLendingPosition.md#debtamount)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`debtAmount`](LendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md)

ATTRIBUTES

#### Implementation of

[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md).[`id`](../interfaces/IExternalLendingPosition.md#id)

#### Overrides

[`LendingPosition`](LendingPosition.md).[`id`](LendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`ILendingPool`](../interfaces/ILendingPool.md)

Pool where the position is

#### Implementation of

[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md).[`pool`](../interfaces/IExternalLendingPosition.md#pool)

#### Overrides

[`LendingPosition`](LendingPosition.md).[`pool`](LendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../enumerations/LendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md).[`subtype`](../interfaces/IExternalLendingPosition.md#subtype)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`subtype`](LendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md).[`type`](../interfaces/IExternalLendingPosition.md#type)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`type`](LendingPosition.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md).[`toString`](../interfaces/IExternalLendingPosition.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `ExternalLendingPosition`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ExternalLendingPositionParameters`](../type-aliases/ExternalLendingPositionParameters.md) |

#### Returns

`ExternalLendingPosition`
