import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { ChainFamilyMap, ProtocolName } from '@thesolidchain/sdk-common'
import assert from 'assert'
import { YearnProtocolPlugin } from '../../../src/plugins/yearn/implementation/YearnProtocolPlugin'
import { YearnYieldPoolId } from '../../../src/plugins/yearn/implementation/YearnYieldPoolId'
import { YearnYieldPositionId } from '../../../src/plugins/yearn/implementation/YearnYieldPositionId'
import { isYearnYieldPoolId } from '../../../src/plugins/yearn/interfaces/IYearnYieldPoolId'
import { createProtocolPluginContext } from '../../utils/CreateProtocolPluginContext'
import { getErrorMessage } from '../../utils/ErrorMessage'

import {
  IYearnDataSource,
  YearnVaultDto,
  YearnPositionDto,
} from '../../../src/plugins/yearn/interfaces/IYearnDataSource'
import { Percentage, TokenAmount } from '@thesolidchain/sdk-common'
import BigNumber from 'bignumber.js'

const mockUnderlyingToken = {
  address: { value: '0x0000000000000000000000000000000000000000' } as any,
  chainInfo: ChainFamilyMap.Ethereum.Mainnet,
  decimals: 18,
  symbol: 'MOCK_UNDERLYING',
  name: 'Mock Underlying',
} as any

const mockReceiptToken = {
  address: { value: '0x1111111111111111111111111111111111111111' } as any,
  chainInfo: ChainFamilyMap.Ethereum.Mainnet,
  decimals: 18,
  symbol: 'MOCK_RECEIPT',
  name: 'Mock Receipt',
} as any

const mockVaultDto: YearnVaultDto = {
  underlyingToken: mockUnderlyingToken,
  receiptToken: mockReceiptToken,
  currentApy: Percentage.createFrom({ value: 0.05 }),
  totalValueLocked: {
    value: new BigNumber(1000000),
    currency: { symbol: 'USD', name: 'US Dollar', decimals: 2 },
  } as any,
}

const mockPositionDto: YearnPositionDto = {
  principalAmount: TokenAmount.createFrom({ token: mockUnderlyingToken, amount: '100' }),
  currentAmount: TokenAmount.createFrom({ token: mockUnderlyingToken, amount: '100' }),
}

class MockYearnDataSource implements IYearnDataSource {
  async getVault(vaultAddress: string): Promise<YearnVaultDto> {
    return mockVaultDto
  }
  async getUserPosition(vaultAddress: string, userAddress: string): Promise<YearnPositionDto> {
    return mockPositionDto
  }
}

describe('Yearn Protocol Plugin', () => {
  let ctx: IProtocolPluginContext
  let poolIdMock: YearnYieldPoolId
  let plugin: YearnProtocolPlugin

  beforeAll(async () => {
    ctx = await createProtocolPluginContext(ChainFamilyMap.Ethereum.Mainnet)
    poolIdMock = new YearnYieldPoolId(
      '0x1111111111111111111111111111111111111111',
      ChainFamilyMap.Ethereum.Mainnet,
    )
    plugin = new YearnProtocolPlugin()
    plugin.initialize({ context: ctx, dataSource: new MockYearnDataSource() })
  })

  it('should verify that a given poolId is recognised as a valid format', () => {
    expect(isYearnYieldPoolId(poolIdMock)).toBe(true)
  })

  it('should throw an error when provided with an invalid poolId format', async () => {
    const invalidId = {
      protocol: { name: ProtocolName.Maker },
    } as any

    await expect(plugin.getYieldPoolInfo(invalidId)).rejects.toThrow('Invalid Yearn Pool ID')
  })

  it('should correctly return mock pool info for getYieldPoolInfo', async () => {
    const poolInfo = await plugin.getYieldPoolInfo(poolIdMock)
    expect(poolInfo).toBeDefined()
    expect(poolInfo.underlyingToken.symbol).toBe('MOCK_UNDERLYING')
    expect(poolInfo.currentApy.value.toString()).toBe('0.05')
  })

  it('should throw an error when calling getYieldPoolInfo with an unsupported chain ID', async () => {
    try {
      const invalidCtx = {
        ...ctx,
        provider: {
          ...ctx.provider,
          chain: {
            ...ctx.provider.chain!,
            id: 999,
          },
        },
      }

      const badPlugin = new YearnProtocolPlugin()
      badPlugin.initialize({ context: invalidCtx, dataSource: new MockYearnDataSource() })

      await badPlugin.getYieldPoolInfo(poolIdMock)
      assert.fail('Should throw error')
    } catch (error: unknown) {
      expect(getErrorMessage(error)).toMatch(`Chain ID 999 is not supported`)
    }
  })

  it('should correctly return mock position info for getYieldPosition', async () => {
    const positionId = new YearnYieldPositionId(
      '0x1111111111111111111111111111111111111111',
      '0x2222222222222222222222222222222222222222',
      ChainFamilyMap.Ethereum.Mainnet,
    )
    const position = await plugin.getYieldPosition(positionId)

    expect(position).toBeDefined()
    expect(position.principalAmount.amount.toString()).toBe('100')
    expect((position.poolId as YearnYieldPoolId).vaultAddress).toBe(
      '0x1111111111111111111111111111111111111111',
    )
  })
})
