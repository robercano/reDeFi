[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IPortfolioManager

# Interface: IPortfolioManager

IPortfolioManager
Allows to retrieve a wallet's positions by their wallet and network. This is meant to be used in isolation
             without having to retrieve a User or a Network

## Methods

### getPositions()

> **getPositions**(`params`): `Promise`\<[`Position`](../classes/Position.md)[]\>

getPositions
Retrieves all positions of the given wallet for the given networks. The positions can be filtered by
             their IDs

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `networks`: [`ChainInfo`](../classes/ChainInfo.md)[]; `wallet`: [`Wallet`](../classes/Wallet.md); \} | - |
| `params.networks` | [`ChainInfo`](../classes/ChainInfo.md)[] | The list of networks to retrieve the positions for |
| `params.wallet` | [`Wallet`](../classes/Wallet.md) | The wallet to retrieve the positions for |

#### Returns

`Promise`\<[`Position`](../classes/Position.md)[]\>

The list of positions for the given wallet and networks

***

### getUserPortfolio()

> **getUserPortfolio**(`params`): `Promise`\<[`IUserPortfolio`](IUserPortfolio.md)\>

getUserPortfolio
Retrieves all holdings and positions for the user resolving their Fiat balances

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `user`: [`IUser`](IUser.md); \} | - |
| `params.user` | [`IUser`](IUser.md) | The user to retrieve the portfolio for |

#### Returns

`Promise`\<[`IUserPortfolio`](IUserPortfolio.md)\>

***

### getWalletHoldings()

> **getWalletHoldings**(`params`): `Promise`\<[`IHolding`](IHolding.md)[]\>

getWalletHoldings
Fetches standard ERC20 wallet holdings

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `user`: [`IUser`](IUser.md); \} | - |
| `params.user` | [`IUser`](IUser.md) | The user to retrieve the holdings for |

#### Returns

`Promise`\<[`IHolding`](IHolding.md)[]\>
