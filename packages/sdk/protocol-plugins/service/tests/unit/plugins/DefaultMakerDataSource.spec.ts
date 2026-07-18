import { ChainFamilyMap, Price, FiatCurrency } from '@thesolidchain/sdk-common'
import { vi } from 'vitest'
import { DefaultMakerDataSource } from '../../../src/plugins/maker/implementation/DefaultMakerDataSource'

describe('DefaultMakerDataSource', () => {
  let ctx: any
  let dataSource: DefaultMakerDataSource

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

    dataSource = new DefaultMakerDataSource(ctx)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should compute a human-readable TVL from on-chain totalAssets, not the inflated raw base-unit value', async () => {
    const mockReceiptToken = {
      decimals: 18,
      symbol: 'sDAI',
      name: 'Savings DAI',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x4444444444444444444444444444444444444444', type: 'Ethereum' },
    } as any
    const mockUnderlyingToken = {
      decimals: 18,
      symbol: 'DAI',
      name: 'Dai Stablecoin',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x6B175474E89094C44Da98b954EedeAC495271d0F', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress
      .mockResolvedValueOnce(mockReceiptToken)
      .mockResolvedValueOnce(mockUnderlyingToken)

    ctx.provider.readContract
      .mockResolvedValueOnce('0x6B175474E89094C44Da98b954EedeAC495271d0F') // asset()
      // totalAssets raw = 500e18 base units => 500 DAI human-readable
      .mockResolvedValueOnce(500000000000000000000n)

    ctx.oracleManager.getSpotPrice.mockResolvedValueOnce({
      price: Price.createFrom({
        value: '1',
        base: mockUnderlyingToken,
        quote: FiatCurrency.USD,
      }),
    })

    const result = await dataSource.getVault('0x4444444444444444444444444444444444444444')

    expect(result.currentApy.value).toBe(0)
    // 500 DAI at 1 USD/DAI = 500 USD, NOT 5e20
    expect(result.totalValueLocked?.amount).toBe('500')
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

    ctx.provider.readContract
      .mockResolvedValueOnce('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48') // asset()
      .mockResolvedValueOnce(1000000n) // balanceOf (shares)
      .mockResolvedValueOnce(2000000n) // convertToAssets -> 2 USDC in base units

    const result = await dataSource.getUserPosition(
      '0x4444444444444444444444444444444444444444',
      '0x2222222222222222222222222222222222222222',
    )

    // 2 USDC base-unit (2000000, 6 decimals) must map to human-readable "2", NOT "2000000"
    expect(result.currentAmount.amount).toBe('2')
    expect(result.principalAmount.amount).toBe('2')
  })
})
