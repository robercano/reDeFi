[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / PortfolioManager

# Class: PortfolioManager

IPortfolioManager
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

##### params

###### rpcClient

`any`

#### Returns

`PortfolioManager`

#### Overrides

`IRPCClient.constructor`

## Methods

### getPositions()

> **getPositions**(`_params`): `Promise`\<[`Position`](Position.md)[]\>

getPositions
Retrieves all positions of the given wallet for the given networks. The positions can be filtered by
             their IDs

#### Parameters

##### \_params

###### networks

[`ChainInfo`](ChainInfo.md)[]

###### wallet

[`Wallet`](Wallet.md)

#### Returns

`Promise`\<[`Position`](Position.md)[]\>

The list of positions for the given wallet and networks

#### Implementation of

[`IPortfolioManager`](../interfaces/IPortfolioManager.md).[`getPositions`](../interfaces/IPortfolioManager.md#getpositions)

***

### getUserPortfolio()

> **getUserPortfolio**(`params`): `Promise`\<[`IUserPortfolio`](../interfaces/IUserPortfolio.md)\>

getUserPortfolio
Retrieves all holdings and positions for the user resolving their Fiat balances

#### Parameters

##### params

###### user

[`IUser`](../interfaces/IUser.md)

The user to retrieve the portfolio for

#### Returns

`Promise`\<[`IUserPortfolio`](../interfaces/IUserPortfolio.md)\>

#### Implementation of

[`IPortfolioManager`](../interfaces/IPortfolioManager.md).[`getUserPortfolio`](../interfaces/IPortfolioManager.md#getuserportfolio)

***

### getWalletHoldings()

> **getWalletHoldings**(`params`): `Promise`\<[`IHolding`](../interfaces/IHolding.md)[]\>

getWalletHoldings
Fetches standard ERC20 wallet holdings

#### Parameters

##### params

###### user

[`IUser`](../interfaces/IUser.md)

The user to retrieve the holdings for

#### Returns

`Promise`\<[`IHolding`](../interfaces/IHolding.md)[]\>

#### Implementation of

[`IPortfolioManager`](../interfaces/IPortfolioManager.md).[`getWalletHoldings`](../interfaces/IPortfolioManager.md#getwalletholdings)
