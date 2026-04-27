[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / MorphoLendingPoolId

# Class: MorphoLendingPoolId

MorphoLendingPoolId

## See

IMorphoLendingPoolIdData

## Extends

- [`LendingPoolId`](LendingPoolId.md)

## Implements

- [`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md)
- [`IPrintable`](../interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md).[`[___signature__]`](../interfaces/IMorphoLendingPoolId.md#___signature__-2)

#### Inherited from

[`LendingPoolId`](LendingPoolId.md).[`[___signature__]`](LendingPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMorphoLendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

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

[`LendingPoolId`](LendingPoolId.md).[`protocol`](LendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md).[`type`](../interfaces/IMorphoLendingPoolId.md#type)

#### Inherited from

[`LendingPoolId`](LendingPoolId.md).[`type`](LendingPoolId.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IPrintable`](../interfaces/IPrintable.md).[`toString`](../interfaces/IPrintable.md#tostring)

#### Overrides

[`LendingPoolId`](LendingPoolId.md).[`toString`](LendingPoolId.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `MorphoLendingPoolId`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MorphoLendingPoolIdParameters`](../../../protocol-plugins/service/src/type-aliases/MorphoLendingPoolIdParameters.md) |

#### Returns

`MorphoLendingPoolId`
