import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import {
  Address,
  ChainFamilyMap,
  Price,
  TokenAmount,
  FiatCurrency,
} from '@thesolidchain/sdk-common'
import { vi } from 'vitest'
import { DefaultYearnDataSource } from '../../../src/plugins/yearn/implementation/DefaultYearnDataSource'

describe('DefaultYearnDataSource', () => {
  let ctx: any
  let dataSource: DefaultYearnDataSource

  beforeEach(() => {
    ctx = {
      provider: {
        chain: { chainId: 1 },
        readContract: vi.fn(),
        multicall: vi.fn(),
      },
      tokensManager: {
        getTokenByAddress: vi.fn(),
      },
      oracleManager: {
        getSpotPrice: vi.fn(),
      },
    }

    dataSource = new DefaultYearnDataSource(ctx)
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return vault data with APY and TVL from yDaemon', async () => {
    const mockReceiptToken = {
      decimals: 18,
      symbol: 'yvUSDC',
      name: 'yvUSDC',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x1111111111111111111111111111111111111111', type: 'Ethereum' },
    } as any
    const mockUnderlyingToken = {
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress
      .mockResolvedValueOnce(mockReceiptToken)
      .mockResolvedValueOnce(mockUnderlyingToken)

    ctx.provider.readContract.mockResolvedValueOnce('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48') // token()
    ;(global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        apr: { netAPR: 0.05 },
        tvl: { tvl: 1000000 },
      }),
    })

    const result = await dataSource.getVault('0x1111111111111111111111111111111111111111')

    expect(result.currentApy.value).toBe(0.05)
    expect(result.totalValueLocked?.amount).toBe('1000000')
    expect(result.receiptToken).toBe(mockReceiptToken)
    expect(result.underlyingToken).toBe(mockUnderlyingToken)
  })

  it('should fallback to on-chain TVL calculation if yDaemon fails', async () => {
    const mockReceiptToken = {
      decimals: 18,
      symbol: 'yvUSDC',
      name: 'yvUSDC',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x1111111111111111111111111111111111111111', type: 'Ethereum' },
    } as any
    const mockUnderlyingToken = {
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress
      .mockResolvedValueOnce(mockReceiptToken)
      .mockResolvedValueOnce(mockUnderlyingToken)

    ctx.provider.readContract
      .mockResolvedValueOnce('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48') // token()
      .mockResolvedValueOnce(1000000000n) // totalAssets()

    ctx.oracleManager.getSpotPrice.mockResolvedValueOnce({
      price: Price.createFrom({
        value: '1',
        base: mockUnderlyingToken,
        quote: FiatCurrency.USD,
      }),
    })
    ;(global.fetch as any).mockResolvedValueOnce({
      ok: false,
    })

    const result = await dataSource.getVault('0x1111111111111111111111111111111111111111')

    expect(result.currentApy.value).toBe(0)
    // 1000000000n raw at 6 decimals = 1000 USDC * 1 USD/USDC = 1000 USD
    expect(result.totalValueLocked?.amount).toBe('1000')
  })

  it('should get user position', async () => {
    const mockReceiptToken = {
      decimals: 18,
      symbol: 'yvUSDC',
      name: 'yvUSDC',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x1111111111111111111111111111111111111111', type: 'Ethereum' },
    } as any
    const mockUnderlyingToken = {
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress
      .mockResolvedValueOnce(mockReceiptToken)
      .mockResolvedValueOnce(mockUnderlyingToken)

    ctx.provider.multicall.mockResolvedValueOnce([
      { result: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' }, // token()
      { result: 1000000n }, // pricePerShare
      { result: 2000000000000000000n }, // balanceOf (2 yvUSDC)
    ])

    const result = await dataSource.getUserPosition(
      '0x1111111111111111111111111111111111111111',
      '0x2222222222222222222222222222222222222222',
    )

    // balance = 2e18 * 1e6 / 1e18 = 2e6 raw units at 6 decimals = 2 USDC
    expect(result.currentAmount.amount).toBe('2')
    expect(result.principalAmount.amount).toBe('2')
  })

  it('should return human-readable amounts, not inflated base-unit values, for a known position', async () => {
    const mockReceiptToken = {
      decimals: 18,
      symbol: 'yvUSDC',
      name: 'yvUSDC',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x1111111111111111111111111111111111111111', type: 'Ethereum' },
    } as any
    const mockUnderlyingToken = {
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress
      .mockResolvedValueOnce(mockReceiptToken)
      .mockResolvedValueOnce(mockUnderlyingToken)

    // pricePerShare = 1e18 (1:1), balance = 2e18 shares -> underlying raw = 2e6 (2 USDC base units)
    ctx.provider.multicall.mockResolvedValueOnce([
      { result: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' }, // token()
      { result: 1000000000000000000n }, // pricePerShare (1e18)
      { result: 2000000n }, // balanceOf shares such that underlying raw = 2000000 (2 USDC)
    ])

    const result = await dataSource.getUserPosition(
      '0x1111111111111111111111111111111111111111',
      '0x2222222222222222222222222222222222222222',
    )

    // 2 USDC base-unit (2000000, 6 decimals) must map to human-readable "2", NOT "2000000"
    expect(result.currentAmount.amount).toBe('2')
    expect(result.principalAmount.amount).toBe('2')
  })
})
