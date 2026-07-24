import { ChainFamilyMap, Price, FiatCurrency } from '@thesolidchain/sdk-common'
import { vi } from 'vitest'
import { DefaultMakerDataSource } from '../../../src/plugins/maker/implementation/DefaultMakerDataSource'

/** RAY precision (1e27) used by Maker/Sky to scale the per-second savings rate. */
const RAY = 10n ** 27n

/** Seconds in a (365-day) year, matching the annualization used by the data source. */
const SECONDS_PER_YEAR = 31_536_000

/**
 * Builds a RAY-scaled (1e27) per-second savings rate that annualizes to (approximately) the
 * given fractional APY, mirroring how `ssr()`/`dsr()` encode a compounding per-second rate.
 * @param apy The target fractional APY (e.g. 0.05 for 5%).
 */
function ratePerSecondRayForApy(apy: number): bigint {
  const perSecondRate = Math.pow(1 + apy, 1 / SECONDS_PER_YEAR)
  const increment = perSecondRate - 1
  return RAY + BigInt(Math.round(increment * 1e27))
}

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

    ctx.provider.readContract.mockImplementation(
      async ({ functionName }: { functionName: string }) => {
        switch (functionName) {
          case 'asset':
            return '0x6B175474E89094C44Da98b954EedeAC495271d0F'
          case 'ssr':
            throw new Error('function selector not recognized (no ssr on this vault)')
          case 'dsr':
            throw new Error('function selector not recognized (no dsr on this vault)')
          case 'totalAssets':
            // totalAssets raw = 500e18 base units => 500 DAI human-readable
            return 500000000000000000000n
          default:
            throw new Error(`unexpected call: ${functionName}`)
        }
      },
    )

    ctx.oracleManager.getSpotPrice.mockResolvedValueOnce({
      price: Price.createFrom({
        value: '1',
        base: mockUnderlyingToken,
        quote: FiatCurrency.USD,
      }),
    })

    const result = await dataSource.getVault('0x4444444444444444444444444444444444444444')

    // Neither ssr() nor dsr() is available - APY falls back safely to 0 instead of throwing.
    expect(result.currentApy.value).toBe(0)
    // 500 DAI at 1 USD/DAI = 500 USD, NOT 5e20
    expect(result.totalValueLocked?.amount).toBe('500')
  })

  it('should compute the real APY from the sUSDS Sky Savings Rate (ssr)', async () => {
    const mockReceiptToken = {
      decimals: 18,
      symbol: 'sUSDS',
      name: 'Savings USDS',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x4444444444444444444444444444444444444444', type: 'Ethereum' },
    } as any
    const mockUnderlyingToken = {
      decimals: 18,
      symbol: 'USDS',
      name: 'USDS Stablecoin',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0xdC035D45d973E3EC169d2276DDab16f1e407384F', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress
      .mockResolvedValueOnce(mockReceiptToken)
      .mockResolvedValueOnce(mockUnderlyingToken)

    const ratePerSecondRay = ratePerSecondRayForApy(0.05)

    ctx.provider.readContract.mockImplementation(
      async ({ functionName }: { functionName: string }) => {
        switch (functionName) {
          case 'asset':
            return '0xdC035D45d973E3EC169d2276DDab16f1e407384F'
          case 'ssr':
            return ratePerSecondRay
          case 'totalAssets':
            return 0n
          default:
            throw new Error(`unexpected call: ${functionName}`)
        }
      },
    )

    ctx.oracleManager.getSpotPrice.mockResolvedValueOnce(undefined)

    const result = await dataSource.getVault('0x4444444444444444444444444444444444444444')

    // ~5% APY, allowing for the tiny rounding introduced by encoding/decoding the RAY rate.
    expect(result.currentApy.value).toBeCloseTo(0.05, 6)
  })

  it('should fall back to the legacy DAI Pot dsr() when ssr() is unavailable', async () => {
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

    const ratePerSecondRay = ratePerSecondRayForApy(0.03)

    ctx.provider.readContract.mockImplementation(
      async ({ functionName }: { functionName: string }) => {
        switch (functionName) {
          case 'asset':
            return '0x6B175474E89094C44Da98b954EedeAC495271d0F'
          case 'ssr':
            throw new Error('function selector not recognized (legacy Pot has no ssr)')
          case 'dsr':
            return ratePerSecondRay
          case 'totalAssets':
            return 0n
          default:
            throw new Error(`unexpected call: ${functionName}`)
        }
      },
    )

    ctx.oracleManager.getSpotPrice.mockResolvedValueOnce(undefined)

    const result = await dataSource.getVault('0x4444444444444444444444444444444444444444')

    expect(result.currentApy.value).toBeCloseTo(0.03, 6)
  })

  it('should fall back to a 0 APY (without throwing) when neither ssr() nor dsr() are available', async () => {
    const mockReceiptToken = {
      decimals: 18,
      symbol: 'xTOKEN',
      name: 'Unknown Vault Token',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x4444444444444444444444444444444444444444', type: 'Ethereum' },
    } as any
    const mockUnderlyingToken = {
      decimals: 18,
      symbol: 'TOKEN',
      name: 'Unknown Token',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      address: { value: '0x9999999999999999999999999999999999999999', type: 'Ethereum' },
    } as any

    ctx.tokensManager.getTokenByAddress
      .mockResolvedValueOnce(mockReceiptToken)
      .mockResolvedValueOnce(mockUnderlyingToken)

    ctx.provider.readContract.mockImplementation(
      async ({ functionName }: { functionName: string }) => {
        switch (functionName) {
          case 'asset':
            return '0x9999999999999999999999999999999999999999'
          case 'ssr':
            throw new Error('function selector not recognized')
          case 'dsr':
            throw new Error('function selector not recognized')
          case 'totalAssets':
            return 0n
          default:
            throw new Error(`unexpected call: ${functionName}`)
        }
      },
    )

    ctx.oracleManager.getSpotPrice.mockResolvedValueOnce(undefined)

    const result = await dataSource.getVault('0x4444444444444444444444444444444444444444')

    expect(result.currentApy.value).toBe(0)
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
