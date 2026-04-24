import { ChainId, IChainInfo } from '@thesolidchain/sdk-common'
import { IManagerProvider } from '../interfaces/IManagerProvider'
import { IManagerWithProviders } from '../interfaces/IManagerWithProviders'
import type { ICacheService } from '../interfaces/ICacheService'

/**
 * @name ManagerWithFallbackProvidersBase
 * @description Base class for a manager with providers. It takes care of registering the different providers
 *              and provides a basic implementation to execute actions with a sequential fallback mechanism.
 */
export class ManagerWithFallbackProvidersBase<
  ProviderType extends string,
  ManagerProvider extends IManagerProvider<ProviderType>,
> implements IManagerWithProviders<ProviderType, ManagerProvider> {
  private _providersByChainId: Map<ChainId, ManagerProvider[]>
  private _providersByType: Map<ProviderType, ManagerProvider>
  protected readonly _cacheService?: ICacheService
  protected readonly _cacheTTLSeconds?: number

  /** CONSTRUCTOR */

  protected constructor(params: { 
    /**
     * IMPORTANT: The order of the providers in this array is critical!
     * It defines the fallback sequence. The manager will always attempt to use the
     * first provider in the list for a given chain. If it fails, it will sequentially
     * fallback to the next available provider in the order they are provided here.
     */
    providers: ManagerProvider[] 
    cacheService?: ICacheService
    cacheTTLSeconds?: number
  }) {
    const { providers, cacheService, cacheTTLSeconds } = params

    this._cacheService = cacheService
    this._cacheTTLSeconds = cacheTTLSeconds

    this._providersByChainId = new Map()
    this._providersByType = new Map()

    for (const provider of providers) {
      this._registerProvider(provider)
    }
  }

  /** PROTECTED */

  /**
   * @method _getBestProvider
   * @description Retrieves the best provider for the given chain
   * @param chainInfo The chain information of the provider to retrieve
   * @param forceUseProvider The provider type to force use
   * @returns The best provider for the given chain
   */
  protected _getBestProvider(params: {
    chainInfo: IChainInfo
    forceUseProvider?: ProviderType
  }): ManagerProvider {
    if (params.forceUseProvider !== undefined) {
      const provider = this._providersByType.get(params.forceUseProvider)
      if (!provider) {
        throw new Error(`Forced provider not found: ${params.forceUseProvider}`)
      }
      return provider
    }
    const providers = this._providersByChainId.get(params.chainInfo.chainId) || []
    if (providers.length === 0) {
      throw new Error(
        `No provider found for chainId: ${params.chainInfo.chainId} ${Array.from(
          this._providersByChainId.entries(),
        )
          .map(([key, value]) => `${key}: ${value.length}`)
          .join(', ')}`,
      )
    }

    // For now, we just return the first provider. In the future, we can implement a logic to
    // choose the best provider based on the input parameters or on the swap provider's capabilities.
    return providers[0]
  }

  /**
   * @method _executeWithFallback
   * @description Tries to execute an action sequentially through the available providers.
   *              If a provider throws an error, it catches it and falls back to the next provider.
   */
  protected async _executeWithFallback<T>(params: {
    chainInfo: IChainInfo
    action: (provider: ManagerProvider) => Promise<T>
    forceUseProvider?: ProviderType
  }): Promise<T> {
    if (params.forceUseProvider !== undefined) {
      const provider = this._providersByType.get(params.forceUseProvider)
      if (!provider) {
        throw new Error(`Forced provider not found: ${params.forceUseProvider}`)
      }
      return params.action(provider)
    }

    const providers = this._providersByChainId.get(params.chainInfo.chainId) || []
    if (providers.length === 0) {
      throw new Error(
        `No provider found for chainId: ${params.chainInfo.chainId} ${Array.from(
          this._providersByChainId.entries(),
        )
          .map(([key, value]) => `${key}: ${value.length}`)
          .join(', ')}`,
      )
    }

    let lastError: unknown
    for (const provider of providers) {
      try {
        return await params.action(provider)
      } catch (error) {
        lastError = error
      }
    }

    throw lastError || new Error(`All providers failed for chainId: ${params.chainInfo.chainId}`)
  }

  /**
   * @method _buildCacheKey
   * @description Constructs a standardized namespace key to prevent collisions.
   * Format: `[ClassName]:[MethodName]:[Arg1]:[Arg2]...`
   */
  protected _buildCacheKey(method: string, args: (string | number)[]): string {
    return `${this.constructor.name}:${method}:${args.join(':')}`
  }

  /**
   * @method _executeWithCacheAndFallback
   * @description Wraps the fallback execution with a caching layer.
   * It attempts to fetch from the cache first. If it misses, it calls the fallback chain
   * and caches the successful result. If `forceUseProvider` is set, the cache is bypassed entirely.
   */
  protected async _executeWithCacheAndFallback<T>(params: {
    cacheKey: string
    ttlSeconds?: number
    chainInfo: IChainInfo
    action: (provider: ManagerProvider) => Promise<T>
    forceUseProvider?: ProviderType
  }): Promise<T> {
    const bypassCache = params.forceUseProvider !== undefined
    const cacheTTL = params.ttlSeconds ?? this._cacheTTLSeconds

    // Check Cache
    if (this._cacheService && !bypassCache) {
      const cached = await this._cacheService.get<T>(params.cacheKey)
      if (cached !== undefined) {
        return cached
      }
    }

    // Execute through standard fallback mechanism
    const result = await this._executeWithFallback(params)

    // Save to Cache
    if (this._cacheService && !bypassCache && cacheTTL !== undefined) {
      await this._cacheService.set(params.cacheKey, result, cacheTTL)
    }

    return result
  }

  /** PRIVATE */

  /**
   * @method _registerProvider
   * @description Registers a provider to be used by the manager
   * @param provider The provider to register
   */
  private _registerProvider(provider: ManagerProvider): void {
    const forChainIds = provider.getSupportedChainIds()

    for (const chainId of forChainIds) {
      const providers = this._providersByChainId.get(chainId) || []
      providers.push(provider)
      this._providersByChainId.set(chainId, providers)
    }

    this._providersByType.set(provider.type, provider)
  }
}
