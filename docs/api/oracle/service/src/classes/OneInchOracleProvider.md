[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [oracle/service/src](../README.md) / OneInchOracleProvider

# Class: OneInchOracleProvider

OneInchOracleProvider
This class is responsible for fetching spot prices from the 1inch API

## Extends

- `ManagerProviderBase`\<[`OracleProviderType`](../../../../common/src/enumerations/OracleProviderType.md)\>

## Implements

- `IOracleProvider`

## Constructors

### Constructor

> **new OneInchOracleProvider**(`params`): `OneInchOracleProvider`

CONSTRUCTOR

#### Parameters

##### params

###### configProvider

`IConfigurationProvider`

#### Returns

`OneInchOracleProvider`

#### Overrides

`ManagerProviderBase<OracleProviderType>.constructor`

## Properties

### configProvider

> `readonly` **configProvider**: `IConfigurationProvider`

#### See

IManagerProvider.configProvider

#### Implementation of

`IOracleProvider.configProvider`

#### Inherited from

[`CoingeckoOracleProvider`](CoingeckoOracleProvider.md).[`configProvider`](CoingeckoOracleProvider.md#configprovider)

***

### type

> `readonly` **type**: [`OracleProviderType`](../../../../common/src/enumerations/OracleProviderType.md)

#### See

IManagerProvider.type

#### Implementation of

`IOracleProvider.type`

#### Inherited from

`ManagerProviderBase.type`

## Methods

### getSpotPrice()

> **getSpotPrice**(`params`): `Promise`\<[`ISpotPriceInfo`](../../../../client/src/type-aliases/ISpotPriceInfo.md)\>

#### Parameters

##### params

###### baseToken

[`IToken`](../../../../client/src/interfaces/IToken.md)

###### denomination?

[`Denomination`](../../../../client/src/type-aliases/Denomination.md)

#### Returns

`Promise`\<[`ISpotPriceInfo`](../../../../client/src/type-aliases/ISpotPriceInfo.md)\>

#### See

IOracleProvider.getSpotPrice

#### Implementation of

`IOracleProvider.getSpotPrice`

***

### getSpotPrices()

> **getSpotPrices**(`params`): `Promise`\<[`SpotPricesInfo`](../../../../client/src/type-aliases/SpotPricesInfo.md)\>

#### Parameters

##### params

###### baseTokens

[`IToken`](../../../../client/src/interfaces/IToken.md)[]

###### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

###### quoteCurrency?

[`FiatCurrency`](../../../../common/src/enumerations/FiatCurrency.md)

#### Returns

`Promise`\<[`SpotPricesInfo`](../../../../client/src/type-aliases/SpotPricesInfo.md)\>

#### See

IOracleProvider.getSpotPrices

#### Implementation of

`IOracleProvider.getSpotPrices`

***

### getSupportedChainIds()

> **getSupportedChainIds**(): [`ChainId`](../../../../client/src/type-aliases/ChainId.md)[]

#### Returns

[`ChainId`](../../../../client/src/type-aliases/ChainId.md)[]

#### See

IOracleProvider.getSupportedChainIds

#### Implementation of

`IOracleProvider.getSupportedChainIds`

#### Overrides

`ManagerProviderBase.getSupportedChainIds`
