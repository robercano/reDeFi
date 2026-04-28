[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / UsersManager

# Class: UsersManager

IUsersManager
Allows to retrieve a user by their wallet and network

## Extends

- `IRPCClient`

## Implements

- [`IUsersManager`](../interfaces/IUsersManager.md)

## Constructors

### Constructor

> **new UsersManager**(`params`): `UsersManager`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `rpcClient`: `TRPCClient`; \} |
| `params.rpcClient` | `TRPCClient` |

#### Returns

`UsersManager`

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

### getUserClient()

> **getUserClient**(`params`): `Promise`\<[`UserClient`](UserClient.md)\>

getUserClient
Retrieves a user by their wallet and network

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `chainInfo`: [`ChainInfo`](ChainInfo.md); `walletAddress`: [`Address`](Address.md); \} | - |
| `params.chainInfo` | [`ChainInfo`](ChainInfo.md) | The chain to retrieve the user for |
| `params.walletAddress` | [`Address`](Address.md) | The wallet to retrieve the user for |

#### Returns

`Promise`\<[`UserClient`](UserClient.md)\>

The user for the given wallet and network

#### Implementation of

[`IUsersManager`](../interfaces/IUsersManager.md).[`getUserClient`](../interfaces/IUsersManager.md#getuserclient)
