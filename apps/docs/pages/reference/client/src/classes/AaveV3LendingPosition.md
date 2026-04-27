[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / AaveV3LendingPosition

# Class: AaveV3LendingPosition

AaveV3Position

## See

IAaveV3LendingPosition

## Extends

- [`LendingPosition`](LendingPosition.md)

## Implements

- [`IAaveV3LendingPosition`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IAaveV3LendingPosition`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md).[`[___signature__]`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md#___signature__-2)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`[___signature__]`](LendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IAaveV3LendingPosition.[___signature__]`

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`[___signature__]`](LendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IAaveV3LendingPosition.[___signature__]`

#### Inherited from

[`Position`](Position.md).[`[___signature__]`](Position.md#___signature__)

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Implementation of

[`IAaveV3LendingPosition`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md).[`collateralAmount`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md#collateralamount)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`collateralAmount`](LendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Implementation of

[`IAaveV3LendingPosition`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md).[`debtAmount`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md#debtamount)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`debtAmount`](LendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`IAaveV3LendingPositionId`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md)

The id of the position

#### Implementation of

[`IAaveV3LendingPosition`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md).[`id`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md#id)

#### Overrides

[`LendingPosition`](LendingPosition.md).[`id`](LendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`IAaveV3LendingPool`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPool.md)

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPosition`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md).[`pool`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md#pool)

#### Overrides

[`LendingPosition`](LendingPosition.md).[`pool`](LendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../enumerations/LendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPosition`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md).[`subtype`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md#subtype)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`subtype`](LendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPosition`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md).[`type`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md#type)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`type`](LendingPosition.md#type)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `AaveV3LendingPosition`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`AaveV3LendingPositionParameters`](../../../protocol-plugins/service/src/type-aliases/AaveV3LendingPositionParameters.md) |

#### Returns

`AaveV3LendingPosition`
