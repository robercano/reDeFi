[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / PoolId

# Abstract Class: PoolId

PoolId

## See

IPoolIdData

## Extended by

- [`LendingPoolId`](LendingPoolId.md)

## Implements

- [`IPoolId`](../interfaces/IPoolId.md)
- [`IPrintable`](../interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IPoolId`](../interfaces/IPoolId.md).[`[___signature__]`](../interfaces/IPoolId.md#___signature__)

***

### protocol

> `abstract` `readonly` **protocol**: [`IProtocol`](../interfaces/IProtocol.md)

Protocol where the pool is

#### Implementation of

[`IPoolId`](../interfaces/IPoolId.md).[`protocol`](../interfaces/IPoolId.md#protocol)

***

### type

> `abstract` `readonly` **type**: [`PoolType`](../enumerations/PoolType.md)

ATTRIBUTES

#### Implementation of

[`IPoolId`](../interfaces/IPoolId.md).[`type`](../interfaces/IPoolId.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IPrintable`](../interfaces/IPrintable.md).[`toString`](../interfaces/IPrintable.md#tostring)
