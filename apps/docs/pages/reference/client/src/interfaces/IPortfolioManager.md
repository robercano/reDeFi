[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IPortfolioManager

# Interface: IPortfolioManager

IPortfolioManager

## Description

Allows to retrieve a wallet's positions by their wallet and network. This is meant to be used in isolation
             without having to retrieve a User or a Network

## Methods

### getPositions()

> **getPositions**(`params`): `Promise`\<[`Position`](../classes/Position.md)[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `networks`: [`ChainInfo`](../classes/ChainInfo.md)[]; `wallet`: [`Wallet`](../classes/Wallet.md); \} |
| `params.networks` | [`ChainInfo`](../classes/ChainInfo.md)[] |
| `params.wallet` | [`Wallet`](../classes/Wallet.md) |

#### Returns

`Promise`\<[`Position`](../classes/Position.md)[]\>

The list of positions for the given wallet and networks

#### Method

getPositions

#### Description

Retrieves all positions of the given wallet for the given networks. The positions can be filtered by
             their IDs

***

### getUserPortfolio()

> **getUserPortfolio**(`params`): `Promise`\<[`IUserPortfolio`](IUserPortfolio.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `user`: [`IUser`](IUser.md); \} |
| `params.user` | [`IUser`](IUser.md) |

#### Returns

`Promise`\<[`IUserPortfolio`](IUserPortfolio.md)\>

#### Method

getUserPortfolio

#### Description

Retrieves all holdings and positions for the user resolving their Fiat balances

***

### getWalletHoldings()

> **getWalletHoldings**(`params`): `Promise`\<[`IHolding`](IHolding.md)[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `user`: [`IUser`](IUser.md); \} |
| `params.user` | [`IUser`](IUser.md) |

#### Returns

`Promise`\<[`IHolding`](IHolding.md)[]\>

#### Method

getWalletHoldings

#### Description

Fetches standard ERC20 wallet holdings
