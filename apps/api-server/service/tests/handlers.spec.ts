import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createCallerFactory } from '../src/SDKTRPC'
import { sdkAppRouter } from '../src/SDKAppRouter'
import { ChainInfo, ChainIds, Address, Token, TokenAmount, IntentSwapProviderType, SwapProviderType, User } from '@thesolidchain/sdk-common'
import { AaveV3LendingPoolId, AaveV3LendingPositionId, AaveV3Protocol, EmodeType } from '@thesolidchain/protocol-plugins'

const mockTokensManager = {
  getTokenByAddress: vi.fn(),
  getTokenByName: vi.fn(),
  getTokenBySymbol: vi.fn(),
  getTokenTotalSupply: vi.fn(),
}

const mockOracleManager = {
  getSpotPrice: vi.fn(),
  getSpotPrices: vi.fn(),
}

const mockSwapManager = {
  getSwapDataExactInput: vi.fn(),
  getSwapQuoteExactInput: vi.fn(),
}

const mockIntentSwapsManager = {
  getSellOrderQuote: vi.fn().mockResolvedValue('quote'),
  sendOrder: vi.fn().mockResolvedValue('send'),
  cancelOrder: vi.fn().mockResolvedValue('cancel'),
  checkOrder: vi.fn().mockResolvedValue('check'),
}

const mockProtocolManager = {
  lending: {
    getLendingPool: vi.fn(),
    getLendingPoolInfo: vi.fn(),
  }
}

const mockPortfolioManager = {
  getWalletHoldings: vi.fn(),
  getUserPortfolio: vi.fn(),
}

const mockOrderPlanner = {
  buildOrder: vi.fn(),
}

const mockCtx: any = {
  callKey: 'test-call-key',
  tokensManager: mockTokensManager,
  oracleManager: mockOracleManager,
  swapManager: mockSwapManager,
  intentSwapsManager: mockIntentSwapsManager,
  protocolManager: mockProtocolManager,
  portfolioManager: mockPortfolioManager,
  orderPlannerService: mockOrderPlanner,
}

const createCaller = createCallerFactory(sdkAppRouter)

describe('Handlers', () => {
  let caller: ReturnType<typeof createCaller>

  const chainInfo = ChainInfo.createFrom({ chainId: ChainIds.Mainnet, name: 'Mainnet' })
  const address = Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' })
  const token = Token.createFrom({ address, chainInfo, symbol: 'ABC', name: 'ABC', decimals: 18 })
  const tokenAmount = TokenAmount.createFrom({ token, amount: '1000' })
  const protocol = AaveV3Protocol.createFrom({ chainInfo })
  const lendingPoolId = AaveV3LendingPoolId.createFrom({ protocol, collateralToken: token, debtToken: token, emodeType: EmodeType.None })
  const positionId = AaveV3LendingPositionId.createFrom({ id: '0x1', poolId: lendingPoolId, walletAddress: address })
  const user = User.createFrom({ wallet: { address }, chainInfo })

  beforeEach(() => {
    caller = createCaller(mockCtx)
    vi.clearAllMocks()
  })

  describe('debug', () => {
    it('should ping', async () => {
      const res = await caller.debug.ping({ test: 1 })
      expect(res.input).toContain('test')
    })
  })

  describe('protocols', () => {
    it('getPosition', async () => {
      await expect(caller.protocols.getPosition(positionId as any)).rejects.toThrow('Not implemented')
    })
    it('getLendingPool', async () => {
      mockProtocolManager.lending.getLendingPool.mockResolvedValue('pool')
      const res = await caller.protocols.getLendingPool(lendingPoolId as any)
      expect(res).toBe('pool')
    })
    it('getLendingPoolInfo', async () => {
      mockProtocolManager.lending.getLendingPoolInfo.mockResolvedValue('poolInfo')
      const res = await caller.protocols.getLendingPoolInfo(lendingPoolId as any)
      expect(res).toBe('poolInfo')
    })
  })

  describe('tokens', () => {
    it('getTokenByAddress', async () => {
      mockTokensManager.getTokenByAddress.mockResolvedValue('token')
      const res = await caller.tokens.getTokenByAddress({ chainInfo, address })
      expect(res).toBe('token')
    })
    
    it('getTokenByName', async () => {
      mockTokensManager.getTokenByName.mockResolvedValue('token')
      const res = await caller.tokens.getTokenByName({ chainInfo, name: 'ABC' })
      expect(res).toBe('token')
    })

    it('getTokenBySymbol', async () => {
      mockTokensManager.getTokenBySymbol.mockResolvedValue('token')
      const res = await caller.tokens.getTokenBySymbol({ chainInfo, symbol: 'ABC' })
      expect(res).toBe('token')
    })

    it('getTokenTotalSupply', async () => {
      mockTokensManager.getTokenTotalSupply.mockResolvedValue('supply')
      const res = await caller.tokens.getTokenTotalSupply({ token })
      expect(res).toBe('supply')
    })
  })

  describe('orders', () => {
    it('buildOrder', async () => {
      await expect(caller.orders.buildOrder({ chainInfo, user, intent: { intentType: 0 } as any })).rejects.toThrow('Required')
    })
  })

  describe('intentSwaps', () => {
    const sig = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef12'
    
    it('getSellOrderQuote', async () => {
      const res = await caller.intentSwaps.getSellOrderQuote({ providerType: IntentSwapProviderType.CowSwap, fromAmount: tokenAmount, toToken: token, sender: address } as any)
      expect(res).toBe('quote')
    })
    it('sendOrder', async () => {
      const res = await caller.intentSwaps.sendOrder({ providerType: IntentSwapProviderType.CowSwap, chainId: ChainIds.Mainnet, fromAmount: tokenAmount, sender: address, order: {}, signingResult: { signature: sig, signingScheme: 'eip712' } as any } as any)
      expect(res).toBe('send')
    })
    it('cancelOrder', async () => {
      const res = await caller.intentSwaps.cancelOrder({ providerType: IntentSwapProviderType.CowSwap, chainId: ChainIds.Mainnet, orderId: '0x123', signingResult: { signature: sig, signingScheme: 'eip712' } as any } as any)
      expect(res).toBe('cancel')
    })
    it('checkOrder', async () => {
      const res = await caller.intentSwaps.checkOrder({ providerType: IntentSwapProviderType.CowSwap, chainId: ChainIds.Mainnet, orderId: '0x123' } as any)
      expect(res).toBe('check')
    })
  })

  describe('swaps', () => {
    it('getSwapDataExactInput', async () => {
      mockSwapManager.getSwapDataExactInput.mockResolvedValue('data')
      const res = await caller.swaps.getSwapDataExactInput({ providerType: SwapProviderType.OneInch, fromAmount: tokenAmount, toToken: token, recipient: address, slippage: { value: 1 } as any } as any)
      expect(res).toBe('data')
    })
    it('getSwapQuoteExactInput', async () => {
      mockSwapManager.getSwapQuoteExactInput.mockResolvedValue('quote')
      const res = await caller.swaps.getSwapQuoteExactInput({ providerType: SwapProviderType.OneInch, fromAmount: tokenAmount, toToken: token, slippage: { value: 1 } as any } as any)
      expect(res).toBe('quote')
    })
  })

  describe('oracle', () => {
    it('getSpotPrice', async () => {
      mockOracleManager.getSpotPrice.mockResolvedValue('price')
      const res = await caller.oracle.getSpotPrice({ baseToken: token } as any)
      expect(res).toBe('price')
    })
    it('getSpotPrices', async () => {
      mockOracleManager.getSpotPrices.mockResolvedValue('prices')
      const res = await caller.oracle.getSpotPrices({ baseTokens: [token], chainInfo } as any)
      expect(res).toBe('prices')
    })
  })

  describe('portfolio', () => {
    it('getWalletHoldings', async () => {
      mockPortfolioManager.getWalletHoldings.mockResolvedValue('holdings')
      const res = await caller.portfolio.getWalletHoldings({ user } as any)
      expect(res).toBe('holdings')
    })
    it('getUserPortfolio', async () => {
      mockPortfolioManager.getUserPortfolio.mockResolvedValue('portfolio')
      const res = await caller.portfolio.getUserPortfolio({ user } as any)
      expect(res).toBe('portfolio')
    })
  })
})
