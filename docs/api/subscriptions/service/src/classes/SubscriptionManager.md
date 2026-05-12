[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [subscriptions/service/src](../README.md) / SubscriptionManager

# Class: SubscriptionManager

SubscriptionManager
Implementation of ISubscriptionManager

## Implements

- `ISubscriptionManager`

## Constructors

### Constructor

> **new SubscriptionManager**(`params`): `SubscriptionManager`

#### Parameters

##### params

###### eventBus?

`IEventBus`

###### providers

`Map`\<`SubscriptionProviderType`, `ISubscriptionProvider`\>

#### Returns

`SubscriptionManager`

## Methods

### getProvider()

> **getProvider**(`type`): `ISubscriptionProvider`

#### Parameters

##### type

`SubscriptionProviderType`

#### Returns

`ISubscriptionProvider`

***

### getProviders()

> **getProviders**(): `Map`\<`SubscriptionProviderType`, `ISubscriptionProvider`\>

#### Returns

`Map`\<`SubscriptionProviderType`, `ISubscriptionProvider`\>

***

### hasProvider()

> **hasProvider**(`type`): `boolean`

#### Parameters

##### type

`SubscriptionProviderType`

#### Returns

`boolean`

***

### subscribeToNewBlocks()

> **subscribeToNewBlocks**(`chainInfo`, `callback`): `string`

subscribeToNewBlocks
Subscribes to new blocks on the blockchain, utilizing the available providers

#### Parameters

##### chainInfo

[`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md)

The chain to listen to

##### callback

(`blockNumber`) => `void`

Function to call when a new block is mined

#### Returns

`string`

string A unique subscription ID to be used for unsubscribing

#### Implementation of

`ISubscriptionManager.subscribeToNewBlocks`

***

### unsubscribe()

> **unsubscribe**(`subscriptionId`): `void`

unsubscribe
Cancels an active subscription

#### Parameters

##### subscriptionId

`string`

The ID of the subscription to cancel

#### Returns

`void`

#### Implementation of

`ISubscriptionManager.unsubscribe`
