[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IMorphoLendingPoolId

# Interface: IMorphoLendingPoolId

IMorphoLendingPoolId
Identifier of a lending pool in the Morpho protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`IMorphoLendingPoolIdData`](../../../protocol-plugins/service/src/type-aliases/IMorphoLendingPoolIdData.md).[`ILendingPoolId`](ILendingPoolId.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ILendingPoolId`](ILendingPoolId.md).[`[___signature__]`](ILendingPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate it from other interfaces

#### Inherited from

`ILendingPoolId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPoolId.[___signature__]`

***

### marketId

> `readonly` **marketId**: `` `0x${string}` ``

The encoded market ID used to access the market parameters

#### Overrides

`IMorphoLendingPoolIdData.marketId`

***

### protocol

> `readonly` **protocol**: [`IMorphoProtocol`](IMorphoProtocol.md)

The protocol to which the pool belongs

#### Overrides

`IMorphoLendingPoolIdData.protocol`

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PoolType.md#lending)

Pool type

#### Inherited from

[`ILendingPoolId`](ILendingPoolId.md).[`type`](ILendingPoolId.md#type)
