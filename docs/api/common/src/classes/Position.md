[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / Position

# Abstract Class: Position

Position

## See

IPosition

## Extended by

- [`LendingPosition`](LendingPosition.md)

## Implements

- [`IPosition`](../interfaces/IPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IPosition`](../interfaces/IPosition.md).[`[___signature__]`](../interfaces/IPosition.md#___signature__)

***

### id

> `abstract` `readonly` **id**: [`IPositionId`](../interfaces/IPositionId.md)

Unique identifier for the position

#### Implementation of

[`IPosition`](../interfaces/IPosition.md).[`id`](../interfaces/IPosition.md#id)

***

### pool

> `abstract` `readonly` **pool**: [`IPool`](../interfaces/IPool.md)

Pool where the position is opened

#### Implementation of

[`IPosition`](../interfaces/IPosition.md).[`pool`](../interfaces/IPosition.md#pool)

***

### type

> `abstract` `readonly` **type**: [`PositionType`](../enumerations/PositionType.md)

ATTRIBUTES

#### Implementation of

[`IPosition`](../interfaces/IPosition.md).[`type`](../interfaces/IPosition.md#type)
