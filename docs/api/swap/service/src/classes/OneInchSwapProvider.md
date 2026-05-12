[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [swap/service/src](../README.md) / OneInchSwapProvider

# Class: OneInchSwapProvider

## Extends

- `ManagerProviderBase`\<[`SwapProviderType`](../../../../common/src/enumerations/SwapProviderType.md)\>

## Implements

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)

## Constructors

### Constructor

> **new OneInchSwapProvider**(`params`): `OneInchSwapProvider`

CONSTRUCTOR

#### Parameters

##### params

###### configProvider

`IConfigurationProvider`

#### Returns

`OneInchSwapProvider`

#### Overrides

`ManagerProviderBase<SwapProviderType>.constructor`

## Properties

### configProvider

> `readonly` **configProvider**: `IConfigurationProvider`

#### See

IManagerProvider.configProvider

#### Inherited from

`ManagerProviderBase.configProvider`

***

### type

> `readonly` **type**: `SwapProviderType`

#### See

IManagerProvider.type

#### Inherited from

`ManagerProviderBase.type`

## Methods

### getSupportedChainIds()

> **getSupportedChainIds**(): [`ChainId`](../../../../client/src/type-aliases/ChainId.md)[]

#### Returns

[`ChainId`](../../../../client/src/type-aliases/ChainId.md)[]

#### See

IManagerProvider.getSupportedChainIds

#### Overrides

`ManagerProviderBase.getSupportedChainIds`

***

### getSwapDataExactInput()

> **getSwapDataExactInput**(`params`): `Promise`\<[`SwapData`](../../../../client/src/type-aliases/SwapData.md)\>

#### Parameters

##### params

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

ISwapProvider.getSwapDataExactInput

***

### getSwapQuoteExactInput()

> **getSwapQuoteExactInput**(`params`): `Promise`\<[`QuoteData`](../../../../client/src/type-aliases/QuoteData.md)\>

#### Parameters

##### params

###### fromAmount

[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

###### toToken

[`IToken`](../../../../client/src/interfaces/IToken.md)

#### Returns

`Promise`\<[`QuoteData`](../../../../client/src/type-aliases/QuoteData.md)\>

#### See

ISwapProvider.getSwapQuoteExactInput
