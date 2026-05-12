[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [swap/service/src](../README.md) / CowSwapProvider

# Class: CowSwapProvider

## Extends

- `ManagerProviderBase`\<[`IntentSwapProviderType`](../../../../client/src/enumerations/IntentSwapProviderType.md)\>

## Implements

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)

## Constructors

### Constructor

> **new CowSwapProvider**(`params`): `CowSwapProvider`

CONSTRUCTOR

#### Parameters

##### params

###### allowanceManager

`IAllowanceManager`

###### configProvider

`IConfigurationProvider`

###### tokensManager

`ITokensManager`

#### Returns

`CowSwapProvider`

#### Overrides

`ManagerProviderBase<IntentSwapProviderType>.constructor`

## Properties

### cancelOrder

> **cancelOrder**: `IIntentSwapProvider`

#### See

IIntentSwapProvider.cancelOrder

***

### checkOrder

> **checkOrder**: `IIntentSwapProvider`

#### See

IIntentSwapProvider.checkOrder

***

### configProvider

> `readonly` **configProvider**: `IConfigurationProvider`

#### See

IManagerProvider.configProvider

#### Inherited from

`ManagerProviderBase.configProvider`

***

### getSellOrderQuote

> **getSellOrderQuote**: `IIntentSwapProvider`

#### See

IIntentSwapProvider.getSellOrderQuote

***

### getSupportedChainIds

> **getSupportedChainIds**: () => [`ChainId`](../../../../client/src/type-aliases/ChainId.md)[]

#### Returns

[`ChainId`](../../../../client/src/type-aliases/ChainId.md)[]

The list of supported chain IDs

Used to filter out the providers that do not support the chain ID

#### Method

getSupportedChainIds

#### Description

Retrieves the list of supported chain IDs for this provider

#### See

IManagerProvider.getSupportedChainIds

#### Overrides

`ManagerProviderBase.getSupportedChainIds`

***

### sendOrder

> **sendOrder**: `IIntentSwapProvider`

#### See

IIntentSwapProvider.sendOrder

***

### type

> `readonly` **type**: [`CowSwap`](../../../../client/src/enumerations/IntentSwapProviderType.md#cowswap)

#### See

IManagerProvider.type

#### Inherited from

`ManagerProviderBase.type`

## Methods

### cancelOrderOnchain()

> **cancelOrderOnchain**(`params`): `any`

#### Parameters

##### params

`unknown`

#### Returns

`any`
