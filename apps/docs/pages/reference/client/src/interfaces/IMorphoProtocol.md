[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IMorphoProtocol

# Interface: IMorphoProtocol

IMorphoProtocol

## Description

Identifier of the Morpho protocol

This interface is used to add all the methods that the interface supports

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`IMorphoProtocolData`](../../../protocol-plugins/service/src/type-aliases/IMorphoProtocolData.md).[`IProtocol`](IProtocol.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Interface signature used to differentiate it from similar interfaces

#### Inherited from

[`IProtocol`](IProtocol.md).[`[___signature__]`](IProtocol.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

`IProtocol.[___signature__]`

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](IChainInfo.md)

The chain information

#### Inherited from

[`IProtocol`](IProtocol.md).[`chainInfo`](IProtocol.md#chaininfo)

***

### name

> `readonly` **name**: [`MorphoBlue`](../enumerations/ProtocolName.md#morphoblue)

The name of the protocol

#### Overrides

[`IProtocol`](IProtocol.md).[`name`](IProtocol.md#name)

## Methods

### equals()

> **equals**(`protocol`): `boolean`

Compare if the passed protocol is equal to the current protocol

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `protocol` | [`IProtocol`](IProtocol.md) | The protocol to compare |

#### Returns

`boolean`

true if the protocols are equal

Equality is determined by the name and chain information

#### Inherited from

[`IProtocol`](IProtocol.md).[`equals`](IProtocol.md#equals)
