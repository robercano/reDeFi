[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IPool

# Interface: IPool

IPool
Represents a generic protocol pool. Contains information about the pool's ID,
             which is specific to each protocol, and the pool's type

It is meant to be specialized for each type of pool

## Extends

- [`IPrintable`](../../../common/src/interfaces/IPrintable.md).[`IPoolData`](../type-aliases/IPoolData.md)

## Extended by

- [`ILendingPool`](ILendingPool.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### id

> `readonly` **id**: [`IPoolId`](IPoolId.md)

Unique identifier for the pool, to be specialized for each protocol

#### Overrides

`IPoolData.id`

***

### type

> `readonly` **type**: [`PoolType`](../../../common/src/enumerations/PoolType.md)

Type of the pool

#### Overrides

`IPoolData.type`

## Methods

### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Inherited from

[`IPrintable`](../../../common/src/interfaces/IPrintable.md).[`toString`](../../../common/src/interfaces/IPrintable.md#tostring)
