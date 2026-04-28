[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IPoolInfo

# Interface: IPoolInfo

IPool
Represents the extended information of a pool. It should contain extra info that is common for any type of pool

It is meant to be specialized for each type of pool, like a lending pool, a staking pool, etc...

## Extends

- [`IPoolInfoData`](../type-aliases/IPoolInfoData.md)

## Extended by

- [`ILendingPoolInfo`](ILendingPoolInfo.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### id

> `readonly` **id**: [`IPoolId`](IPoolId.md)

Unique identifier for the pool, to be specialized for each protocol

#### Overrides

`IPoolInfoData.id`

***

### type

> `readonly` **type**: [`PoolType`](../enumerations/PoolType.md)

Type of the pool

#### Overrides

`IPoolInfoData.type`
