[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IChainInfo

# Interface: IChainInfo

## Name

IChainInfo

## Description

Information used to identify a blockchain network

## Extends

- [`IChainInfoData`](../type-aliases/IChainInfoData.md).[`IPrintable`](IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### chainId

> `readonly` **chainId**: [`ChainId`](../type-aliases/ChainId.md)

The chain ID of the network

#### Overrides

`IChainInfoData.chainId`

***

### name

> `readonly` **name**: `string`

The name of the network

#### Overrides

`IChainInfoData.name`

## Methods

### equals()

> **equals**(`chainInfo`): `boolean`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chainInfo` | [`IChainInfoData`](../type-aliases/IChainInfoData.md) | The chain info to compare |

#### Returns

`boolean`

true if the chain infos are equal

Equality is determined by the chain ID

#### Name

equals

#### Description

Checks if two chain infos are equal

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

#### Inherited from

[`IPrintable`](IPrintable.md).[`toString`](IPrintable.md#tostring)
