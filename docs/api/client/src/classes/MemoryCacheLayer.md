[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / MemoryCacheLayer

# Class: MemoryCacheLayer

L1: In-Memory Cache implementation.
Fast, temporary cache that survives only until page refresh.

## Implements

- [`ICacheLayer`](../interfaces/ICacheLayer.md)

## Constructors

### Constructor

> **new MemoryCacheLayer**(): `MemoryCacheLayer`

#### Returns

`MemoryCacheLayer`

## Properties

### layerType

> `readonly` **layerType**: [`L1_MEMORY`](../enumerations/CacheLayer.md#l1_memory) = `CacheLayer.L1_MEMORY`

The identifier for this layer.

#### Implementation of

[`ICacheLayer`](../interfaces/ICacheLayer.md).[`layerType`](../interfaces/ICacheLayer.md#layertype)

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

#### Implementation of

[`ICacheLayer`](../interfaces/ICacheLayer.md).[`get`](../interfaces/ICacheLayer.md#get)

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

#### Implementation of

[`ICacheLayer`](../interfaces/ICacheLayer.md).[`invalidate`](../interfaces/ICacheLayer.md#invalidate)

***

### onNewBlock()

> **onNewBlock**(`_blockNumber`): `Promise`\<`void`\>

Global invalidation event (e.g., when a new block arrives).
Caches that respect BLOCK_BOUND TTLs should clear relevant data here.

#### Parameters

##### \_blockNumber

`bigint`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ICacheLayer`](../interfaces/ICacheLayer.md).[`onNewBlock`](../interfaces/ICacheLayer.md#onnewblock)

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

#### Implementation of

[`ICacheLayer`](../interfaces/ICacheLayer.md).[`set`](../interfaces/ICacheLayer.md#set)
