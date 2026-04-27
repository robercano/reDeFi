[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoProtocol

# Class: MorphoProtocol

MorphoProtocol

## See

IMorphoProtocol

## Extends

- [`Protocol`](../../../../client/src/classes/Protocol.md)

## Implements

- [`IMorphoProtocol`](../interfaces/IMorphoProtocol.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMorphoProtocol`](../interfaces/IMorphoProtocol.md).[`[___signature__]`](../interfaces/IMorphoProtocol.md#___signature__-1)

#### Inherited from

[`Protocol`](../../../../client/src/classes/Protocol.md).[`[___signature__]`](../../../../client/src/classes/Protocol.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IMorphoProtocol.[___signature__]`

#### Inherited from

`Protocol.[___signature__]`

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain information

#### Implementation of

[`IMorphoProtocol`](../interfaces/IMorphoProtocol.md).[`chainInfo`](../interfaces/IMorphoProtocol.md#chaininfo)

#### Inherited from

[`Protocol`](../../../../client/src/classes/Protocol.md).[`chainInfo`](../../../../client/src/classes/Protocol.md#chaininfo)

***

### name

> `readonly` **name**: [`MorphoBlue`](../../../../client/src/enumerations/ProtocolName.md#morphoblue) = `ProtocolName.MorphoBlue`

ATTRIBUTES

#### Implementation of

[`IMorphoProtocol`](../interfaces/IMorphoProtocol.md).[`name`](../interfaces/IMorphoProtocol.md#name)

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

[`IMorphoProtocol`](../interfaces/IMorphoProtocol.md).[`equals`](../interfaces/IMorphoProtocol.md#equals)

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

> `static` **createFrom**(`params`): `MorphoProtocol`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MorphoProtocolParameters`](../type-aliases/MorphoProtocolParameters.md) |

#### Returns

`MorphoProtocol`
