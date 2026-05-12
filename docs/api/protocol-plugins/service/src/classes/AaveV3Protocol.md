[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3Protocol

# Class: AaveV3Protocol

AaveV3Protocol

## See

IAaveV3ProtocolData

## Extends

- [`Protocol`](../../../../client/src/classes/Protocol.md)

## Implements

- [`IAaveV3Protocol`](../interfaces/IAaveV3Protocol.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IAaveV3Protocol`](../interfaces/IAaveV3Protocol.md).[`[___signature__]`](../interfaces/IAaveV3Protocol.md#___signature__-1)

#### Inherited from

[`Protocol`](../../../../client/src/classes/Protocol.md).[`[___signature__]`](../../../../client/src/classes/Protocol.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IAaveV3Protocol.[___signature__]`

#### Inherited from

`Protocol.[___signature__]`

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain information

#### Implementation of

[`IAaveV3Protocol`](../interfaces/IAaveV3Protocol.md).[`chainInfo`](../interfaces/IAaveV3Protocol.md#chaininfo)

#### Inherited from

[`Protocol`](../../../../client/src/classes/Protocol.md).[`chainInfo`](../../../../client/src/classes/Protocol.md#chaininfo)

***

### name

> `readonly` **name**: `AaveV3` = `ProtocolName.AaveV3`

ATTRIBUTES

#### Implementation of

[`IAaveV3Protocol`](../interfaces/IAaveV3Protocol.md).[`name`](../interfaces/IAaveV3Protocol.md#name)

#### Overrides

[`Protocol`](../../../../client/src/classes/Protocol.md).[`name`](../../../../client/src/classes/Protocol.md#name)

## Methods

### equals()

> **equals**(`protocol`): `boolean`

#### Parameters

##### protocol

[`Protocol`](../../../../client/src/classes/Protocol.md)

#### Returns

`boolean`

#### See

IProtocol.equals

#### Implementation of

[`IAaveV3Protocol`](../interfaces/IAaveV3Protocol.md).[`equals`](../interfaces/IAaveV3Protocol.md#equals)

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

> `static` **createFrom**(`params`): `AaveV3Protocol`

FACTORY

#### Parameters

##### params

[`AaveV3ProtocolParameters`](../type-aliases/AaveV3ProtocolParameters.md)

#### Returns

`AaveV3Protocol`
