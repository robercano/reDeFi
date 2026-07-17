import { ChainFamilyMap, Price, FiatCurrency } from '@thesolidchain/sdk-common'
import { vi } from 'vitest'
import { DefaultConvexDataSource } from '../../../src/plugins/convex/implementation/DefaultConvexDataSource'

describe('DefaultConvexDataSource', () => {
  let ctx: any
  let dataSource: DefaultConvexDataSource

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

    dataSource = new DefaultConvexDataSource(ctx)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should compute a human-readable TVL from on-chain totalSupply, not the inflated raw base-unit value', async () => {
    const mockReceiptToken = {
      decimals: 18,
      symbol: 'cvxLP',
      name: 'Convex LP',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x5555555555555555555555555555555555555555', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress.mockResolvedValueOnce(mockReceiptToken)

    // totalSupply raw = 250e18 base units => 250 LP tokens human-readable
    ctx.provider.readContract.mockResolvedValueOnce(250000000000000000000n)

    ctx.oracleManager.getSpotPrice.mockResolvedValueOnce({
      price: Price.createFrom({
        value: '1',
        base: mockReceiptToken,
        quote: FiatCurrency.USD,
      }),
    })

    const result = await dataSource.getPool('0x5555555555555555555555555555555555555555')

    expect(result.currentApy.value).toBe(0)
    // 250 LP at 1 USD/LP = 250 USD, NOT 2.5e20
    expect(result.totalValueLocked?.amount).toBe('250')
  })

  it('should return a human-readable user position amount for a known base-unit balance', async () => {
    const mockUnderlyingToken = {
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress.mockResolvedValueOnce(mockUnderlyingToken)

    // 2 USDC in base units (6 decimals)
    ctx.provider.readContract.mockResolvedValueOnce(2000000n)

    const result = await dataSource.getUserPosition(
      '0x5555555555555555555555555555555555555555',
      '0x2222222222222222222222222222222222222222',
    )

    // 2 USDC base-unit (2000000, 6 decimals) must map to human-readable "2", NOT "2000000"
    expect(result.currentAmount.amount).toBe('2')
    expect(result.principalAmount.amount).toBe('2')
  })
})
