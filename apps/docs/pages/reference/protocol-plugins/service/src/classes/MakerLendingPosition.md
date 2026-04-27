[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerLendingPosition

# Class: MakerLendingPosition

MakerPosition

## See

IMakerLendingPosition

## Extends

- [`LendingPosition`](../../../../client/src/classes/LendingPosition.md)

## Implements

- [`IMakerLendingPosition`](../interfaces/IMakerLendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMakerLendingPosition`](../interfaces/IMakerLendingPosition.md).[`[___signature__]`](../interfaces/IMakerLendingPosition.md#___signature__-2)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`[___signature__]`](../../../../client/src/classes/LendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IMakerLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IMakerLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Implementation of

[`IMakerLendingPosition`](../interfaces/IMakerLendingPosition.md).[`collateralAmount`](../interfaces/IMakerLendingPosition.md#collateralamount)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`collateralAmount`](../../../../client/src/classes/LendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Implementation of

[`IMakerLendingPosition`](../interfaces/IMakerLendingPosition.md).[`debtAmount`](../interfaces/IMakerLendingPosition.md#debtamount)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`debtAmount`](../../../../client/src/classes/LendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`IMakerLendingPositionId`](../interfaces/IMakerLendingPositionId.md)

ATTRIBUTES

#### Implementation of

[`IMakerLendingPosition`](../interfaces/IMakerLendingPosition.md).[`id`](../interfaces/IMakerLendingPosition.md#id)

#### Overrides

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`id`](../../../../client/src/classes/LendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`IMakerLendingPool`](../interfaces/IMakerLendingPool.md)

Lending pool associated to this position

#### Implementation of

[`IMakerLendingPosition`](../interfaces/IMakerLendingPosition.md).[`pool`](../interfaces/IMakerLendingPosition.md#pool)

#### Overrides

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`pool`](../../../../client/src/classes/LendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../../../../client/src/enumerations/LendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`IMakerLendingPosition`](../interfaces/IMakerLendingPosition.md).[`subtype`](../interfaces/IMakerLendingPosition.md#subtype)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`subtype`](../../../../client/src/classes/LendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`IMakerLendingPosition`](../interfaces/IMakerLendingPosition.md).[`type`](../interfaces/IMakerLendingPosition.md#type)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`type`](../../../../client/src/classes/LendingPosition.md#type)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `MakerLendingPosition`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MakerLendingPositionParameters`](../type-aliases/MakerLendingPositionParameters.md) |

#### Returns

`MakerLendingPosition`
