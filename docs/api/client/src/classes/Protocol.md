[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Protocol

# Abstract Class: Protocol

Protocol

## See

IProtocol

## Extended by

- [`AaveV3Protocol`](../../../protocol-plugins/service/src/classes/AaveV3Protocol.md)

## Implements

- [`IProtocol`](../interfaces/IProtocol.md)
- [`IPrintable`](../../../common/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

[`IProtocol`](../interfaces/IProtocol.md).[`[___signature__]`](../interfaces/IProtocol.md#___signature__)

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../interfaces/IChainInfo.md)

The chain information

#### Implementation of

[`IProtocol`](../interfaces/IProtocol.md).[`chainInfo`](../interfaces/IProtocol.md#chaininfo)

***

### name

> `abstract` `readonly` **name**: [`ProtocolName`](../../../common/src/enumerations/ProtocolName.md)

ATTRIBUTES

#### Implementation of

[`IProtocol`](../interfaces/IProtocol.md).[`name`](../interfaces/IProtocol.md#name)

## Methods

### equals()

> **equals**(`protocol`): `boolean`

#### Parameters

##### protocol

`Protocol`

#### Returns

`boolean`

#### See

IProtocol.equals

#### Implementation of

[`IProtocol`](../interfaces/IProtocol.md).[`equals`](../interfaces/IProtocol.md#equals)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IPrintable`](../../../common/src/interfaces/IPrintable.md).[`toString`](../../../common/src/interfaces/IPrintable.md#tostring)
