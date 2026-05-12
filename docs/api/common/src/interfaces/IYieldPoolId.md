[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IYieldPoolId

# Interface: IYieldPoolId

IYieldPoolId
Opaque type representing the unique identifier for a Yield pool.
Typically a combination of protocol name, and pool address.

## Extends

- [`IPoolId`](IPoolId.md).[`IYieldPoolIdData`](../type-aliases/IYieldPoolIdData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

[`IPoolId`](IPoolId.md).[`[___signature__]`](IPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`IPoolId.[___signature__]`

***

### protocol

> `readonly` **protocol**: [`IProtocol`](IProtocol.md)

Protocol where the pool is

#### Inherited from

[`IPoolId`](IPoolId.md).[`protocol`](IPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Yield`](../enumerations/PoolType.md#yield)

Pool type

#### Overrides

[`IPoolId`](IPoolId.md).[`type`](IPoolId.md#type)
