[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Protocol

# Abstract Class: Protocol

Protocol

## See

IProtocol

## Extended by

- [`AaveV3Protocol`](AaveV3Protocol.md)
- [`MakerProtocol`](MakerProtocol.md)
- [`MorphoProtocol`](MorphoProtocol.md)
- [`SparkProtocol`](SparkProtocol.md)

## Implements

- [`IProtocol`](../interfaces/IProtocol.md)
- [`IPrintable`](../interfaces/IPrintable.md)

## Constructors

### Constructor

> `protected` **new Protocol**(`params`): `Protocol`

SEALED CONSTRUCTOR

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ProtocolParameters`](../type-aliases/ProtocolParameters.md) |

#### Returns

`Protocol`

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

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

> `abstract` `readonly` **name**: [`ProtocolName`](../enumerations/ProtocolName.md)

ATTRIBUTES

#### Implementation of

[`IProtocol`](../interfaces/IProtocol.md).[`name`](../interfaces/IProtocol.md#name)

## Methods

### equals()

> **equals**(`protocol`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `protocol` | `Protocol` |

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

[`IPrintable`](../interfaces/IPrintable.md).[`toString`](../interfaces/IPrintable.md#tostring)
