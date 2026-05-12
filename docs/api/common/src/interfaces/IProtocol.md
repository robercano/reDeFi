[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IProtocol

# Interface: IProtocol

IProtocol
Information relative to a protocol

This interface is used to add all the methods that the interface supports

## Extends

- [`IProtocolData`](../type-aliases/IProtocolData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](IChainInfo.md)

The chain information

#### Overrides

`IProtocolData.chainInfo`

***

### name

> `readonly` **name**: [`ProtocolName`](../enumerations/ProtocolName.md)

The name of the protocol

#### Overrides

`IProtocolData.name`

## Methods

### equals()

> **equals**(`protocol`): `boolean`

Compare if the passed protocol is equal to the current protocol

#### Parameters

##### protocol

`IProtocol`

The protocol to compare

#### Returns

`boolean`

true if the protocols are equal

Equality is determined by the name and chain information
