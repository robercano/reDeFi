[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / MorphoLendingPosition

# Class: MorphoLendingPosition

MorphoLendingPosition

## See

IMorphoLendingPosition

## Extends

- [`LendingPosition`](LendingPosition.md)

## Implements

- [`IMorphoLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMorphoLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md).[`[___signature__]`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md#___signature__-2)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`[___signature__]`](LendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMorphoLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMorphoLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Implementation of

[`IMorphoLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md).[`collateralAmount`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md#collateralamount)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`collateralAmount`](LendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Implementation of

[`IMorphoLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md).[`debtAmount`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md#debtamount)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`debtAmount`](LendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`IMorphoLendingPositionId`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPositionId.md)

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md).[`id`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md#id)

#### Overrides

[`LendingPosition`](LendingPosition.md).[`id`](LendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`IMorphoLendingPool`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPool.md)

The pool the position belongs to

#### Implementation of

[`IMorphoLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md).[`pool`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md#pool)

#### Overrides

[`LendingPosition`](LendingPosition.md).[`pool`](LendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../enumerations/LendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md).[`subtype`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md#subtype)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`subtype`](LendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPosition`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md).[`type`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPosition.md#type)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`type`](LendingPosition.md#type)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `MorphoLendingPosition`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MorphoLendingPositionParameters`](../../../protocol-plugins/service/src/type-aliases/MorphoLendingPositionParameters.md) |

#### Returns

`MorphoLendingPosition`
