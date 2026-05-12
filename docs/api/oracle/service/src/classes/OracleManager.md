[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [oracle/service/src](../README.md) / OracleManager

# Class: OracleManager

OracleManager
This class is the implementation of the IOracleManager interface. Takes care of choosing the best provider for a price consultation

## Extends

- `ManagerWithFallbackProvidersBase`\<[`OracleProviderType`](../../../../common/src/enumerations/OracleProviderType.md), `IOracleProvider`\>

## Implements

- `IOracleManager`

## Constructors

### Constructor

> **new OracleManager**(`params`): `OracleManager`

CONSTRUCTOR

#### Parameters

##### params

###### cacheOrchestrator?

[`DataOrchestrator`](../../../../client/src/classes/DataOrchestrator.md)

###### cacheService?

`ICacheService`

###### cacheTTLSeconds?

`number`

###### providers

`IOracleProvider`[]

#### Returns

`OracleManager`

#### Overrides

`ManagerWithFallbackProvidersBase<OracleProviderType, IOracleProvider>.constructor`

## Properties

### cacheOrchestrator?

> `optional` **cacheOrchestrator?**: [`DataOrchestrator`](../../../../client/src/classes/DataOrchestrator.md)

#### Description

Optional DataOrchestrator instance used by the

#### Cache

decorator to handle
             layered caching execution and volatility policies.

#### Inherited from

[`SwapManager`](../../../../swap/service/src/classes/SwapManager.md).[`cacheOrchestrator`](../../../../swap/service/src/classes/SwapManager.md#cacheorchestrator)

## Methods

### getSpotPrice()

> **getSpotPrice**(`params`): `Promise`\<[`ISpotPriceInfo`](../../../../client/src/type-aliases/ISpotPriceInfo.md)\>

getSpotPrice
Retrieves the spot price for a specific base token, optionally denominated in another token.

#### Parameters

##### params

###### baseToken

[`IToken`](../../../../client/src/interfaces/IToken.md)

###### denomination?

[`Denomination`](../../../../client/src/type-aliases/Denomination.md)

###### forceUseProvider?

[`OracleProviderType`](../../../../common/src/enumerations/OracleProviderType.md)

#### Returns

`Promise`\<[`ISpotPriceInfo`](../../../../client/src/type-aliases/ISpotPriceInfo.md)\>

The spot price of the base token.

#### Implementation of

`IOracleManager.getSpotPrice`

***

### getSpotPrices()

> **getSpotPrices**(`params`): `Promise`\<[`SpotPricesInfo`](../../../../client/src/type-aliases/SpotPricesInfo.md)\>

getSpotPrices
Retrieves the spot prices for an array of base tokens.

#### Parameters

##### params

###### baseTokens

[`IToken`](../../../../client/src/interfaces/IToken.md)[]

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

###### forceUseProvider?

[`OracleProviderType`](../../../../common/src/enumerations/OracleProviderType.md)

###### quoteCurrency?

[`FiatCurrency`](../../../../common/src/enumerations/FiatCurrency.md)

#### Returns

`Promise`\<[`SpotPricesInfo`](../../../../client/src/type-aliases/SpotPricesInfo.md)\>

A map of spot prices for the provided base tokens.

#### Implementation of

`IOracleManager.getSpotPrices`
