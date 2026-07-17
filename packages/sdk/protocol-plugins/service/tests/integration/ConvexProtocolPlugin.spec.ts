import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ConvexProtocolPlugin } from '../../src/plugins/convex/implementation/ConvexProtocolPlugin'
import { ConvexYieldPoolId } from '../../src/plugins/convex/implementation/ConvexYieldPoolId'
import { ConvexYieldPositionId } from '../../src/plugins/convex/implementation/ConvexYieldPositionId'
import { ConvexStakingPoolId } from '../../src/plugins/convex/implementation/ConvexStakingPoolId'
import { ConvexStakingPositionId } from '../../src/plugins/convex/implementation/ConvexStakingPositionId'
import { IConvexDataSource } from '../../src/plugins/convex/interfaces/IConvexDataSource'
import {
  IProtocolPluginContext,
} from '@thesolidchain/protocol-plugins-common'
import {
  IChainInfo,
  TokenAmount,
  Token,
  Percentage,
  Address,
  IFiatCurrencyAmount,
  Wallet,
} from '@thesolidchain/sdk-common'

const mockChainInfo = { id: 1, chainId: 1, name: 'Ethereum' } as unknown as IChainInfo
const mockUser = { wallet: Wallet.createFrom({ address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }) }) } as any

describe('ConvexProtocolPlugin', () => {
  let plugin: ConvexProtocolPlugin
  let mockContext: IProtocolPluginContext
  let mockDataSource: IConvexDataSource

  beforeEach(() => {
    mockContext = {
      provider: { chain: { id: 1 }, readContract: vi.fn() },
      tokensManager: { getTokenByAddress: vi.fn() },
      oracleManager: { getSpotPrice: vi.fn() },
    } as any

    const mockToken = Token.createFrom({
      address: Address.createFromEthereum({ value: '0x2222222222222222222222222222222222222222' }),
      decimals: 18,
      symbol: 'MOCK',
      name: 'Mock Token',
      chainInfo: mockChainInfo,
    })

    mockDataSource = {
      getPool: vi.fn().mockResolvedValue({
        underlyingToken: mockToken,
        receiptToken: mockToken,
        currentApy: Percentage.createFrom({ value: 5 }),
        totalValueLocked: undefined,
        pid: 0n,
      }),
      getUserPosition: vi.fn().mockResolvedValue({
        currentAmount: TokenAmount.createFrom({ token: mockToken, amount: '1000' }),
        principalAmount: TokenAmount.createFrom({ token: mockToken, amount: '1000' }),
      }),
    }

    plugin = new ConvexProtocolPlugin()
    plugin.initialize({ context: mockContext, dataSource: mockDataSource })
  })

  it('should initialize correctly', () => {
    expect(plugin.protocolName).toBe('Convex')
    expect(plugin.yield).toBeDefined()
    expect(plugin.stake).toBeDefined()
  })

  // --- Yield Tests ---
  describe('Yield Features', () => {
    const yieldPoolId = new ConvexYieldPoolId('0x3333333333333333333333333333333333333333', mockChainInfo)
    const yieldPositionId = new ConvexYieldPositionId('0x3333333333333333333333333333333333333333', '0x1111111111111111111111111111111111111111', mockChainInfo)
    const amount = TokenAmount.createFrom({
      token: Token.createFrom({
        address: Address.createFromEthereum({ value: '0x2222222222222222222222222222222222222222' }),
        decimals: 18,
        symbol: 'MOCK',
        name: 'Mock Token',
        chainInfo: mockChainInfo,
      }),
      amount: '1000000000000000000',
    })

    it('getYieldPoolInfo should return info', async () => {
      const info = await plugin.getYieldPoolInfo(yieldPoolId)
      expect(info.id).toBe(yieldPoolId)
      expect(info.currentApy.value).toBe(5)
    })

    it('getYieldPosition should return position', async () => {
      const pos = await plugin.getYieldPosition(yieldPositionId)
      expect(pos.id).toBe(yieldPositionId)
      expect(pos.currentAmount.toSolidityValue().toString()).toBe('1000000000000000000000')
    })

    it('getDepositTransaction should generate calldata for Booster', async () => {
      const tx = await plugin.getDepositTransaction({ poolId: yieldPoolId, amount, user: mockUser })
      expect(tx.transaction.target.value.toLowerCase()).toBe('0xf403c135812408bfbe8713b5a23a04b3d48aae31') // Booster
      expect(tx.transaction.value).toBe('0')
      expect(tx.transaction.calldata).toBeDefined()
    })

    it('getWithdrawTransaction should generate calldata for RewardPool', async () => {
      const tx = await plugin.getWithdrawTransaction({ positionId: yieldPositionId, amount, user: mockUser })
      expect(tx.transaction.target.value).toBe(yieldPositionId.tokenAddress)
      expect(tx.transaction.calldata).toBeDefined()
    })
  })

  // --- Staking Tests ---
  describe('Staking Features', () => {
    const stakingPoolId = new ConvexStakingPoolId('0x4444444444444444444444444444444444444444', mockChainInfo)
    const stakingPositionId = new ConvexStakingPositionId(stakingPoolId, mockUser.wallet, mockChainInfo)
    const amount = TokenAmount.createFrom({
      token: Token.createFrom({
        address: Address.createFromEthereum({ value: '0x2222222222222222222222222222222222222222' }),
        decimals: 18,
        symbol: 'MOCK',
        name: 'Mock Token',
        chainInfo: mockChainInfo,
      }),
      amount: '1000000000000000000',
    })

    it('getStakingPoolInfo should return info', async () => {
      const info = await plugin.getStakingPoolInfo(stakingPoolId)
      expect(info.id).toBe(stakingPoolId)
      expect(info.currentApy.value).toBe(5)
    })

    it('getStakingPosition should return position', async () => {
      const pos = await plugin.getStakingPosition(stakingPositionId)
      expect(pos.id).toBe(stakingPositionId)
      expect(pos.currentAmount.toSolidityValue().toString()).toBe('1000000000000000000000')
    })

    it('getStakeTransaction should generate calldata', async () => {
      const tx = await plugin.getStakeTransaction({ poolId: stakingPoolId, amount, user: mockUser })
      expect(tx.transaction.target.value).toBe(stakingPoolId.tokenAddress)
      expect(tx.transaction.calldata).toBeDefined()
    })

    it('getUnstakeTransaction should generate calldata', async () => {
      const tx = await plugin.getUnstakeTransaction({ positionId: stakingPositionId, amount, user: mockUser })
      expect(tx.transaction.target.value).toBe(stakingPositionId.poolId.tokenAddress)
      expect(tx.transaction.calldata).toBeDefined()
    })
  })

  // --- Hybrid Method Tests ---
  describe('Hybrid Claim Transaction', () => {
    it('getClaimTransaction should accept YieldPositionId', async () => {
      const yieldPositionId = new ConvexYieldPositionId('0x3333333333333333333333333333333333333333', '0x1111111111111111111111111111111111111111', mockChainInfo)
      const tx = await plugin.getClaimTransaction({ positionId: yieldPositionId, user: mockUser })
      expect(tx.transaction.target.value).toBe(yieldPositionId.tokenAddress)
      expect(tx.transaction.calldata).toBeDefined()
    })

    it('getClaimTransaction should accept StakingPositionId', async () => {
      const stakingPoolId = new ConvexStakingPoolId('0x4444444444444444444444444444444444444444', mockChainInfo)
      const stakingPositionId = new ConvexStakingPositionId(stakingPoolId, mockUser.wallet, mockChainInfo)
      const tx = await plugin.getClaimTransaction({ positionId: stakingPositionId, user: mockUser })
      expect(tx.transaction.target.value).toBe(stakingPositionId.poolId.tokenAddress)
      expect(tx.transaction.calldata).toBeDefined()
    })
  })
})
