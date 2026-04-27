[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / IAaveV3Protocol

# Interface: IAaveV3Protocol

IAaveV3Protocol

## Description

Identifier of the Aave V3 protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`IProtocol`](../../../../client/src/interfaces/IProtocol.md).[`IAaveV3ProtocolData`](../type-aliases/IAaveV3ProtocolData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Interface signature used to differentiate it from similar interfaces

#### Inherited from

[`IProtocol`](../../../../client/src/interfaces/IProtocol.md).[`[___signature__]`](../../../../client/src/interfaces/IProtocol.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

`IProtocol.[___signature__]`

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain information

#### Inherited from

[`IProtocol`](../../../../client/src/interfaces/IProtocol.md).[`chainInfo`](../../../../client/src/interfaces/IProtocol.md#chaininfo)

***

### name

> `readonly` **name**: [`AaveV3`](../../../../client/src/enumerations/ProtocolName.md#aavev3)

The name of the protocol

#### Overrides

[`IProtocol`](../../../../client/src/interfaces/IProtocol.md).[`name`](../../../../client/src/interfaces/IProtocol.md#name)

## Methods

### equals()

> **equals**(`protocol`): `boolean`

Compare if the passed protocol is equal to the current protocol

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `protocol` | [`IProtocol`](../../../../client/src/interfaces/IProtocol.md) | The protocol to compare |

#### Returns

`boolean`

true if the protocols are equal

Equality is determined by the name and chain information

#### Inherited from

[`IProtocol`](../../../../client/src/interfaces/IProtocol.md).[`equals`](../../../../client/src/interfaces/IProtocol.md#equals)
