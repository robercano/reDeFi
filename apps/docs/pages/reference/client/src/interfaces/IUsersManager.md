[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IUsersManager

# Interface: IUsersManager

IUsersManager

## Description

Allows to retrieve a user by their wallet and network

## Methods

### getUserClient()

> **getUserClient**(`params`): `Promise`\<[`IUserClient`](IUserClient.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`ChainInfo`](../classes/ChainInfo.md); `walletAddress`: [`Address`](../classes/Address.md); \} |
| `params.chainInfo` | [`ChainInfo`](../classes/ChainInfo.md) |
| `params.walletAddress` | [`Address`](../classes/Address.md) |

#### Returns

`Promise`\<[`IUserClient`](IUserClient.md)\>

The user for the given wallet and network

#### Method

getUserClient

#### Description

Retrieves a user by their wallet and network
