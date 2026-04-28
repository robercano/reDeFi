[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Chain

# Class: Chain

Chain
Implementation of the IChain interface for the SDK Client

## Implements

- [`IChain`](../interfaces/IChain.md)

## Constructors

### Constructor

> **new Chain**(`params`): `Chain`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`ChainInfo`](ChainInfo.md); `protocolsManager`: [`ProtocolsManagerClient`](ProtocolsManagerClient.md); `tokensManager`: [`TokensManagerClient`](TokensManagerClient.md); \} |
| `params.chainInfo` | [`ChainInfo`](ChainInfo.md) |
| `params.protocolsManager` | [`ProtocolsManagerClient`](ProtocolsManagerClient.md) |
| `params.tokensManager` | [`TokensManagerClient`](TokensManagerClient.md) |

#### Returns

`Chain`

## Properties

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../interfaces/IChainInfo.md)

The information of the chain

#### Implementation of

[`IChain`](../interfaces/IChain.md).[`chainInfo`](../interfaces/IChain.md#chaininfo)

***

### protocols

> `readonly` **protocols**: [`IProtocolsManagerClient`](../interfaces/IProtocolsManagerClient.md)

The protocols manager client for the chain, allows to retrieve protocols on the chain

#### Implementation of

[`IChain`](../interfaces/IChain.md).[`protocols`](../interfaces/IChain.md#protocols)

***

### tokens

> `readonly` **tokens**: [`ITokensManagerClient`](../interfaces/ITokensManagerClient.md)

The tokens manager client for the chain, allows to retrieve tokens on the chain

#### Implementation of

[`IChain`](../interfaces/IChain.md).[`tokens`](../interfaces/IChain.md#tokens)

## Methods

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`
