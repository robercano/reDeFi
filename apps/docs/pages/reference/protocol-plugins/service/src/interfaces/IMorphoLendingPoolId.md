[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / IMorphoLendingPoolId

# Interface: IMorphoLendingPoolId

IMorphoLendingPoolId

## Description

Identifier of a lending pool in the Morpho protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`IMorphoLendingPoolIdData`](../type-aliases/IMorphoLendingPoolIdData.md).[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md).[`[___signature__]`](../../../../client/src/interfaces/ILendingPoolId.md#___signature__)

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

[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md).[`protocol`](../../../../client/src/interfaces/ILendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending)

Pool type

#### Inherited from

[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md).[`type`](../../../../client/src/interfaces/ILendingPoolId.md#type)
