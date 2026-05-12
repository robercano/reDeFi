[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IUsersManager

# Interface: IUsersManager

IUsersManager
Allows to retrieve a user by their wallet and network

## Methods

### getUserClient()

> **getUserClient**(`params`): `Promise`\<[`IUserClient`](IUserClient.md)\>

getUserClient
Retrieves a user by their wallet and network

#### Parameters

##### params

###### chainInfo

[`ChainInfo`](../classes/ChainInfo.md)

The chain to retrieve the user for

###### walletAddress

[`Address`](../classes/Address.md)

The wallet to retrieve the user for

#### Returns

`Promise`\<[`IUserClient`](IUserClient.md)\>

The user for the given wallet and network
