[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IChainsManagerClient

# Interface: IChainsManagerClient

IChainsManagerClient
Interface for the ChainsManager client implementation. Allows to retrieve information for
            a Chain given its ChainInfo. It also supports to lookup a chain by its name or chain ID

## Methods

### getChain()

> **getChain**(`params`): `Promise`\<[`Chain`](../classes/Chain.md)\>

getChain
Retrieves a chain by its chain info

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `chainInfo`: [`ChainInfo`](../classes/ChainInfo.md); \} | - |
| `params.chainInfo` | [`ChainInfo`](../classes/ChainInfo.md) | The info associated with the chain to retrieve |

#### Returns

`Promise`\<[`Chain`](../classes/Chain.md)\>

The chain for the given chain info

***

### getChainById()

> **getChainById**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Chain`](../classes/Chain.md)\>\>

getChainById
Retrieves a network by its chain ID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `chainId`: `number`; \} | - |
| `params.chainId` | `number` | The chain ID of the network to retrieve |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Chain`](../classes/Chain.md)\>\>

The network with the given chain ID

***

### getSupportedChains()

> **getSupportedChains**(): `Promise`\<[`ChainInfo`](../classes/ChainInfo.md)[]\>

getSupportedChains
Retrieves the list of supported chains

#### Returns

`Promise`\<[`ChainInfo`](../classes/ChainInfo.md)[]\>

The list of supported chains
