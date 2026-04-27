[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / LendingPoolId

# Abstract Class: LendingPoolId

LendingPoolId

## See

ILendingPoolId

## Extends

- `PoolId`

## Implements

- [`ILendingPoolId`](../interfaces/ILendingPoolId.md)
- [`IPrintable`](../../../client/src/interfaces/IPrintable.md)

## Constructors

### Constructor

> `protected` **new LendingPoolId**(`params`): `LendingPoolId`

SEALED CONSTRUCTOR

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`LendingPoolIdParameters`](../type-aliases/LendingPoolIdParameters.md) |

#### Returns

`LendingPoolId`

#### Overrides

`PoolId.constructor`

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ILendingPoolId`](../interfaces/ILendingPoolId.md).[`[___signature__]`](../interfaces/ILendingPoolId.md#___signature__-1)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

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

`PoolId.protocol`

***

### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`ILendingPoolId`](../interfaces/ILendingPoolId.md).[`type`](../interfaces/ILendingPoolId.md#type)

#### Overrides

`PoolId.type`

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IPrintable`](../../../client/src/interfaces/IPrintable.md).[`toString`](../../../client/src/interfaces/IPrintable.md#tostring)

#### Overrides

`PoolId.toString`
