[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / MakerLendingPosition

# Class: MakerLendingPosition

MakerPosition

## See

IMakerLendingPosition

## Extends

- [`LendingPosition`](LendingPosition.md)

## Implements

- [`IMakerLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMakerLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md).[`[___signature__]`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md#___signature__-2)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`[___signature__]`](LendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMakerLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMakerLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Implementation of

[`IMakerLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md).[`collateralAmount`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md#collateralamount)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`collateralAmount`](LendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Implementation of

[`IMakerLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md).[`debtAmount`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md#debtamount)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`debtAmount`](LendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`IMakerLendingPositionId`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPositionId.md)

ATTRIBUTES

#### Implementation of

[`IMakerLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md).[`id`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md#id)

#### Overrides

[`LendingPosition`](LendingPosition.md).[`id`](LendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`IMakerLendingPool`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPool.md)

Lending pool associated to this position

#### Implementation of

[`IMakerLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md).[`pool`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md#pool)

#### Overrides

[`LendingPosition`](LendingPosition.md).[`pool`](LendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../enumerations/LendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`IMakerLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md).[`subtype`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md#subtype)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`subtype`](LendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`IMakerLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md).[`type`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPosition.md#type)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`type`](LendingPosition.md#type)

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
