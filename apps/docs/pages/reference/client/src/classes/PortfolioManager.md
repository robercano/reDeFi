[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / PortfolioManager

# Class: PortfolioManager

IPortfolioManager

## Description

Allows to retrieve a wallet's positions by their wallet and network. This is meant to be used in isolation
             without having to retrieve a User or a Network

## Extends

- `IRPCClient`

## Implements

- [`IPortfolioManager`](../interfaces/IPortfolioManager.md)

## Constructors

### Constructor

> **new PortfolioManager**(`params`): `PortfolioManager`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `rpcClient`: `any`; \} |
| `params.rpcClient` | `any` |

#### Returns

`PortfolioManager`

#### Overrides

`IRPCClient.constructor`

## Accessors

### rpcClient

#### Get Signature

> **get** `protected` **rpcClient**(): `any`

##### Returns

`any`

#### Inherited from

`IRPCClient.rpcClient`

## Methods

### getPositions()

> **getPositions**(`_params`): `Promise`\<[`Position`](Position.md)[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_params` | \{ `networks`: [`ChainInfo`](ChainInfo.md)[]; `wallet`: [`Wallet`](Wallet.md); \} |
| `_params.networks` | [`ChainInfo`](ChainInfo.md)[] |
| `_params.wallet` | [`Wallet`](Wallet.md) |

#### Returns

`Promise`\<[`Position`](Position.md)[]\>

The list of positions for the given wallet and networks

#### Method

getPositions

#### Description

Retrieves all positions of the given wallet for the given networks. The positions can be filtered by
             their IDs

#### Implementation of

[`IPortfolioManager`](../interfaces/IPortfolioManager.md).[`getPositions`](../interfaces/IPortfolioManager.md#getpositions)

***

### getUserPortfolio()

> **getUserPortfolio**(`params`): `Promise`\<[`IUserPortfolio`](../interfaces/IUserPortfolio.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `user`: [`IUser`](../interfaces/IUser.md); \} |
| `params.user` | [`IUser`](../interfaces/IUser.md) |

#### Returns

`Promise`\<[`IUserPortfolio`](../interfaces/IUserPortfolio.md)\>

#### Method

getUserPortfolio

#### Description

Retrieves all holdings and positions for the user resolving their Fiat balances

#### Implementation of

[`IPortfolioManager`](../interfaces/IPortfolioManager.md).[`getUserPortfolio`](../interfaces/IPortfolioManager.md#getuserportfolio)

***

### getWalletHoldings()

> **getWalletHoldings**(`params`): `Promise`\<[`IHolding`](../interfaces/IHolding.md)[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `user`: [`IUser`](../interfaces/IUser.md); \} |
| `params.user` | [`IUser`](../interfaces/IUser.md) |

#### Returns

`Promise`\<[`IHolding`](../interfaces/IHolding.md)[]\>

#### Method

getWalletHoldings

#### Description

Fetches standard ERC20 wallet holdings

#### Implementation of

[`IPortfolioManager`](../interfaces/IPortfolioManager.md).[`getWalletHoldings`](../interfaces/IPortfolioManager.md#getwalletholdings)
