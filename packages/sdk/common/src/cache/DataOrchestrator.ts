import { CacheLayer, GlobalCacheConfig, VolatilityProfile } from './types';
import { ICacheLayer } from './layers/ICacheLayer';

/**
 * Orchestrates the layered caching strategy.
 */
export class DataOrchestrator {
  private layers: Map<CacheLayer, ICacheLayer> = new Map();

  constructor(
    private readonly config: GlobalCacheConfig,
    activeLayers: ICacheLayer[]
  ) {
    activeLayers.forEach(layer => this.layers.set(layer.layerType, layer));
  }

  /**
   * Fetches data using the layered caching strategy.
   * @param profile The volatility profile of the data.
   * @param cacheKey A globally unique string identifying the call.
   * @param fetcher The fallback function to execute on a cache miss.
   * @param overrideLayers Optional layers to override the global policy.
   * @returns The resolved data.
   */
  public async execute<T>(
    profile: VolatilityProfile,
    cacheKey: string,
    fetcher: () => Promise<T>,
    overrideLayers?: CacheLayer[]
  ): Promise<T> {
    const policy = this.config[profile];
    const targetLayers = overrideLayers || policy.layers;

    // 1. Waterfall down the caches
    for (const layerType of targetLayers) {
      if (layerType === CacheLayer.L5_RPC) continue; // Skip RPC here, it's our fallback

      const layer = this.layers.get(layerType);
      if (layer) {
        const cachedData = await layer.get<T>(cacheKey, policy.ttl);
        if (cachedData !== null && cachedData !== undefined) {
          return cachedData; // Cache Hit!
        }
      }
    }

    // 2. Cache Miss on all requested layers -> Fetch from the source of truth
    const freshData = await fetcher();

    // 3. Waterfall write: Save the fresh data back to the requested cache layers
    for (const layerType of targetLayers) {
      if (layerType === CacheLayer.L5_RPC) continue;
      
      const layer = this.layers.get(layerType);
      if (layer) {
        // Only set if the data was successfully fetched
        if (freshData !== undefined && freshData !== null) {
          await layer.set(cacheKey, freshData, policy.ttl);
        }
      }
    }

    return freshData;
  }

  /**
   * Broadcasts a new block event to all active cache layers.
   */
  public async notifyNewBlock(blockNumber: bigint): Promise<void> {
    for (const layer of this.layers.values()) {
      await layer.onNewBlock(blockNumber);
    }
  }
}
