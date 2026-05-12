[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ChainsManagerClient

# Class: ChainsManagerClient

ChainsManagerClient
Implementation of the IChainsManager interface for the SDK Client

## Extends

- `IRPCClient`

## Implements

- [`IChainsManagerClient`](../interfaces/IChainsManagerClient.md)

## Constructors

### Constructor

> **new ChainsManagerClient**(`params`): `ChainsManagerClient`

#### Parameters

##### params

###### rpcClient

`any`

#### Returns

`ChainsManagerClient`

#### Overrides

`IRPCClient.constructor`

## Methods

### getChain()

> **getChain**(`params`): `Promise`\<[`Chain`](Chain.md)\>

getChain
Retrieves a chain by its chain info

#### Parameters

##### params

###### chainInfo

[`IChainInfoData`](../type-aliases/IChainInfoData.md)

The info associated with the chain to retrieve

#### Returns

`Promise`\<[`Chain`](Chain.md)\>

The chain for the given chain info

#### Implementation of

[`IChainsManagerClient`](../interfaces/IChainsManagerClient.md).[`getChain`](../interfaces/IChainsManagerClient.md#getchain)

***

### getChainById()

> **getChainById**(`params`): `Promise`\<[`Chain`](Chain.md)\>

getChainById
Retrieves a network by its chain ID

#### Parameters

##### params

###### chainId

`number`

The chain ID of the network to retrieve

#### Returns

`Promise`\<[`Chain`](Chain.md)\>

The network with the given chain ID

#### Implementation of

[`IChainsManagerClient`](../interfaces/IChainsManagerClient.md).[`getChainById`](../interfaces/IChainsManagerClient.md#getchainbyid)

***

### getSupportedChains()

> **getSupportedChains**(): `Promise`\<[`ChainInfo`](ChainInfo.md)[]\>

getSupportedChains
Retrieves the list of supported chains

#### Returns

`Promise`\<[`ChainInfo`](ChainInfo.md)[]\>

The list of supported chains

#### Implementation of

[`IChainsManagerClient`](../interfaces/IChainsManagerClient.md).[`getSupportedChains`](../interfaces/IChainsManagerClient.md#getsupportedchains)
