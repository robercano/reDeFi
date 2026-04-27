[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / MorphoProtocol

# Class: MorphoProtocol

MorphoProtocol

## See

IMorphoProtocol

## Extends

- [`Protocol`](Protocol.md)

## Implements

- [`IMorphoProtocol`](../interfaces/IMorphoProtocol.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMorphoProtocol`](../interfaces/IMorphoProtocol.md).[`[___signature__]`](../interfaces/IMorphoProtocol.md#___signature__-1)

#### Inherited from

[`Protocol`](Protocol.md).[`[___signature__]`](Protocol.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMorphoProtocol.[___signature__]`

#### Inherited from

`Protocol.[___signature__]`

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../interfaces/IChainInfo.md)

The chain information

#### Implementation of

[`IMorphoProtocol`](../interfaces/IMorphoProtocol.md).[`chainInfo`](../interfaces/IMorphoProtocol.md#chaininfo)

#### Inherited from

[`Protocol`](Protocol.md).[`chainInfo`](Protocol.md#chaininfo)

***

### name

> `readonly` **name**: [`MorphoBlue`](../enumerations/ProtocolName.md#morphoblue) = `ProtocolName.MorphoBlue`

ATTRIBUTES

#### Implementation of

[`IMorphoProtocol`](../interfaces/IMorphoProtocol.md).[`name`](../interfaces/IMorphoProtocol.md#name)

#### Overrides

[`Protocol`](Protocol.md).[`name`](Protocol.md#name)

## Methods

### equals()

> **equals**(`protocol`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `protocol` | [`Protocol`](Protocol.md) |

#### Returns

`boolean`

#### See

IProtocol.equals

#### Implementation of

[`IMorphoProtocol`](../interfaces/IMorphoProtocol.md).[`equals`](../interfaces/IMorphoProtocol.md#equals)

#### Inherited from

[`Protocol`](Protocol.md).[`equals`](Protocol.md#equals)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Inherited from

[`Protocol`](Protocol.md).[`toString`](Protocol.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `MorphoProtocol`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MorphoProtocolParameters`](../../../protocol-plugins/service/src/type-aliases/MorphoProtocolParameters.md) |

#### Returns

`MorphoProtocol`
