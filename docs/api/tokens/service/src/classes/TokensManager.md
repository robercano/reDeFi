[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [tokens/service/src](../README.md) / TokensManager

# Class: TokensManager

TokensManager
Implementation of the ITokensManager interface. It allows to retrieve information for a Token

## Extends

- `ManagerWithFallbackProvidersBase`\<[`TokensProviderType`](../../../../common/src/enumerations/TokensProviderType.md), `ITokensProvider`\>

## Implements

- `ITokensManager`

## Constructors

### Constructor

> **new TokensManager**(`params`): `TokensManager`

#### Parameters

##### params

###### cacheOrchestrator?

[`DataOrchestrator`](../../../../client/src/classes/DataOrchestrator.md)

###### cacheService?

`ICacheService`

###### cacheTTLSeconds?

`number`

###### providers

`ITokensProvider`[]

#### Returns

`TokensManager`

#### Overrides

`ManagerWithFallbackProvidersBase<TokensProviderType, ITokensProvider>.constructor`

## Properties

### cacheOrchestrator?

> `optional` **cacheOrchestrator?**: [`DataOrchestrator`](../../../../client/src/classes/DataOrchestrator.md)

#### Description

Optional DataOrchestrator instance used by the

#### Cache

decorator to handle
             layered caching execution and volatility policies.

#### Inherited from

`ManagerWithFallbackProvidersBase.cacheOrchestrator`

## Methods

### getTokenBalanceByAddress()

> **getTokenBalanceByAddress**(`params`): `Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

getTokenBalanceByAddress
Retrieves the balance of a token for a specific address using the token's contract address.

#### Parameters

##### params

###### address

[`IAddress`](../../../../client/src/interfaces/IAddress.md)

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

###### walletAddress

[`IAddress`](../../../../client/src/interfaces/IAddress.md)

#### Returns

`Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

The token balance.

#### Implementation of

`ITokensManager.getTokenBalanceByAddress`

***

### getTokenBalanceBySymbol()

> **getTokenBalanceBySymbol**(`params`): `Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

getTokenBalanceBySymbol
Retrieves the balance of a token for a specific address using the token's symbol.

#### Parameters

##### params

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

###### symbol

`string`

###### walletAddress

[`IAddress`](../../../../client/src/interfaces/IAddress.md)

#### Returns

`Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

The token balance.

#### Implementation of

`ITokensManager.getTokenBalanceBySymbol`

***

### getTokenByAddress()

> **getTokenByAddress**(`params`): `Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

getTokenByAddress
Retrieves a token by its contract address.

#### Parameters

##### params

###### address

[`IAddress`](../../../../client/src/interfaces/IAddress.md)

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

#### Returns

`Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

The token information.

#### Implementation of

`ITokensManager.getTokenByAddress`

***

### getTokenByName()

> **getTokenByName**(`params`): `Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

getTokenByName
Retrieves a token by its full name.

#### Parameters

##### params

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

###### name

`string`

#### Returns

`Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

The token information.

#### Implementation of

`ITokensManager.getTokenByName`

***

### getTokenBySymbol()

> **getTokenBySymbol**(`params`): `Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

getTokenBySymbol
Retrieves a token by its symbol.

#### Parameters

##### params

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

###### symbol

`string`

#### Returns

`Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

The token information.

#### Implementation of

`ITokensManager.getTokenBySymbol`

***

### getTokenTotalSupply()

> **getTokenTotalSupply**(`params`): `Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

getTokenTotalSupply
Retrieves the total supply of a specific token.

#### Parameters

##### params

###### token

[`IToken`](../../../../client/src/interfaces/IToken.md)

#### Returns

`Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

The total supply of the token.

#### Implementation of

`ITokensManager.getTokenTotalSupply`
