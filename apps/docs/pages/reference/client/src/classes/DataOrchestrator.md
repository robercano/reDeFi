[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / DataOrchestrator

# Class: DataOrchestrator

Orchestrates the layered caching strategy.

## Constructors

### Constructor

> **new DataOrchestrator**(`config`, `activeLayers`): `DataOrchestrator`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`GlobalCacheConfig`](../type-aliases/GlobalCacheConfig.md) |
| `activeLayers` | [`ICacheLayer`](../interfaces/ICacheLayer.md)[] |

#### Returns

`DataOrchestrator`

## Methods

### execute()

> **execute**\<`T`\>(`profile`, `cacheKey`, `fetcher`, `overrideLayers?`): `Promise`\<`T`\>

Fetches data using the layered caching strategy.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `profile` | [`VolatilityProfile`](../enumerations/VolatilityProfile.md) | The volatility profile of the data. |
| `cacheKey` | `string` | A globally unique string identifying the call. |
| `fetcher` | () => `Promise`\<`T`\> | The fallback function to execute on a cache miss. |
| `overrideLayers?` | [`CacheLayer`](../enumerations/CacheLayer.md)[] | Optional layers to override the global policy. |

#### Returns

`Promise`\<`T`\>

The resolved data.

***

### notifyNewBlock()

> **notifyNewBlock**(`blockNumber`): `Promise`\<`void`\>

Broadcasts a new block event to all active cache layers.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockNumber` | `bigint` |

#### Returns

`Promise`\<`void`\>
