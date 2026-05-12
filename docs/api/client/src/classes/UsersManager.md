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

##### params

###### rpcClient

`any`

#### Returns

`UsersManager`

#### Overrides

`IRPCClient.constructor`

## Methods

### getUserClient()

> **getUserClient**(`params`): `Promise`\<[`UserClient`](UserClient.md)\>

getUserClient
Retrieves a user by their wallet and network

#### Parameters

##### params

###### chainInfo

[`ChainInfo`](ChainInfo.md)

The chain to retrieve the user for

###### walletAddress

[`Address`](Address.md)

The wallet to retrieve the user for

#### Returns

`Promise`\<[`UserClient`](UserClient.md)\>

The user for the given wallet and network

#### Implementation of

[`IUsersManager`](../interfaces/IUsersManager.md).[`getUserClient`](../interfaces/IUsersManager.md#getuserclient)
