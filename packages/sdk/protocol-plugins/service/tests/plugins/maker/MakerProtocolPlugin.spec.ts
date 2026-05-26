import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MakerProtocolPlugin } from '../../../src/plugins/maker/implementation/MakerProtocolPlugin'
import { MakerYieldPoolId } from '../../../src/plugins/maker/implementation/MakerYieldPoolId'
import { MakerYieldPositionId } from '../../../src/plugins/maker/implementation/MakerYieldPositionId'
import { IMakerDataSource } from '../../../src/plugins/maker/interfaces/IMakerDataSource'
import {
  ProtocolName,
  ChainFamilyName,
  ChainInfo,
  Address,
  TokenAmount,
  User,
  Wallet,
  Percentage,
  YieldType,
} from '@thesolidchain/sdk-common'
import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { encodeFunctionData, parseAbi } from 'viem'

describe('MakerProtocolPlugin', () => {
  let plugin: MakerProtocolPlugin
  let mockContext: IProtocolPluginContext
  let mockDataSource: IMakerDataSource

  const chainInfo = ChainInfo.createFrom({
    chainId: 1,
    name: 'Ethereum Mainnet',
  })

  beforeEach(() => {
    mockContext = {
      provider: {
        chain: { id: 1 },
      } as any,
      tokensManager: {} as any,
      oracleManager: {} as any,
    }

    mockDataSource = {
      getVault: vi.fn(),
      getUserPosition: vi.fn(),
    }

    plugin = new MakerProtocolPlugin()
    plugin.initialize({ context: mockContext, dataSource: mockDataSource })
  })

  it('should have correct basic properties', () => {
    expect(plugin.protocolName).toBe(ProtocolName.Maker)
    expect(plugin.supportedChains.length).toBeGreaterThan(0)
  })

  it('should get deposit transaction', async () => {
    const poolId = new MakerYieldPoolId('0x83F20F44975D03b1b09e64809B757c47f942BEeA', chainInfo)
    const amount = TokenAmount.createFrom({
      token: { address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }), decimals: 18, chainInfo: { chainId: 1, name: 'Ethereum Mainnet' }, symbol: 'DAI', name: 'DAI' } as any,
      amount: '1',
    })
    const user = User.createFrom({ wallet: Wallet.createFrom({ address: Address.createFromEthereum({ value: '0x1234567890123456789012345678901234567890' }) }) })

    const result = await plugin.getDepositTransaction({ poolId, amount, user })

    const expectedAbi = parseAbi(['function deposit(uint256 assets, address receiver) external returns (uint256)'])
    const expectedCalldata = encodeFunctionData({
      abi: expectedAbi,
      functionName: 'deposit',
      args: [1000000000000000000n, '0x1234567890123456789012345678901234567890'],
    })

    expect(result.transaction.target.value).toBe('0x83F20F44975D03b1b09e64809B757c47f942BEeA')
    expect(result.transaction.calldata).toBe(expectedCalldata)
    expect(result.transaction.value).toBe('0')
  })

  it('should get withdraw transaction', async () => {
    const positionId = new MakerYieldPositionId('0x83F20F44975D03b1b09e64809B757c47f942BEeA', '0x1234567890123456789012345678901234567890', chainInfo)
    const amount = TokenAmount.createFrom({
      token: { address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }), decimals: 18, chainInfo: { chainId: 1, name: 'Ethereum Mainnet' }, symbol: 'sDAI', name: 'sDAI' } as any,
      amount: '1',
    })
    const user = User.createFrom({ wallet: Wallet.createFrom({ address: Address.createFromEthereum({ value: '0x1234567890123456789012345678901234567890' }) }) })

    const result = await plugin.getWithdrawTransaction({ positionId, amount, user })

    const expectedAbi = parseAbi(['function withdraw(uint256 assets, address receiver, address owner) external returns (uint256)'])
    const expectedCalldata = encodeFunctionData({
      abi: expectedAbi,
      functionName: 'withdraw',
      args: [1000000000000000000n, '0x1234567890123456789012345678901234567890', '0x1234567890123456789012345678901234567890'],
    })

    expect(result.transaction.target.value).toBe('0x83F20F44975D03b1b09e64809B757c47f942BEeA')
    expect(result.transaction.calldata).toBe(expectedCalldata)
    expect(result.transaction.value).toBe('0')
  })
})
