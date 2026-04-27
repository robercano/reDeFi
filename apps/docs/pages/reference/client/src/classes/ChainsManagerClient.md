[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ChainsManagerClient

# Class: ChainsManagerClient

## Name

ChainsManagerClient

## Description

Implementation of the IChainsManager interface for the SDK Client

## Extends

- `IRPCClient`

## Implements

- [`IChainsManagerClient`](../interfaces/IChainsManagerClient.md)

## Constructors

### Constructor

> **new ChainsManagerClient**(`params`): `ChainsManagerClient`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `rpcClient`: `TRPCClient`; \} |
| `params.rpcClient` | `TRPCClient` |

#### Returns

`ChainsManagerClient`

#### Overrides

`IRPCClient.constructor`

## Accessors

### rpcClient

#### Get Signature

> **get** `protected` **rpcClient**(): `TRPCClient`

##### Returns

`TRPCClient`

#### Inherited from

`IRPCClient.rpcClient`

## Methods

### getChain()

> **getChain**(`params`): `Promise`\<[`Chain`](Chain.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`IChainInfoData`](../type-aliases/IChainInfoData.md); \} |
| `params.chainInfo` | [`IChainInfoData`](../type-aliases/IChainInfoData.md) |

#### Returns

`Promise`\<[`Chain`](Chain.md)\>

The chain for the given chain info

#### Method

getChain

#### Description

Retrieves a chain by its chain info

#### Implementation of

[`IChainsManagerClient`](../interfaces/IChainsManagerClient.md).[`getChain`](../interfaces/IChainsManagerClient.md#getchain)

***

### getChainById()

> **getChainById**(`params`): `Promise`\<[`Chain`](Chain.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainId`: `number`; \} |
| `params.chainId` | `number` |

#### Returns

`Promise`\<[`Chain`](Chain.md)\>

The network with the given chain ID

#### Method

getChainById

#### Description

Retrieves a network by its chain ID

#### Implementation of

[`IChainsManagerClient`](../interfaces/IChainsManagerClient.md).[`getChainById`](../interfaces/IChainsManagerClient.md#getchainbyid)

***

### getSupportedChains()

> **getSupportedChains**(): `Promise`\<[`ChainInfo`](ChainInfo.md)[]\>

#### Returns

`Promise`\<[`ChainInfo`](ChainInfo.md)[]\>

The list of supported chains

#### Method

getSupportedChains

#### Description

Retrieves the list of supported chains

#### Implementation of

[`IChainsManagerClient`](../interfaces/IChainsManagerClient.md).[`getSupportedChains`](../interfaces/IChainsManagerClient.md#getsupportedchains)
