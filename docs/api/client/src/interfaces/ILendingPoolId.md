[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ILendingPoolId

# Interface: ILendingPoolId

ILendingPoolId
Identifies a generic lending pool. This will be specialized for each protocol

This is meant to be used for single pair collateral/debt lending pools. For multi-collateral pools,
a different interface should be used

Note: Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`IPoolId`](IPoolId.md).[`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md)

## Extended by

- [`IAaveV3LendingPoolId`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPoolId.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate it from other interfaces

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

#### Overrides

[`IPoolId`](IPoolId.md).[`protocol`](IPoolId.md#protocol)

***

### type

> `readonly` **type**: `Lending`

Pool type

#### Overrides

[`IPoolId`](IPoolId.md).[`type`](IPoolId.md#type)
