import { 
  DataOrchestrator, 
  MemoryCacheLayer, 
  VolatilityProfile, 
  CacheLayer, 
  GlobalCacheConfig,
  Cache,
  ICacheAware
} from '../src/cache';

const MOCK_CONFIG: GlobalCacheConfig = {
  [VolatilityProfile.STATIC]: { layers: [CacheLayer.L1_MEMORY], ttl: 'never' },
  [VolatilityProfile.BLOCK_BOUND]: { layers: [CacheLayer.L1_MEMORY], ttl: 'new_block' },
  [VolatilityProfile.TIME_FAST]: { layers: [CacheLayer.L1_MEMORY], ttl: 60 },
  [VolatilityProfile.TIME_SLOW]: { layers: [CacheLayer.L1_MEMORY], ttl: 3600 },
};

class MockManager implements ICacheAware {
  public cacheOrchestrator: DataOrchestrator;
  public fetchCount = 0;

  constructor(orchestrator: DataOrchestrator) {
    this.cacheOrchestrator = orchestrator;
  }

  @Cache(VolatilityProfile.STATIC)
  public async getStaticData(id: number) {
    this.fetchCount++;
    return `static_data_${id}`;
  }

  @Cache(VolatilityProfile.BLOCK_BOUND)
  public async getBlockData(address: string) {
    this.fetchCount++;
    return `block_data_${address}`;
  }
}

describe('Layered Cache Architecture', () => {
  let memoryLayer: MemoryCacheLayer;
  let orchestrator: DataOrchestrator;
  let manager: MockManager;

  beforeEach(() => {
    memoryLayer = new MemoryCacheLayer();
    orchestrator = new DataOrchestrator(MOCK_CONFIG, [memoryLayer]);
    manager = new MockManager(orchestrator);
  });

  it('should cache static data and not re-fetch', async () => {
    const res1 = await manager.getStaticData(1);
    expect(res1).toBe('static_data_1');
    expect(manager.fetchCount).toBe(1);

    const res2 = await manager.getStaticData(1);
    expect(res2).toBe('static_data_1');
    expect(manager.fetchCount).toBe(1); // Should hit cache

    const res3 = await manager.getStaticData(2);
    expect(res3).toBe('static_data_2');
    expect(manager.fetchCount).toBe(2); // New arg = new key
  });

  it('should invalidate block-bound data when a new block arrives', async () => {
    const addr = '0x123';
    
    await manager.getBlockData(addr);
    expect(manager.fetchCount).toBe(1);

    // Should hit cache
    await manager.getBlockData(addr);
    expect(manager.fetchCount).toBe(1);

    // Simulate a new block
    await orchestrator.notifyNewBlock(100n);

    // Cache should be invalidated, so it fetches again
    await manager.getBlockData(addr);
    expect(manager.fetchCount).toBe(2);
  });

  it('should fallback to RPC (fetcher) if no cache layer hits', async () => {
    // We configure a profile that uses an inactive layer (L3)
    const orchestratorL3 = new DataOrchestrator(
      { ...MOCK_CONFIG, [VolatilityProfile.STATIC]: { layers: [CacheLayer.L3_AWS_API], ttl: 'never' } },
      [] // No layers active
    );
    const mgr = new MockManager(orchestratorL3);

    const res = await mgr.getStaticData(1);
    expect(res).toBe('static_data_1');
    expect(mgr.fetchCount).toBe(1);

    // Because there is no active layer handling L3, it will always fallback to fetcher
    await mgr.getStaticData(1);
    expect(mgr.fetchCount).toBe(2);
  });
});
