[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ICacheLayer

# Interface: ICacheLayer

Interface for all caching layers.

## Properties

### layerType

> `readonly` **layerType**: [`CacheLayer`](../enumerations/CacheLayer.md)

The identifier for this layer.

## Methods

### get()

> **get**\<`T`\>(`key`, `strategy`): `Promise`\<`T`\>

Retrieves a value from the cache.

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

The unique cache key.

##### strategy

[`InvalidationStrategy`](../type-aliases/InvalidationStrategy.md)

The invalidation strategy to determine if the key is stale.

#### Returns

`Promise`\<`T`\>

The cached value, or null if missing/stale.

***

### invalidate()

> **invalidate**(`key`): `Promise`\<`void`\>

Manually invalidates a specific cache key.

#### Parameters

##### key

`string`

The unique cache key.

#### Returns

`Promise`\<`void`\>

***

### onNewBlock()

> **onNewBlock**(`blockNumber`): `Promise`\<`void`\>

Global invalidation event (e.g., when a new block arrives).
Caches that respect BLOCK_BOUND TTLs should clear relevant data here.

#### Parameters

##### blockNumber

`bigint`

#### Returns

`Promise`\<`void`\>

***

### set()

> **set**\<`T`\>(`key`, `value`, `strategy?`): `Promise`\<`void`\>

Sets a value in the cache.

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

The unique cache key.

##### value

`T`

The value to cache.

##### strategy?

[`InvalidationStrategy`](../type-aliases/InvalidationStrategy.md)

Optional strategy to determine when to invalidate.

#### Returns

`Promise`\<`void`\>
