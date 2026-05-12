[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ChainInfo

# Class: ChainInfo

ChainInfo

## See

IChainInfo

## Implements

- [`IChainInfo`](../interfaces/IChainInfo.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

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

equals
Checks if two chain infos are equal

#### Parameters

##### chainInfo

`ChainInfo`

The chain info to compare

#### Returns

`boolean`

true if the chain infos are equal

Equality is determined by the chain ID

#### Implementation of

[`IChainInfo`](../interfaces/IChainInfo.md).[`equals`](../interfaces/IChainInfo.md#equals)

***

### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Implementation of

[`IChainInfo`](../interfaces/IChainInfo.md).[`toString`](../interfaces/IChainInfo.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `ChainInfo`

FACTORY METHODS

#### Parameters

##### params

[`ChainInfoParameters`](../type-aliases/ChainInfoParameters.md)

#### Returns

`ChainInfo`
