[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkProtocol

# Class: SparkProtocol

SparkProtocol

## See

ISparkProtocol

## Extends

- [`Protocol`](../../../../client/src/classes/Protocol.md)

## Implements

- [`ISparkProtocol`](../interfaces/ISparkProtocol.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ISparkProtocol`](../interfaces/ISparkProtocol.md).[`[___signature__]`](../interfaces/ISparkProtocol.md#___signature__-1)

#### Inherited from

[`Protocol`](../../../../client/src/classes/Protocol.md).[`[___signature__]`](../../../../client/src/classes/Protocol.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ISparkProtocol.[___signature__]`

#### Inherited from

`Protocol.[___signature__]`

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain information

#### Implementation of

[`ISparkProtocol`](../interfaces/ISparkProtocol.md).[`chainInfo`](../interfaces/ISparkProtocol.md#chaininfo)

#### Inherited from

[`Protocol`](../../../../client/src/classes/Protocol.md).[`chainInfo`](../../../../client/src/classes/Protocol.md#chaininfo)

***

### name

> `readonly` **name**: [`Spark`](../../../../client/src/enumerations/ProtocolName.md#spark) = `ProtocolName.Spark`

ATTRIBUTES

#### Implementation of

[`ISparkProtocol`](../interfaces/ISparkProtocol.md).[`name`](../interfaces/ISparkProtocol.md#name)

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

[`ISparkProtocol`](../interfaces/ISparkProtocol.md).[`equals`](../interfaces/ISparkProtocol.md#equals)

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

> `static` **createFrom**(`params`): `SparkProtocol`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SparkProtocolParameters`](../type-aliases/SparkProtocolParameters.md) |

#### Returns

`SparkProtocol`
