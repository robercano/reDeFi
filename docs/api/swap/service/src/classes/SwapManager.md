[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [swap/service/src](../README.md) / SwapManager

# Class: SwapManager

SwapManager

## See

ISwapManager

## Extends

- `ManagerWithFallbackProvidersBase`\<[`SwapProviderType`](../../../../common/src/enumerations/SwapProviderType.md), [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\>

## Implements

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)

## Constructors

### Constructor

> **new SwapManager**(`params`): `SwapManager`

CONSTRUCTOR

#### Parameters

##### params

###### providers

`ISwapProvider`[]

#### Returns

`SwapManager`

#### Overrides

`ManagerWithFallbackProvidersBase<SwapProviderType, ISwapProvider>.constructor`

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

### getSwapDataExactInput()

> **getSwapDataExactInput**(`params`): `Promise`\<[`SwapData`](../../../../client/src/type-aliases/SwapData.md)\>

#### Parameters

##### params

###### forceUseProvider?

`SwapProviderType`

###### fromAmount

[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

###### recipient

[`IAddress`](../../../../client/src/interfaces/IAddress.md)

###### slippage

[`IPercentage`](../../../../client/src/interfaces/IPercentage.md)

###### toToken

[`IToken`](../../../../client/src/interfaces/IToken.md)

#### Returns

`Promise`\<[`SwapData`](../../../../client/src/type-aliases/SwapData.md)\>

#### See

ISwapManager.getSwapDataExactInput

***

### getSwapQuoteExactInput()

> **getSwapQuoteExactInput**(`params`): `Promise`\<[`QuoteData`](../../../../client/src/type-aliases/QuoteData.md)\>

#### Parameters

##### params

###### forceUseProvider?

`SwapProviderType`

###### fromAmount

[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

###### toToken

[`IToken`](../../../../client/src/interfaces/IToken.md)

#### Returns

`Promise`\<[`QuoteData`](../../../../client/src/type-aliases/QuoteData.md)\>

#### See

ISwapManager.getSwapQuoteExactInput
