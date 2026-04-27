/**
 * Defines the generic volatility profiles for data caching.
 * Rather than hardcoding operation names, plugins classify how often their data changes.
 */
export enum VolatilityProfile {
  /** Never changes (e.g., token decimals, names, pool addresses) */
  STATIC = 'STATIC',
  /** Changes every block (e.g., wallet balances, allowances) */
  BLOCK_BOUND = 'BLOCK_BOUND',
  /** Changes rapidly off-chain (e.g., live fiat prices from an Oracle) */
  TIME_FAST = 'TIME_FAST',
  /** Changes slowly off-chain (e.g., historical APY data, chart data) */
  TIME_SLOW = 'TIME_SLOW',
}

/**
 * Defines the available caching layers in the SDK.
 */
export enum CacheLayer {
  L1_MEMORY = 'memory',
  L2_INDEXED_DB = 'indexed_db',
  L3_AWS_API = 'aws_backend',
  L4_SUBGRAPH = 'subgraph',
  L5_RPC = 'rpc',
}

/**
 * Defines the invalidation strategy (TTL).
 */
export type InvalidationStrategy = 
  | 'never'
  | 'new_block'
  | number; // Seconds

/**
 * A specific policy defining how a volatility profile should be cached.
 */
export interface CachePolicy {
  layers: CacheLayer[];
  ttl: InvalidationStrategy;
}

/**
 * Global configuration map mapping volatility profiles to caching policies.
 */
export type GlobalCacheConfig = Record<VolatilityProfile, CachePolicy>;
