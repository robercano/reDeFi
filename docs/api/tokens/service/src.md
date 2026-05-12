[**redefi**](../../README.md)

***

[redefi](../../README.md) / tokens/service/src

# tokens/service/src

## Classes

### DatabaseTokensProvider

#### Extends

- `ManagerProviderBase`\<[`TokensProviderType`](../../common/src/README.md#tokensprovidertype)\>

#### Implements

- `ITokensProvider`

#### Constructors

##### Constructor

> **new DatabaseTokensProvider**(`params`): [`DatabaseTokensProvider`](#databasetokensprovider)

###### Parameters

###### params

###### blockchainClientProvider

`IBlockchainManager`

###### configProvider

`IConfigurationProvider`

###### contractsProvider

`IContractsProvider`

###### Returns

[`DatabaseTokensProvider`](#databasetokensprovider)

###### Overrides

`ManagerProviderBase<TokensProviderType>.constructor`

#### Properties

##### configProvider

> `readonly` **configProvider**: `IConfigurationProvider`

###### See

IManagerProvider.configProvider

###### Implementation of

`ITokensProvider.configProvider`

###### Inherited from

`ManagerProviderBase.configProvider`

##### getSupportedChainIds

> **getSupportedChainIds**: () => [`ChainId`](../../client/src.md#chainid-2)[]

getSupportedChainIds
Retrieves the list of supported chain IDs

###### Returns

[`ChainId`](../../client/src.md#chainid-2)[]

The list of supported chain IDs

###### See

IManagerProvider.getSupportedChainIds

###### Implementation of

`ITokensProvider.getSupportedChainIds`

###### Overrides

`ManagerProviderBase.getSupportedChainIds`

##### getTokenBalanceByAddress

> **getTokenBalanceByAddress**: (`params`) => `Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

getTokenBalanceByAddress
Retrieves the token balance for a given wallet address and token address

###### Parameters

###### params

###### address

[`IAddress`](../../client/src.md#iaddress)

The address of the token to retrieve the balance for

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

The chain information of the token to retrieve

###### walletAddress

[`IAddress`](../../client/src.md#iaddress)

The wallet address to retrieve the token balance for

###### Returns

`Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

The token balance as a string

###### Implementation of

`ITokensProvider.getTokenBalanceByAddress`

##### getTokenBalanceBySymbol

> **getTokenBalanceBySymbol**: (`params`) => `Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

getTokenBalanceBySymbol
Retrieves the token balance for a given wallet address and token symbol

###### Parameters

###### params

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

The chain information of the token to retrieve

###### symbol

`string`

The symbol of the token to retrieve the balance for

###### walletAddress

[`IAddress`](../../client/src.md#iaddress)

The wallet address to retrieve the token balance for

###### Returns

`Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

The token balance as a string

###### Implementation of

`ITokensProvider.getTokenBalanceBySymbol`

##### getTokenByAddress

> **getTokenByAddress**: (`params`) => `Promise`\<[`IToken`](../../client/src.md#itoken)\>

getTokenByAddress
Retrieves a token by its address

###### Parameters

###### params

###### address

[`IAddress`](../../client/src.md#iaddress)

The address of the token to retrieve

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

The chain information of the token to retrieve

###### Returns

`Promise`\<[`IToken`](../../client/src.md#itoken)\>

The token with the given address

###### Implementation of

`ITokensProvider.getTokenByAddress`

##### getTokenByName

> **getTokenByName**: (`params`) => `Promise`\<[`IToken`](../../client/src.md#itoken)\>

getTokenByName
Retrieves a token by its name

###### Parameters

###### params

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

The chain information of the token to retrieve

###### name

`string`

The name of the token to retrieve

###### Returns

`Promise`\<[`IToken`](../../client/src.md#itoken)\>

The token with the given name

###### Implementation of

`ITokensProvider.getTokenByName`

##### getTokenBySymbol

> **getTokenBySymbol**: (`params`) => `Promise`\<[`IToken`](../../client/src.md#itoken)\>

getTokenBySymbol
Retrieves a token by its symbol

###### Parameters

###### params

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

The chain information of the token to retrieve

###### symbol

`string`

The symbol of the token to retrieve

###### Returns

`Promise`\<[`IToken`](../../client/src.md#itoken)\>

The token with the given symbol

###### Implementation of

`ITokensProvider.getTokenBySymbol`

##### getTokenTotalSupply

> **getTokenTotalSupply**: (`params`) => `Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

getTokenTotalSupply
Retrieves the total supply for a given token

###### Parameters

###### params

###### token

[`IToken`](../../client/src.md#itoken)

The token to retrieve the total supply for

###### Returns

`Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

The total supply of the token as an ITokenAmount

###### Implementation of

`ITokensProvider.getTokenTotalSupply`

##### type

> `readonly` **type**: [`TokensProviderType`](../../common/src/README.md#tokensprovidertype)

###### See

IManagerProvider.type

###### Implementation of

`ITokensProvider.type`

###### Inherited from

`ManagerProviderBase.type`

***

### TokensManager

TokensManager
Implementation of the ITokensManager interface. It allows to retrieve information for a Token

#### Extends

- `ManagerWithFallbackProvidersBase`\<[`TokensProviderType`](../../common/src/README.md#tokensprovidertype), `ITokensProvider`\>

#### Implements

- `ITokensManager`

#### Constructors

##### Constructor

> **new TokensManager**(`params`): [`TokensManager`](#tokensmanager)

###### Parameters

###### params

###### cacheOrchestrator?

[`DataOrchestrator`](../../client/src.md#dataorchestrator)

###### cacheService?

`ICacheService`

###### cacheTTLSeconds?

`number`

###### providers

`ITokensProvider`[]

###### Returns

[`TokensManager`](#tokensmanager)

###### Overrides

`ManagerWithFallbackProvidersBase<TokensProviderType, ITokensProvider>.constructor`

#### Properties

##### cacheOrchestrator?

> `optional` **cacheOrchestrator?**: [`DataOrchestrator`](../../client/src.md#dataorchestrator)

###### Description

Optional DataOrchestrator instance used by the

###### Cache

decorator to handle
             layered caching execution and volatility policies.

###### Inherited from

`ManagerWithFallbackProvidersBase.cacheOrchestrator`

#### Methods

##### getTokenBalanceByAddress()

> **getTokenBalanceByAddress**(`params`): `Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

getTokenBalanceByAddress
Retrieves the balance of a token for a specific address using the token's contract address.

###### Parameters

###### params

###### address

[`IAddress`](../../client/src.md#iaddress)

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

###### walletAddress

[`IAddress`](../../client/src.md#iaddress)

###### Returns

`Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

The token balance.

###### Implementation of

`ITokensManager.getTokenBalanceByAddress`

##### getTokenBalanceBySymbol()

> **getTokenBalanceBySymbol**(`params`): `Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

getTokenBalanceBySymbol
Retrieves the balance of a token for a specific address using the token's symbol.

###### Parameters

###### params

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

###### symbol

`string`

###### walletAddress

[`IAddress`](../../client/src.md#iaddress)

###### Returns

`Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

The token balance.

###### Implementation of

`ITokensManager.getTokenBalanceBySymbol`

##### getTokenByAddress()

> **getTokenByAddress**(`params`): `Promise`\<[`IToken`](../../client/src.md#itoken)\>

getTokenByAddress
Retrieves a token by its contract address.

###### Parameters

###### params

###### address

[`IAddress`](../../client/src.md#iaddress)

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

###### Returns

`Promise`\<[`IToken`](../../client/src.md#itoken)\>

The token information.

###### Implementation of

`ITokensManager.getTokenByAddress`

##### getTokenByName()

> **getTokenByName**(`params`): `Promise`\<[`IToken`](../../client/src.md#itoken)\>

getTokenByName
Retrieves a token by its full name.

###### Parameters

###### params

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

###### name

`string`

###### Returns

`Promise`\<[`IToken`](../../client/src.md#itoken)\>

The token information.

###### Implementation of

`ITokensManager.getTokenByName`

##### getTokenBySymbol()

> **getTokenBySymbol**(`params`): `Promise`\<[`IToken`](../../client/src.md#itoken)\>

getTokenBySymbol
Retrieves a token by its symbol.

###### Parameters

###### params

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

###### symbol

`string`

###### Returns

`Promise`\<[`IToken`](../../client/src.md#itoken)\>

The token information.

###### Implementation of

`ITokensManager.getTokenBySymbol`

##### getTokenTotalSupply()

> **getTokenTotalSupply**(`params`): `Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

getTokenTotalSupply
Retrieves the total supply of a specific token.

###### Parameters

###### params

###### token

[`IToken`](../../client/src.md#itoken)

###### Returns

`Promise`\<[`ITokenAmount`](../../client/src.md#itokenamount)\>

The total supply of the token.

###### Implementation of

`ITokensManager.getTokenTotalSupply`

***

### TokensManagerFactory

TokensManagerFactory
Factory class for the TokensManager. Takes care of generating the manager config and creates an instance

#### Constructors

##### Constructor

> **new TokensManagerFactory**(): [`TokensManagerFactory`](#tokensmanagerfactory)

###### Returns

[`TokensManagerFactory`](#tokensmanagerfactory)

#### Properties

##### providers

> `static` **providers**: `ITokensProvider`[] = `[]`

providersConfig
Configuration for the TokensManager. It includes the list of available providers

#### Methods

##### newTokensManager()

> `static` **newTokensManager**(`params`): `ITokensManager`

newTokensManager

###### Parameters

###### params

###### blockchainClientProvider

`IBlockchainManager`

The blockchain client provider for blockchain interactions

###### cacheService?

`ICacheService`

###### cacheTTLSeconds?

`number`

###### configProvider

`IConfigurationProvider`

The configuration provider used to get environment variables

###### contractsProvider

`IContractsProvider`

###### Returns

`ITokensManager`

A new instance of the TokensManager
