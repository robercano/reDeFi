[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPoolId

# Abstract Class: LendingPoolId

LendingPoolId

## See

ILendingPoolId

## Extends

- [`PoolId`](PoolId.md)

## Extended by

- [`AaveV3LendingPoolId`](../../../protocol-plugins/service/src/classes/AaveV3LendingPoolId.md)

## Implements

- [`ILendingPoolId`](../interfaces/ILendingPoolId.md)
- [`IPrintable`](../../../common/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

[`ILendingPoolId`](../interfaces/ILendingPoolId.md).[`[___signature__]`](../interfaces/ILendingPoolId.md#___signature__-1)

#### Inherited from

[`PoolId`](PoolId.md).[`[___signature__]`](PoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ILendingPoolId.[___signature__]`

#### Inherited from

`PoolId.[___signature__]`

***

### protocol

> `abstract` `readonly` **protocol**: [`IProtocol`](../interfaces/IProtocol.md)

Protocol where the pool is

#### Implementation of

[`ILendingPoolId`](../interfaces/ILendingPoolId.md).[`protocol`](../interfaces/ILendingPoolId.md#protocol)

#### Inherited from

[`PoolId`](PoolId.md).[`protocol`](PoolId.md#protocol)

***

### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`ILendingPoolId`](../interfaces/ILendingPoolId.md).[`type`](../interfaces/ILendingPoolId.md#type)

#### Overrides

[`PoolId`](PoolId.md).[`type`](PoolId.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IPrintable`](../../../common/src/interfaces/IPrintable.md).[`toString`](../../../common/src/interfaces/IPrintable.md#tostring)

#### Overrides

[`PoolId`](PoolId.md).[`toString`](PoolId.md#tostring)
