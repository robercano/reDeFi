[**redefi**](../../README.md)

***

[redefi](../../README.md) / swap/service/src

# swap/service/src

## Enumerations

### CowSwapSendOrderStatus

#### Enumeration Members

##### AllowanceNeeded

> **AllowanceNeeded**: `"allowance_needed"`

##### OrderSent

> **OrderSent**: `"order_sent"`

##### WrapToNative

> **WrapToNative**: `"wrap_to_native"`

## Classes

### CowSwapProvider

#### Extends

- `ManagerProviderBase`\<[`IntentSwapProviderType`](../../client/src.md#intentswapprovidertype)\>

#### Implements

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)

#### Constructors

##### Constructor

> **new CowSwapProvider**(`params`): [`CowSwapProvider`](#cowswapprovider)

CONSTRUCTOR

###### Parameters

###### params

###### allowanceManager

`IAllowanceManager`

###### configProvider

`IConfigurationProvider`

###### tokensManager

`ITokensManager`

###### Returns

[`CowSwapProvider`](#cowswapprovider)

###### Overrides

`ManagerProviderBase<IntentSwapProviderType>.constructor`

#### Properties

##### cancelOrder

> **cancelOrder**: `IIntentSwapProvider`

###### See

IIntentSwapProvider.cancelOrder

##### checkOrder

> **checkOrder**: `IIntentSwapProvider`

###### See

IIntentSwapProvider.checkOrder

##### configProvider

> `readonly` **configProvider**: `IConfigurationProvider`

###### See

IManagerProvider.configProvider

###### Inherited from

`ManagerProviderBase.configProvider`

##### getSellOrderQuote

> **getSellOrderQuote**: `IIntentSwapProvider`

###### See

IIntentSwapProvider.getSellOrderQuote

##### getSupportedChainIds

> **getSupportedChainIds**: () => [`ChainId`](../../client/src.md#chainid-2)[]

###### Returns

[`ChainId`](../../client/src.md#chainid-2)[]

The list of supported chain IDs

Used to filter out the providers that do not support the chain ID

###### Method

getSupportedChainIds

###### Description

Retrieves the list of supported chain IDs for this provider

###### See

IManagerProvider.getSupportedChainIds

###### Overrides

`ManagerProviderBase.getSupportedChainIds`

##### sendOrder

> **sendOrder**: `IIntentSwapProvider`

###### See

IIntentSwapProvider.sendOrder

##### type

> `readonly` **type**: [`CowSwap`](../../client/src.md#cowswap)

###### See

IManagerProvider.type

###### Inherited from

`ManagerProviderBase.type`

#### Methods

##### cancelOrderOnchain()

> **cancelOrderOnchain**(`params`): `any`

###### Parameters

###### params

`unknown`

###### Returns

`any`

***

### OneInchSwapProvider

#### Extends

- `ManagerProviderBase`\<[`SwapProviderType`](../../common/src/README.md#swapprovidertype)\>

#### Implements

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)

#### Constructors

##### Constructor

> **new OneInchSwapProvider**(`params`): [`OneInchSwapProvider`](#oneinchswapprovider)

CONSTRUCTOR

###### Parameters

###### params

###### configProvider

`IConfigurationProvider`

###### Returns

[`OneInchSwapProvider`](#oneinchswapprovider)

###### Overrides

`ManagerProviderBase<SwapProviderType>.constructor`

#### Properties

##### configProvider

> `readonly` **configProvider**: `IConfigurationProvider`

###### See

IManagerProvider.configProvider

###### Inherited from

`ManagerProviderBase.configProvider`

##### type

> `readonly` **type**: `SwapProviderType`

###### See

IManagerProvider.type

###### Inherited from

`ManagerProviderBase.type`

#### Methods

##### getSupportedChainIds()

> **getSupportedChainIds**(): [`ChainId`](../../client/src.md#chainid-2)[]

###### Returns

[`ChainId`](../../client/src.md#chainid-2)[]

###### See

IManagerProvider.getSupportedChainIds

###### Overrides

`ManagerProviderBase.getSupportedChainIds`

##### getSwapDataExactInput()

> **getSwapDataExactInput**(`params`): `Promise`\<[`SwapData`](../../client/src.md#swapdata)\>

###### Parameters

###### params

###### fromAmount

[`ITokenAmount`](../../client/src.md#itokenamount)

###### recipient

[`IAddress`](../../client/src.md#iaddress)

###### slippage

[`IPercentage`](../../client/src.md#ipercentage)

###### toToken

[`IToken`](../../client/src.md#itoken)

###### Returns

`Promise`\<[`SwapData`](../../client/src.md#swapdata)\>

###### See

ISwapProvider.getSwapDataExactInput

##### getSwapQuoteExactInput()

> **getSwapQuoteExactInput**(`params`): `Promise`\<[`QuoteData`](../../client/src.md#quotedata)\>

###### Parameters

###### params

###### fromAmount

[`ITokenAmount`](../../client/src.md#itokenamount)

###### toToken

[`IToken`](../../client/src.md#itoken)

###### Returns

`Promise`\<[`QuoteData`](../../client/src.md#quotedata)\>

###### See

ISwapProvider.getSwapQuoteExactInput

***

### SwapManager

SwapManager

#### See

ISwapManager

#### Extends

- `ManagerWithFallbackProvidersBase`\<[`SwapProviderType`](../../common/src/README.md#swapprovidertype), [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)\>

#### Implements

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)

#### Constructors

##### Constructor

> **new SwapManager**(`params`): [`SwapManager`](#swapmanager)

CONSTRUCTOR

###### Parameters

###### params

###### providers

`ISwapProvider`[]

###### Returns

[`SwapManager`](#swapmanager)

###### Overrides

`ManagerWithFallbackProvidersBase<SwapProviderType, ISwapProvider>.constructor`

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

##### getSwapDataExactInput()

> **getSwapDataExactInput**(`params`): `Promise`\<[`SwapData`](../../client/src.md#swapdata)\>

###### Parameters

###### params

###### forceUseProvider?

`SwapProviderType`

###### fromAmount

[`ITokenAmount`](../../client/src.md#itokenamount)

###### recipient

[`IAddress`](../../client/src.md#iaddress)

###### slippage

[`IPercentage`](../../client/src.md#ipercentage)

###### toToken

[`IToken`](../../client/src.md#itoken)

###### Returns

`Promise`\<[`SwapData`](../../client/src.md#swapdata)\>

###### See

ISwapManager.getSwapDataExactInput

##### getSwapQuoteExactInput()

> **getSwapQuoteExactInput**(`params`): `Promise`\<[`QuoteData`](../../client/src.md#quotedata)\>

###### Parameters

###### params

###### forceUseProvider?

`SwapProviderType`

###### fromAmount

[`ITokenAmount`](../../client/src.md#itokenamount)

###### toToken

[`IToken`](../../client/src.md#itoken)

###### Returns

`Promise`\<[`QuoteData`](../../client/src.md#quotedata)\>

###### See

ISwapManager.getSwapQuoteExactInput

***

### SwapManagerFactory

SwapManagerFactory
Factory class to create a new SwapManager instance including all supported providers

#### Constructors

##### Constructor

> **new SwapManagerFactory**(): [`SwapManagerFactory`](#swapmanagerfactory)

###### Returns

[`SwapManagerFactory`](#swapmanagerfactory)

#### Methods

##### newSwapManager()

> `static` **newSwapManager**(`params`): [`SwapManager`](#swapmanager)

###### Parameters

###### params

###### configProvider

`IConfigurationProvider`

###### Returns

[`SwapManager`](#swapmanager)

## Interfaces

### OneInchBaseResponse

#### Extended by

- [`OneInchQuoteResponse`](#oneinchquoteresponse)
- [`OneInchSwapResponse`](#oneinchswapresponse)

#### Properties

##### dstAmount

> **dstAmount**: `string`

##### fromTokenAmount

> **fromTokenAmount**: `string`

##### toTokenAmount

> **toTokenAmount**: `string`

***

### OneInchQuoteResponse

#### Extends

- [`OneInchBaseResponse`](#oneinchbaseresponse)

#### Properties

##### dstAmount

> **dstAmount**: `string`

###### Inherited from

[`OneInchBaseResponse`](#oneinchbaseresponse).[`dstAmount`](#dstamount)

##### fromTokenAmount

> **fromTokenAmount**: `string`

###### Overrides

[`OneInchBaseResponse`](#oneinchbaseresponse).[`fromTokenAmount`](#fromtokenamount)

##### gas?

> `optional` **gas?**: `number`

##### protocols?

> `optional` **protocols?**: [`OneInchSwapRoute`](#oneinchswaproute)[]

##### toTokenAmount

> **toTokenAmount**: `string`

###### Overrides

[`OneInchBaseResponse`](#oneinchbaseresponse).[`toTokenAmount`](#totokenamount)

***

### OneInchSwapResponse

#### Extends

- [`OneInchBaseResponse`](#oneinchbaseresponse)

#### Properties

##### dstAmount

> **dstAmount**: `string`

###### Inherited from

[`OneInchBaseResponse`](#oneinchbaseresponse).[`dstAmount`](#dstamount)

##### fromTokenAmount

> **fromTokenAmount**: `string`

###### Inherited from

[`OneInchBaseResponse`](#oneinchbaseresponse).[`fromTokenAmount`](#fromtokenamount)

##### protocols

> **protocols**: `unknown`

##### toTokenAmount

> **toTokenAmount**: `string`

###### Inherited from

[`OneInchBaseResponse`](#oneinchbaseresponse).[`toTokenAmount`](#totokenamount)

##### tx

> **tx**: `object`

###### data

> **data**: `string`

###### from

> **from**: `string`

###### gasPrice

> **gasPrice**: `string`

###### to

> **to**: `string`

###### value

> **value**: `string`

## Type Aliases

### OneInchAuthHeader

> **OneInchAuthHeader** = `object`

#### Properties

##### Authorization

> **Authorization**: `string`

***

### OneInchSwapProviderConfig

> **OneInchSwapProviderConfig** = `object`

#### Properties

##### allowedSwapProtocols

> **allowedSwapProtocols**: `string`[]

##### apiKey

> **apiKey**: `string`

##### apiUrl

> **apiUrl**: `string`

##### excludedSwapProtocols

> **excludedSwapProtocols**: `string`[]

##### version

> **version**: `string`

***

### OneInchSwapRoute

> **OneInchSwapRoute** = `OneInchSwapHop`[]

## Variables

### OneInchAuthHeaderKey

> `const` **OneInchAuthHeaderKey**: `"Authorization"` = `'Authorization'`

***

### OneInchSpotAuthHeaderKey

> `const` **OneInchSpotAuthHeaderKey**: `"Authorization"` = `'Authorization'`
