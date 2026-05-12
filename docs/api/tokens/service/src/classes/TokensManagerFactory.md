[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [tokens/service/src](../README.md) / TokensManagerFactory

# Class: TokensManagerFactory

TokensManagerFactory
Factory class for the TokensManager. Takes care of generating the manager config and creates an instance

## Constructors

### Constructor

> **new TokensManagerFactory**(): `TokensManagerFactory`

#### Returns

`TokensManagerFactory`

## Properties

### providers

> `static` **providers**: `ITokensProvider`[] = `[]`

providersConfig
Configuration for the TokensManager. It includes the list of available providers

## Methods

### newTokensManager()

> `static` **newTokensManager**(`params`): `ITokensManager`

newTokensManager

#### Parameters

##### params

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

#### Returns

`ITokensManager`

A new instance of the TokensManager
