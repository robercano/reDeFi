import { describe, it, expect, beforeEach, vi } from 'vitest'
import { decodeFunctionData, parseAbi } from 'viem'
import { ConvexProtocolPlugin } from '../../../src/plugins/convex/implementation/ConvexProtocolPlugin'
import { ConvexYieldPoolId } from '../../../src/plugins/convex/implementation/ConvexYieldPoolId'
import { ConvexYieldPositionId } from '../../../src/plugins/convex/implementation/ConvexYieldPositionId'
import { ConvexStakingPoolId } from '../../../src/plugins/convex/implementation/ConvexStakingPoolId'
import { ConvexStakingPositionId } from '../../../src/plugins/convex/implementation/ConvexStakingPositionId'
import { IConvexDataSource } from '../../../src/plugins/convex/interfaces/IConvexDataSource'
import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { IChainInfo, TokenAmount, Token, Percentage, Address, Wallet } from '@thesolidchain/sdk-common'

const mockChainInfo = { id: 1, chainId: 1, name: 'Ethereum' } as unknown as IChainInfo
const mockUser = {
  wallet: Wallet.createFrom({
    address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }),
  }),
} as any

const depositAbi = parseAbi([
  'function deposit(uint256 _pid, uint256 _amount, bool _stake) external returns (bool)',
])

describe('ConvexProtocolPlugin — pool ID resolution (#10)', () => {
  let plugin: ConvexProtocolPlugin
  let mockContext: IProtocolPluginContext
  let mockDataSource: IConvexDataSource

  const mockToken = Token.createFrom({
    address: Address.createFromEthereum({ value: '0x2222222222222222222222222222222222222222' }),
    decimals: 18,
    symbol: 'MOCK',
    name: 'Mock Token',
    chainInfo: mockChainInfo,
  })

  const yieldPoolId = new ConvexYieldPoolId(
    '0x3333333333333333333333333333333333333333',
    mockChainInfo,
  )

  const amount = TokenAmount.createFrom({
    token: mockToken,
    amount: '1',
  })

  function setupWithPid(pid: bigint) {
    mockContext = {
      provider: { chain: { id: 1 }, readContract: vi.fn() },
      tokensManager: { getTokenByAddress: vi.fn() },
      oracleManager: { getSpotPrice: vi.fn() },
    } as any

    mockDataSource = {
      getPool: vi.fn().mockResolvedValue({
        underlyingToken: mockToken,
        receiptToken: mockToken,
        currentApy: Percentage.createFrom({ value: 5 }),
        totalValueLocked: undefined,
        pid,
      }),
      getUserPosition: vi.fn().mockResolvedValue({
        currentAmount: TokenAmount.createFrom({ token: mockToken, amount: '1000' }),
        principalAmount: TokenAmount.createFrom({ token: mockToken, amount: '1000' }),
      }),
    }

    plugin = new ConvexProtocolPlugin()
    plugin.initialize({ context: mockContext, dataSource: mockDataSource })
  }

  beforeEach(() => {
    setupWithPid(0n)
  })

  it('never hardcodes pid=0: uses whatever pid the data source resolves for this pool', async () => {
    setupWithPid(137n)

    const tx = await plugin.getDepositTransaction({ poolId: yieldPoolId, amount, user: mockUser })

    const decoded = decodeFunctionData({ abi: depositAbi, data: tx.transaction.calldata })
    const [pidArg] = decoded.args

    expect(pidArg).toBe(137n)
    expect(mockDataSource.getPool).toHaveBeenCalledWith(yieldPoolId.tokenAddress)
  })

  it('reflects a pid of 0 only when the data source genuinely resolves pool 0 on-chain', async () => {
    setupWithPid(0n)

    const tx = await plugin.getDepositTransaction({ poolId: yieldPoolId, amount, user: mockUser })

    const decoded = decodeFunctionData({ abi: depositAbi, data: tx.transaction.calldata })
    expect(decoded.args[0]).toBe(0n)
  })

  it('targets the Convex Booster contract and encodes amount + auto-stake flag correctly', async () => {
    setupWithPid(42n)

    const tx = await plugin.getDepositTransaction({ poolId: yieldPoolId, amount, user: mockUser })

    expect(tx.transaction.target.value.toLowerCase()).toBe(
      '0xf403c135812408bfbe8713b5a23a04b3d48aae31',
    )

    const decoded = decodeFunctionData({ abi: depositAbi, data: tx.transaction.calldata })
    expect(decoded.args[0]).toBe(42n)
    expect(decoded.args[1]).toBe(1000000000000000000n)
    expect(decoded.args[2]).toBe(true)
  })

  it('propagates a data source failure instead of falling back to an unsafe default pid', async () => {
    setupWithPid(0n)
    ;(mockDataSource.getPool as any).mockRejectedValueOnce(new Error('pid resolution failed'))

    await expect(
      plugin.getDepositTransaction({ poolId: yieldPoolId, amount, user: mockUser }),
    ).rejects.toThrow('pid resolution failed')
  })

  describe('remaining plugin surface (real underlying token / APY flow from the data source)', () => {
    beforeEach(() => setupWithPid(0n))

    it('getYieldPoolInfo surfaces the real underlying token and APY resolved by the data source', async () => {
      const info = await plugin.getYieldPoolInfo(yieldPoolId)
      expect(info.id).toBe(yieldPoolId)
      expect(info.underlyingToken).toBe(mockToken)
      expect(info.currentApy.value).toBe(5)
      expect(mockDataSource.getPool).toHaveBeenCalledWith(yieldPoolId.tokenAddress)
    })

    it('getYieldPosition returns the position reported by the data source', async () => {
      const yieldPositionId = new ConvexYieldPositionId(
        yieldPoolId.tokenAddress,
        '0x1111111111111111111111111111111111111111',
        mockChainInfo,
      )
      const pos = await plugin.getYieldPosition(yieldPositionId)
      expect(pos.id).toBe(yieldPositionId)
      expect(pos.currentAmount.toSolidityValue().toString()).toBe('1000000000000000000000')
    })

    it('getWithdrawTransaction targets the reward pool contract', async () => {
      const yieldPositionId = new ConvexYieldPositionId(
        yieldPoolId.tokenAddress,
        '0x1111111111111111111111111111111111111111',
        mockChainInfo,
      )
      const tx = await plugin.getWithdrawTransaction({
        positionId: yieldPositionId,
        amount,
        user: mockUser,
      })
      expect(tx.transaction.target.value).toBe(yieldPositionId.tokenAddress)
      expect(tx.transaction.calldata).toBeDefined()
    })

    it('getStakingPoolInfo/getStakingPosition/getStakeTransaction/getUnstakeTransaction work against the resolved pool', async () => {
      const stakingPoolId = new ConvexStakingPoolId(
        '0x4444444444444444444444444444444444444444',
        mockChainInfo,
      )
      const stakingPositionId = new ConvexStakingPositionId(stakingPoolId, mockUser.wallet, mockChainInfo)

      const poolInfo = await plugin.getStakingPoolInfo(stakingPoolId)
      expect(poolInfo.currentApy.value).toBe(5)

      const position = await plugin.getStakingPosition(stakingPositionId)
      expect(position.id).toBe(stakingPositionId)

      const stakeTx = await plugin.getStakeTransaction({ poolId: stakingPoolId, amount, user: mockUser })
      expect(stakeTx.transaction.target.value).toBe(stakingPoolId.tokenAddress)

      const unstakeTx = await plugin.getUnstakeTransaction({
        positionId: stakingPositionId,
        amount,
        user: mockUser,
      })
      expect(unstakeTx.transaction.target.value).toBe(stakingPositionId.poolId.tokenAddress)
    })

    it('getClaimTransaction accepts both yield and staking position IDs', async () => {
      const yieldPositionId = new ConvexYieldPositionId(
        yieldPoolId.tokenAddress,
        '0x1111111111111111111111111111111111111111',
        mockChainInfo,
      )
      const yieldClaimTx = await plugin.getClaimTransaction({
        positionId: yieldPositionId,
        user: mockUser,
      })
      expect(yieldClaimTx.transaction.target.value).toBe(yieldPositionId.tokenAddress)

      const stakingPoolId = new ConvexStakingPoolId(
        '0x4444444444444444444444444444444444444444',
        mockChainInfo,
      )
      const stakingPositionId = new ConvexStakingPositionId(stakingPoolId, mockUser.wallet, mockChainInfo)
      const stakingClaimTx = await plugin.getClaimTransaction({
        positionId: stakingPositionId,
        user: mockUser,
      })
      expect(stakingClaimTx.transaction.target.value).toBe(stakingPositionId.poolId.tokenAddress)
    })

    it('rejects invalid pool/position IDs for every method', async () => {
      const invalidPoolId = { tokenAddress: '0x0', chainInfo: mockChainInfo } as any

      await expect(plugin.getYieldPoolInfo(invalidPoolId)).rejects.toThrow('Invalid Convex Yield Pool ID')
      await expect(plugin.getYieldPosition(invalidPoolId)).rejects.toThrow(
        'Invalid Convex Yield Position ID',
      )
      await expect(
        plugin.getDepositTransaction({ poolId: invalidPoolId, amount, user: mockUser }),
      ).rejects.toThrow('Invalid Convex Yield Pool ID')
      await expect(
        plugin.getWithdrawTransaction({ positionId: invalidPoolId, amount, user: mockUser }),
      ).rejects.toThrow('Invalid Convex Yield Position ID')
      await expect(plugin.getStakingPoolInfo(invalidPoolId)).rejects.toThrow(
        'Invalid Convex Staking Pool ID',
      )
      await expect(plugin.getStakingPosition(invalidPoolId)).rejects.toThrow(
        'Invalid Convex Staking Position ID',
      )
      await expect(
        plugin.getStakeTransaction({ poolId: invalidPoolId, amount, user: mockUser }),
      ).rejects.toThrow('Invalid Convex Staking Pool ID')
      await expect(
        plugin.getUnstakeTransaction({ positionId: invalidPoolId, amount, user: mockUser }),
      ).rejects.toThrow('Invalid Convex Staking Position ID')
      await expect(
        plugin.getClaimTransaction({ positionId: invalidPoolId, user: mockUser }),
      ).rejects.toThrow('Invalid Convex Position ID')
    })
  })
})
