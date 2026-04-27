import { CacheLayer, InvalidationStrategy } from '../types';
import { ICacheLayer } from './ICacheLayer';

interface CacheEntry<T> {
  value: T;
  timestamp: number;
}

/**
 * L1: In-Memory Cache implementation.
 * Fast, temporary cache that survives only until page refresh.
 */
export class MemoryCacheLayer implements ICacheLayer {
  public readonly layerType = CacheLayer.L1_MEMORY;

  private cache: Map<string, CacheEntry<unknown>> = new Map();
  // We keep track of block-bound keys to invalidate them easily
  private blockBoundKeys: Set<string> = new Set();

  public async get<T>(key: string, strategy: InvalidationStrategy): Promise<T | null> {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (typeof strategy === 'number') {
      const ageInSeconds = (Date.now() - entry.timestamp) / 1000;
      if (ageInSeconds > strategy) {
        this.cache.delete(key);
        return null;
      }
    }

    // For 'new_block', if it exists in the cache, it's valid until onNewBlock is called.
    return entry.value as T;
  }

  public async set<T>(key: string, value: T, strategy?: InvalidationStrategy): Promise<void> {
    this.cache.set(key, { value, timestamp: Date.now() });
    
    if (strategy === 'new_block') {
      this.blockBoundKeys.add(key);
    }
  }

  public async invalidate(key: string): Promise<void> {
    this.cache.delete(key);
    this.blockBoundKeys.delete(key);
  }

  public async onNewBlock(_blockNumber: bigint): Promise<void> {
    // Invalidate all block-bound keys
    for (const key of this.blockBoundKeys) {
      this.cache.delete(key);
    }
    this.blockBoundKeys.clear();
  }
}
