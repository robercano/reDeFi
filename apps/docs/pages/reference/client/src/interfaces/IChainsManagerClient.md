[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IChainsManagerClient

# Interface: IChainsManagerClient

IChainsManagerClient

## Description

Interface for the ChainsManager client implementation. Allows to retrieve information for
            a Chain given its ChainInfo. It also supports to lookup a chain by its name or chain ID

## Methods

### getChain()

> **getChain**(`params`): `Promise`\<[`Chain`](../classes/Chain.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`ChainInfo`](../classes/ChainInfo.md); \} |
| `params.chainInfo` | [`ChainInfo`](../classes/ChainInfo.md) |

#### Returns

`Promise`\<[`Chain`](../classes/Chain.md)\>

The chain for the given chain info

#### Method

getChain

#### Description

Retrieves a chain by its chain info

***

### getChainById()

> **getChainById**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Chain`](../classes/Chain.md)\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainId`: `number`; \} |
| `params.chainId` | `number` |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Chain`](../classes/Chain.md)\>\>

The network with the given chain ID

#### Method

getChainById

#### Description

Retrieves a network by its chain ID

***

### getSupportedChains()

> **getSupportedChains**(): `Promise`\<[`ChainInfo`](../classes/ChainInfo.md)[]\>

#### Returns

`Promise`\<[`ChainInfo`](../classes/ChainInfo.md)[]\>

The list of supported chains

#### Method

getSupportedChains

#### Description

Retrieves the list of supported chains
