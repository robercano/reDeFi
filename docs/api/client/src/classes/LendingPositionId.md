[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPositionId

# Abstract Class: LendingPositionId

LendingPositionId

## See

ILendingPositionId

## Extends

- [`PositionId`](PositionId.md)

## Extended by

- [`AaveV3LendingPositionId`](../../../protocol-plugins/service/src/classes/AaveV3LendingPositionId.md)

## Implements

- [`ILendingPositionIdData`](../type-aliases/ILendingPositionIdData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Inherited from

[`PositionId`](PositionId.md).[`[___signature__]`](PositionId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Inherited from

`PositionId.[___signature__]`

***

### id

> `readonly` **id**: `string`

ATTRIBUTES

#### Implementation of

`ILendingPositionIdData.id`

#### Inherited from

[`PositionId`](PositionId.md).[`id`](PositionId.md#id)

***

### type

> `readonly` **type**: `Lending` = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

`ILendingPositionIdData.type`

#### Overrides

[`PositionId`](PositionId.md).[`type`](PositionId.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Overrides

[`PositionId`](PositionId.md).[`toString`](PositionId.md#tostring)
