[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [tokens/service/src](../README.md) / DatabaseTokensProvider

# Class: DatabaseTokensProvider

## Extends

- `ManagerProviderBase`\<[`TokensProviderType`](../../../../common/src/enumerations/TokensProviderType.md)\>

## Implements

- `ITokensProvider`

## Constructors

### Constructor

> **new DatabaseTokensProvider**(`params`): `DatabaseTokensProvider`

#### Parameters

##### params

###### blockchainClientProvider

`IBlockchainManager`

###### configProvider

`IConfigurationProvider`

###### contractsProvider

`IContractsProvider`

#### Returns

`DatabaseTokensProvider`

#### Overrides

`ManagerProviderBase<TokensProviderType>.constructor`

## Properties

### configProvider

> `readonly` **configProvider**: `IConfigurationProvider`

#### See

IManagerProvider.configProvider

#### Implementation of

`ITokensProvider.configProvider`

#### Inherited from

`ManagerProviderBase.configProvider`

***

### getSupportedChainIds

> **getSupportedChainIds**: () => [`ChainId`](../../../../client/src/type-aliases/ChainId.md)[]

getSupportedChainIds
Retrieves the list of supported chain IDs

#### Returns

[`ChainId`](../../../../client/src/type-aliases/ChainId.md)[]

The list of supported chain IDs

#### See

IManagerProvider.getSupportedChainIds

#### Implementation of

`ITokensProvider.getSupportedChainIds`

#### Overrides

`ManagerProviderBase.getSupportedChainIds`

***

### getTokenBalanceByAddress

> **getTokenBalanceByAddress**: (`params`) => `Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

getTokenBalanceByAddress
Retrieves the token balance for a given wallet address and token address

#### Parameters

##### params

###### address

[`IAddress`](../../../../client/src/interfaces/IAddress.md)

The address of the token to retrieve the balance for

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain information of the token to retrieve

###### walletAddress

[`IAddress`](../../../../client/src/interfaces/IAddress.md)

The wallet address to retrieve the token balance for

#### Returns

`Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

The token balance as a string

#### Implementation of

`ITokensProvider.getTokenBalanceByAddress`

***

### getTokenBalanceBySymbol

> **getTokenBalanceBySymbol**: (`params`) => `Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

getTokenBalanceBySymbol
Retrieves the token balance for a given wallet address and token symbol

#### Parameters

##### params

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain information of the token to retrieve

###### symbol

`string`

The symbol of the token to retrieve the balance for

###### walletAddress

[`IAddress`](../../../../client/src/interfaces/IAddress.md)

The wallet address to retrieve the token balance for

#### Returns

`Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

The token balance as a string

#### Implementation of

`ITokensProvider.getTokenBalanceBySymbol`

***

### getTokenByAddress

> **getTokenByAddress**: (`params`) => `Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

getTokenByAddress
Retrieves a token by its address

#### Parameters

##### params

###### address

[`IAddress`](../../../../client/src/interfaces/IAddress.md)

The address of the token to retrieve

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain information of the token to retrieve

#### Returns

`Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

The token with the given address

#### Implementation of

`ITokensProvider.getTokenByAddress`

***

### getTokenByName

> **getTokenByName**: (`params`) => `Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

getTokenByName
Retrieves a token by its name

#### Parameters

##### params

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain information of the token to retrieve

###### name

`string`

The name of the token to retrieve

#### Returns

`Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

The token with the given name

#### Implementation of

`ITokensProvider.getTokenByName`

***

### getTokenBySymbol

> **getTokenBySymbol**: (`params`) => `Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

getTokenBySymbol
Retrieves a token by its symbol

#### Parameters

##### params

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain information of the token to retrieve

###### symbol

`string`

The symbol of the token to retrieve

#### Returns

`Promise`\<[`IToken`](../../../../client/src/interfaces/IToken.md)\>

The token with the given symbol

#### Implementation of

`ITokensProvider.getTokenBySymbol`

***

### getTokenTotalSupply

> **getTokenTotalSupply**: (`params`) => `Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

getTokenTotalSupply
Retrieves the total supply for a given token

#### Parameters

##### params

###### token

[`IToken`](../../../../client/src/interfaces/IToken.md)

The token to retrieve the total supply for

#### Returns

`Promise`\<[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)\>

The total supply of the token as an ITokenAmount

#### Implementation of

`ITokensProvider.getTokenTotalSupply`

***

### type

> `readonly` **type**: [`TokensProviderType`](../../../../common/src/enumerations/TokensProviderType.md)

#### See

IManagerProvider.type

#### Implementation of

`ITokensProvider.type`

#### Inherited from

`ManagerProviderBase.type`
