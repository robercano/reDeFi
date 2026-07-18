import { ChainFamilyMap, Price, FiatCurrency } from '@thesolidchain/sdk-common'
import { vi } from 'vitest'
import { DefaultLidoDataSource } from '../../../src/plugins/lido/implementation/DefaultLidoDataSource'

describe('DefaultLidoDataSource', () => {
  let ctx: any
  let dataSource: DefaultLidoDataSource

  beforeEach(() => {
    ctx = {
      provider: {
        chain: { chainId: 1 },
        readContract: vi.fn(),
      },
      tokensManager: {
        getTokenByAddress: vi.fn(),
      },
      oracleManager: {
        getSpotPrice: vi.fn(),
      },
    }

    dataSource = new DefaultLidoDataSource(ctx)
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should compute a human-readable TVL from on-chain totalSupply, not the inflated raw base-unit value', async () => {
    const mockReceiptToken = {
      decimals: 18,
      symbol: 'stETH',
      name: 'Lido Staked ETH',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x3333333333333333333333333333333333333333', type: 'Ethereum' },
    } as any
    const mockUnderlyingToken = {
      decimals: 18,
      symbol: 'ETH',
      name: 'Ether',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress
      .mockResolvedValueOnce(mockReceiptToken)
      .mockResolvedValueOnce(mockUnderlyingToken)

    // totalSupply raw = 1000e18 base units => 1000 stETH human-readable
    ctx.provider.readContract.mockResolvedValueOnce(1000000000000000000000n)

    ctx.oracleManager.getSpotPrice.mockResolvedValueOnce({
      price: Price.createFrom({
        value: '1',
        base: mockReceiptToken,
        quote: FiatCurrency.USD,
      }),
    })
    ;(global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: { smaApr: 0.03 } }),
    })

    const result = await dataSource.getPool('0x3333333333333333333333333333333333333333')

    expect(result.currentApy.value).toBe(0.03)
    // 1000 stETH at 1 USD/stETH = 1000 USD, NOT 1e21
    expect(result.totalValueLocked?.amount).toBe('1000')
  })

  it('should return a human-readable user position amount for a known base-unit balance', async () => {
    const mockUnderlyingToken = {
      decimals: 18,
      symbol: 'ETH',
      name: 'Ether',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress.mockResolvedValueOnce(mockUnderlyingToken)

    // 2 stETH in base units (18 decimals)
    ctx.provider.readContract.mockResolvedValueOnce(2000000000000000000n)

    const result = await dataSource.getUserPosition(
      '0x3333333333333333333333333333333333333333',
      '0x2222222222222222222222222222222222222222',
    )

    // 2 ETH base-unit (2e18, 18 decimals) must map to human-readable "2", NOT "2000000000000000000"
    expect(result.currentAmount.amount).toBe('2')
    expect(result.principalAmount.amount).toBe('2')
  })
})
