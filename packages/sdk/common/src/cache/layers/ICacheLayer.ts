import { CacheLayer, InvalidationStrategy } from '../types';

/**
 * Interface for all caching layers.
 */
export interface ICacheLayer {
  /**
   * The identifier for this layer.
   */
  readonly layerType: CacheLayer;

  /**
   * Retrieves a value from the cache.
   * @param key The unique cache key.
   * @param strategy The invalidation strategy to determine if the key is stale.
   * @returns The cached value, or null if missing/stale.
   */
  get<T>(key: string, strategy: InvalidationStrategy): Promise<T | null>;

  /**
   * Sets a value in the cache.
   * @param key The unique cache key.
   * @param value The value to cache.
   * @param strategy Optional strategy to determine when to invalidate.
   */
  set<T>(key: string, value: T, strategy?: InvalidationStrategy): Promise<void>;

  /**
   * Manually invalidates a specific cache key.
   * @param key The unique cache key.
   */
  invalidate(key: string): Promise<void>;

  /**
   * Global invalidation event (e.g., when a new block arrives).
   * Caches that respect BLOCK_BOUND TTLs should clear relevant data here.
   */
  onNewBlock(blockNumber: bigint): Promise<void>;
}
