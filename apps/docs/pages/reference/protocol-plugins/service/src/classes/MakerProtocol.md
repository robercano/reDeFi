[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerProtocol

# Class: MakerProtocol

MakerProtocol

## See

IMakerProtocolData

## Extends

- [`Protocol`](../../../../client/src/classes/Protocol.md)

## Implements

- [`IMakerProtocol`](../interfaces/IMakerProtocol.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMakerProtocol`](../interfaces/IMakerProtocol.md).[`[___signature__]`](../interfaces/IMakerProtocol.md#___signature__-1)

#### Inherited from

[`Protocol`](../../../../client/src/classes/Protocol.md).[`[___signature__]`](../../../../client/src/classes/Protocol.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IMakerProtocol.[___signature__]`

#### Inherited from

`Protocol.[___signature__]`

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain information

#### Implementation of

[`IMakerProtocol`](../interfaces/IMakerProtocol.md).[`chainInfo`](../interfaces/IMakerProtocol.md#chaininfo)

#### Inherited from

[`Protocol`](../../../../client/src/classes/Protocol.md).[`chainInfo`](../../../../client/src/classes/Protocol.md#chaininfo)

***

### name

> `readonly` **name**: [`Maker`](../../../../client/src/enumerations/ProtocolName.md#maker) = `ProtocolName.Maker`

ATTRIBUTES

#### Implementation of

[`IMakerProtocol`](../interfaces/IMakerProtocol.md).[`name`](../interfaces/IMakerProtocol.md#name)

#### Overrides

[`Protocol`](../../../../client/src/classes/Protocol.md).[`name`](../../../../client/src/classes/Protocol.md#name)

## Methods

### equals()

> **equals**(`protocol`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `protocol` | [`Protocol`](../../../../client/src/classes/Protocol.md) |

#### Returns

`boolean`

#### See

IProtocol.equals

#### Implementation of

[`IMakerProtocol`](../interfaces/IMakerProtocol.md).[`equals`](../interfaces/IMakerProtocol.md#equals)

#### Inherited from

[`Protocol`](../../../../client/src/classes/Protocol.md).[`equals`](../../../../client/src/classes/Protocol.md#equals)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Inherited from

[`Protocol`](../../../../client/src/classes/Protocol.md).[`toString`](../../../../client/src/classes/Protocol.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `MakerProtocol`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MakerProtocolParameters`](../type-aliases/MakerProtocolParameters.md) |

#### Returns

`MakerProtocol`
