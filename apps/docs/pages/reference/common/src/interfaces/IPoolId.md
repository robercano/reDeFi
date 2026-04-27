[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IPoolId

# Interface: IPoolId

## Name

IPoolId

## Description

Represents a pool's ID. This will be specialized for each protocol

It is a way to retrieve a pool from the protocol and it should include all the necessary information
to uniquely identify a pool

## Extends

- [`IPoolIdData`](../type-aliases/IPoolIdData.md)

## Extended by

- [`ILendingPoolId`](ILendingPoolId.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### protocol

> `readonly` **protocol**: [`IProtocol`](IProtocol.md)

Protocol where the pool is

#### Overrides

`IPoolIdData.protocol`

***

### type

> `readonly` **type**: [`PoolType`](../../../client/src/enumerations/PoolType.md)

Pool type

#### Overrides

`IPoolIdData.type`
