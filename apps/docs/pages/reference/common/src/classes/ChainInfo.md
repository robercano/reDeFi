[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / ChainInfo

# Class: ChainInfo

## Name

ChainInfo

## See

IChainInfo

## Implements

- [`IChainInfo`](../interfaces/IChainInfo.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IChainInfo`](../interfaces/IChainInfo.md).[`[___signature__]`](../interfaces/IChainInfo.md#___signature__)

***

### chainId

> `readonly` **chainId**: [`ChainId`](../type-aliases/ChainId.md)

ATTRIBUTES

#### Implementation of

[`IChainInfo`](../interfaces/IChainInfo.md).[`chainId`](../interfaces/IChainInfo.md#chainid)

***

### name

> `readonly` **name**: `string`

The name of the network

#### Implementation of

[`IChainInfo`](../interfaces/IChainInfo.md).[`name`](../interfaces/IChainInfo.md#name)

## Methods

### equals()

> **equals**(`chainInfo`): `boolean`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chainInfo` | `ChainInfo` | The chain info to compare |

#### Returns

`boolean`

true if the chain infos are equal

Equality is determined by the chain ID

#### Name

equals

#### Description

Checks if two chain infos are equal

#### Implementation of

[`IChainInfo`](../interfaces/IChainInfo.md).[`equals`](../interfaces/IChainInfo.md#equals)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Name

toString

#### Description

Returns a string representation of the object

#### Implementation of

[`IChainInfo`](../interfaces/IChainInfo.md).[`toString`](../interfaces/IChainInfo.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `ChainInfo`

FACTORY METHODS

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ChainInfoParameters`](../type-aliases/ChainInfoParameters.md) |

#### Returns

`ChainInfo`
