[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoLendingPosition

# Class: MorphoLendingPosition

MorphoLendingPosition

## See

IMorphoLendingPosition

## Extends

- [`LendingPosition`](../../../../client/src/classes/LendingPosition.md)

## Implements

- [`IMorphoLendingPosition`](../interfaces/IMorphoLendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMorphoLendingPosition`](../interfaces/IMorphoLendingPosition.md).[`[___signature__]`](../interfaces/IMorphoLendingPosition.md#___signature__-2)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`[___signature__]`](../../../../client/src/classes/LendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IMorphoLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IMorphoLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Implementation of

[`IMorphoLendingPosition`](../interfaces/IMorphoLendingPosition.md).[`collateralAmount`](../interfaces/IMorphoLendingPosition.md#collateralamount)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`collateralAmount`](../../../../client/src/classes/LendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Implementation of

[`IMorphoLendingPosition`](../interfaces/IMorphoLendingPosition.md).[`debtAmount`](../interfaces/IMorphoLendingPosition.md#debtamount)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`debtAmount`](../../../../client/src/classes/LendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`IMorphoLendingPositionId`](../interfaces/IMorphoLendingPositionId.md)

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPosition`](../interfaces/IMorphoLendingPosition.md).[`id`](../interfaces/IMorphoLendingPosition.md#id)

#### Overrides

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`id`](../../../../client/src/classes/LendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md)

The pool the position belongs to

#### Implementation of

[`IMorphoLendingPosition`](../interfaces/IMorphoLendingPosition.md).[`pool`](../interfaces/IMorphoLendingPosition.md#pool)

#### Overrides

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`pool`](../../../../client/src/classes/LendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../../../../client/src/enumerations/LendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPosition`](../interfaces/IMorphoLendingPosition.md).[`subtype`](../interfaces/IMorphoLendingPosition.md#subtype)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`subtype`](../../../../client/src/classes/LendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPosition`](../interfaces/IMorphoLendingPosition.md).[`type`](../interfaces/IMorphoLendingPosition.md#type)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`type`](../../../../client/src/classes/LendingPosition.md#type)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `MorphoLendingPosition`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MorphoLendingPositionParameters`](../type-aliases/MorphoLendingPositionParameters.md) |

#### Returns

`MorphoLendingPosition`
