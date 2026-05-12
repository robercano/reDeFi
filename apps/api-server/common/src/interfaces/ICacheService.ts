/**
 * @name ICacheService
 * @description Standardized interface for implementing caching mechanisms across the system.
 * This abstraction allows managers to safely store and retrieve data seamlessly
 * without tightly coupling to the underlying infrastructure (e.g., DynamoDB, Redis, or Memory).
 *
 * ReDeFi aims to be a standard in the industry, and this generic cache abstraction
 * plays a critical role in minimizing latency, avoiding rate limits from external APIs,
 * and maintaining high availability even when third-party providers degrade.
 */
export interface ICacheService {
  /**
   * Retrieves a cached value by its key.
   * @param key The unique string identifier for the cached item.
   * @returns The cached item, or undefined if it does not exist or has expired.
   */
  get<T>(key: string): Promise<T | undefined> | (T | undefined)

  /**
   * Stores a value in the cache with a specified Time-To-Live (TTL).
   * @param key The unique string identifier to store the item under.
   * @param value The value to cache.
   * @param ttlSeconds The number of seconds before the cached item expires.
   */
  set<T>(key: string, value: T, ttlSeconds: number): Promise<void> | void
}
