[**redefi**](../../README.md)

***

[redefi](../../README.md) / oracle/service/src

# oracle/service/src

## Classes

### CoingeckoOracleProvider

CoingeckoOracleProvider
This class is responsible for fetching spot prices from the Coingecko API

#### Extends

- `ManagerProviderBase`\<[`OracleProviderType`](../../common/src/README.md#oracleprovidertype)\>

#### Implements

- `IOracleProvider`

#### Constructors

##### Constructor

> **new CoingeckoOracleProvider**(`params`): [`CoingeckoOracleProvider`](#coingeckooracleprovider)

CONSTRUCTOR

###### Parameters

###### params

###### configProvider

`IConfigurationProvider`

###### Returns

[`CoingeckoOracleProvider`](#coingeckooracleprovider)

###### Overrides

`ManagerProviderBase<OracleProviderType>.constructor`

#### Properties

##### configProvider

> `readonly` **configProvider**: `IConfigurationProvider`

###### See

IManagerProvider.configProvider

###### Implementation of

`IOracleProvider.configProvider`

###### Inherited from

`ManagerProviderBase.configProvider`

##### type

> `readonly` **type**: [`OracleProviderType`](../../common/src/README.md#oracleprovidertype)

###### See

IManagerProvider.type

###### Implementation of

`IOracleProvider.type`

###### Inherited from

`ManagerProviderBase.type`

#### Methods

##### getSpotPrice()

> **getSpotPrice**(`params`): `Promise`\<[`ISpotPriceInfo`](../../client/src.md#ispotpriceinfo)\>

###### Parameters

###### params

###### baseToken

[`IToken`](../../client/src.md#itoken)

###### denomination?

[`Denomination`](../../client/src.md#denomination)

###### Returns

`Promise`\<[`ISpotPriceInfo`](../../client/src.md#ispotpriceinfo)\>

###### See

IOracleProvider.getSpotPrice

###### Implementation of

`IOracleProvider.getSpotPrice`

##### getSpotPrices()

> **getSpotPrices**(`params`): `Promise`\<[`SpotPricesInfo`](../../client/src.md#spotpricesinfo)\>

###### Parameters

###### params

###### baseTokens

[`IToken`](../../client/src.md#itoken)[]

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

###### quoteCurrency?

[`FiatCurrency`](../../common/src/README.md#fiatcurrency)

###### Returns

`Promise`\<[`SpotPricesInfo`](../../client/src.md#spotpricesinfo)\>

###### See

IOracleProvider.getSpotPrices

###### Implementation of

`IOracleProvider.getSpotPrices`

##### getSupportedChainIds()

> **getSupportedChainIds**(): [`ChainId`](../../client/src.md#chainid-2)[]

###### Returns

[`ChainId`](../../client/src.md#chainid-2)[]

###### See

IOracleProvider.getSupportedChainIds

###### Implementation of

`IOracleProvider.getSupportedChainIds`

###### Overrides

`ManagerProviderBase.getSupportedChainIds`

***

### OneInchOracleProvider

OneInchOracleProvider
This class is responsible for fetching spot prices from the 1inch API

#### Extends

- `ManagerProviderBase`\<[`OracleProviderType`](../../common/src/README.md#oracleprovidertype)\>

#### Implements

- `IOracleProvider`

#### Constructors

##### Constructor

> **new OneInchOracleProvider**(`params`): [`OneInchOracleProvider`](#oneinchoracleprovider)

CONSTRUCTOR

###### Parameters

###### params

###### configProvider

`IConfigurationProvider`

###### Returns

[`OneInchOracleProvider`](#oneinchoracleprovider)

###### Overrides

`ManagerProviderBase<OracleProviderType>.constructor`

#### Properties

##### configProvider

> `readonly` **configProvider**: `IConfigurationProvider`

###### See

IManagerProvider.configProvider

###### Implementation of

`IOracleProvider.configProvider`

###### Inherited from

[`CoingeckoOracleProvider`](#coingeckooracleprovider).[`configProvider`](#configprovider)

##### type

> `readonly` **type**: [`OracleProviderType`](../../common/src/README.md#oracleprovidertype)

###### See

IManagerProvider.type

###### Implementation of

`IOracleProvider.type`

###### Inherited from

`ManagerProviderBase.type`

#### Methods

##### getSpotPrice()

> **getSpotPrice**(`params`): `Promise`\<[`ISpotPriceInfo`](../../client/src.md#ispotpriceinfo)\>

###### Parameters

###### params

###### baseToken

[`IToken`](../../client/src.md#itoken)

###### denomination?

[`Denomination`](../../client/src.md#denomination)

###### Returns

`Promise`\<[`ISpotPriceInfo`](../../client/src.md#ispotpriceinfo)\>

###### See

IOracleProvider.getSpotPrice

###### Implementation of

`IOracleProvider.getSpotPrice`

##### getSpotPrices()

> **getSpotPrices**(`params`): `Promise`\<[`SpotPricesInfo`](../../client/src.md#spotpricesinfo)\>

###### Parameters

###### params

###### baseTokens

[`IToken`](../../client/src.md#itoken)[]

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

###### quoteCurrency?

[`FiatCurrency`](../../common/src/README.md#fiatcurrency)

###### Returns

`Promise`\<[`SpotPricesInfo`](../../client/src.md#spotpricesinfo)\>

###### See

IOracleProvider.getSpotPrices

###### Implementation of

`IOracleProvider.getSpotPrices`

##### getSupportedChainIds()

> **getSupportedChainIds**(): [`ChainId`](../../client/src.md#chainid-2)[]

###### Returns

[`ChainId`](../../client/src.md#chainid-2)[]

###### See

IOracleProvider.getSupportedChainIds

###### Implementation of

`IOracleProvider.getSupportedChainIds`

###### Overrides

`ManagerProviderBase.getSupportedChainIds`

***

### OracleManager

OracleManager
This class is the implementation of the IOracleManager interface. Takes care of choosing the best provider for a price consultation

#### Extends

- `ManagerWithFallbackProvidersBase`\<[`OracleProviderType`](../../common/src/README.md#oracleprovidertype), `IOracleProvider`\>

#### Implements

- `IOracleManager`

#### Constructors

##### Constructor

> **new OracleManager**(`params`): [`OracleManager`](#oraclemanager)

CONSTRUCTOR

###### Parameters

###### params

###### cacheOrchestrator?

[`DataOrchestrator`](../../client/src.md#dataorchestrator)

###### cacheService?

`ICacheService`

###### cacheTTLSeconds?

`number`

###### providers

`IOracleProvider`[]

###### Returns

[`OracleManager`](#oraclemanager)

###### Overrides

`ManagerWithFallbackProvidersBase<OracleProviderType, IOracleProvider>.constructor`

#### Properties

##### cacheOrchestrator?

> `optional` **cacheOrchestrator?**: [`DataOrchestrator`](../../client/src.md#dataorchestrator)

###### Description

Optional DataOrchestrator instance used by the

###### Cache

decorator to handle
             layered caching execution and volatility policies.

###### Inherited from

[`SwapManager`](../../swap/service/src.md#swapmanager).[`cacheOrchestrator`](../../swap/service/src.md#cacheorchestrator)

#### Methods

##### getSpotPrice()

> **getSpotPrice**(`params`): `Promise`\<[`ISpotPriceInfo`](../../client/src.md#ispotpriceinfo)\>

getSpotPrice
Retrieves the spot price for a specific base token, optionally denominated in another token.

###### Parameters

###### params

###### baseToken

[`IToken`](../../client/src.md#itoken)

###### denomination?

[`Denomination`](../../client/src.md#denomination)

###### forceUseProvider?

[`OracleProviderType`](../../common/src/README.md#oracleprovidertype)

###### Returns

`Promise`\<[`ISpotPriceInfo`](../../client/src.md#ispotpriceinfo)\>

The spot price of the base token.

###### Implementation of

`IOracleManager.getSpotPrice`

##### getSpotPrices()

> **getSpotPrices**(`params`): `Promise`\<[`SpotPricesInfo`](../../client/src.md#spotpricesinfo)\>

getSpotPrices
Retrieves the spot prices for an array of base tokens.

###### Parameters

###### params

###### baseTokens

[`IToken`](../../client/src.md#itoken)[]

###### chainInfo

[`IChainInfo`](../../client/src.md#ichaininfo)

###### forceUseProvider?

[`OracleProviderType`](../../common/src/README.md#oracleprovidertype)

###### quoteCurrency?

[`FiatCurrency`](../../common/src/README.md#fiatcurrency)

###### Returns

`Promise`\<[`SpotPricesInfo`](../../client/src.md#spotpricesinfo)\>

A map of spot prices for the provided base tokens.

###### Implementation of

`IOracleManager.getSpotPrices`

***

### OracleManagerFactory

OracleManagerFactory
This class is responsible for creating instances of the OracleManager

#### Constructors

##### Constructor

> **new OracleManagerFactory**(): [`OracleManagerFactory`](#oraclemanagerfactory)

###### Returns

[`OracleManagerFactory`](#oraclemanagerfactory)

#### Methods

##### newOracleManager()

> `static` **newOracleManager**(`params`): [`OracleManager`](#oraclemanager)

###### Parameters

###### params

###### cacheService?

`ICacheService`

###### cacheTTLSeconds?

`number`

###### configProvider

`IConfigurationProvider`

###### Returns

[`OracleManager`](#oraclemanager)

## Type Aliases

### CoingeckoResponse

> **CoingeckoResponse** = `object`

#### Index Signature

\[`address`: `string`\]: `object`

***

### OracleManagerProviderConfig

> **OracleManagerProviderConfig** = `object`

#### Properties

##### provider

> **provider**: `IOracleProvider`

***

### OracleProviderConfig

> **OracleProviderConfig** = `object`

Oracle provider configuration

#### Properties

##### apiKey

> **apiKey**: `string`

provider API key

##### apiUrl

> **apiUrl**: `string`

provider API URL

##### authHeader

> **authHeader**: `string`

provider auth header

##### version

> **version**: `string`

provider API version
