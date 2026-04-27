[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoLendingPoolId

# Class: MorphoLendingPoolId

MorphoLendingPoolId

## See

IMorphoLendingPoolIdData

## Extends

- [`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md)

## Implements

- [`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md)
- [`IPrintable`](../../../../client/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md).[`[___signature__]`](../interfaces/IMorphoLendingPoolId.md#___signature__-2)

#### Inherited from

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`[___signature__]`](../../../../client/src/classes/LendingPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IMorphoLendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IMorphoLendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### marketId

> `readonly` **marketId**: `` `0x${string}` ``

The encoded market ID used to access the market parameters

#### Implementation of

[`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md).[`marketId`](../interfaces/IMorphoLendingPoolId.md#marketid)

***

### protocol

> `readonly` **protocol**: [`IMorphoProtocol`](../interfaces/IMorphoProtocol.md)

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md).[`protocol`](../interfaces/IMorphoLendingPoolId.md#protocol)

#### Overrides

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`protocol`](../../../../client/src/classes/LendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md).[`type`](../interfaces/IMorphoLendingPoolId.md#type)

#### Inherited from

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`type`](../../../../client/src/classes/LendingPoolId.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IPrintable`](../../../../client/src/interfaces/IPrintable.md).[`toString`](../../../../client/src/interfaces/IPrintable.md#tostring)

#### Overrides

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`toString`](../../../../client/src/classes/LendingPoolId.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `MorphoLendingPoolId`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MorphoLendingPoolIdParameters`](../type-aliases/MorphoLendingPoolIdParameters.md) |

#### Returns

`MorphoLendingPoolId`
