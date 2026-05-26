import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { ChainFamilyMap, ProtocolName } from '@thesolidchain/sdk-common'
import assert from 'assert'
import { MakerProtocolPlugin } from '../../../src/plugins/maker/implementation/MakerProtocolPlugin'
import { MakerYieldPoolId } from '../../../src/plugins/maker/implementation/MakerYieldPoolId'
import { MakerYieldPositionId } from '../../../src/plugins/maker/implementation/MakerYieldPositionId'
import { isMakerYieldPoolId } from '../../../src/plugins/maker/interfaces/IMakerYieldPoolId'
import { createProtocolPluginContext } from '../../utils/CreateProtocolPluginContext'
import { getErrorMessage } from '../../utils/ErrorMessage'

import {
  IMakerDataSource,
  MakerVaultDto,
  MakerPositionDto,
} from '../../../src/plugins/maker/interfaces/IMakerDataSource'
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

const mockVaultDto: MakerVaultDto = {
  underlyingToken: mockUnderlyingToken,
  receiptToken: mockReceiptToken,
  currentApy: Percentage.createFrom({ value: 0.05 }),
  totalValueLocked: {
    value: new BigNumber(1000000),
    currency: { symbol: 'USD', name: 'US Dollar', decimals: 2 },
  } as any,
}

const mockPositionDto: MakerPositionDto = {
  principalAmount: TokenAmount.createFrom({ token: mockUnderlyingToken, amount: '100' }),
  currentAmount: TokenAmount.createFrom({ token: mockUnderlyingToken, amount: '100' }),
}

class MockMakerDataSource implements IMakerDataSource {
  async getVault(vaultAddress: string): Promise<MakerVaultDto> {
    return mockVaultDto
  }
  async getUserPosition(vaultAddress: string, userAddress: string): Promise<MakerPositionDto> {
    return mockPositionDto
  }
}

describe('Maker Protocol Plugin', () => {
  let ctx: IProtocolPluginContext
  let poolIdMock: MakerYieldPoolId
  let plugin: MakerProtocolPlugin

  beforeAll(async () => {
    ctx = await createProtocolPluginContext(ChainFamilyMap.Ethereum.Mainnet)
    poolIdMock = new MakerYieldPoolId(
      '0x1111111111111111111111111111111111111111',
      ChainFamilyMap.Ethereum.Mainnet,
    )
    plugin = new MakerProtocolPlugin()
    plugin.initialize({ context: ctx, dataSource: new MockMakerDataSource() })
  })

  it('should verify that a given poolId is recognised as a valid format', () => {
    expect(isMakerYieldPoolId(poolIdMock)).toBe(true)
  })

  it('should throw an error when provided with an invalid poolId format', async () => {
    const invalidId = {
      protocol: { name: ProtocolName.AaveV3 },
    } as any

    await expect(plugin.getYieldPoolInfo(invalidId)).rejects.toThrow('Invalid Maker Pool ID')
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

      const badPlugin = new MakerProtocolPlugin()
      badPlugin.initialize({ context: invalidCtx, dataSource: new MockMakerDataSource() })

      await badPlugin.getYieldPoolInfo(poolIdMock)
      assert.fail('Should throw error')
    } catch (error: unknown) {
      expect(getErrorMessage(error)).toMatch(`Chain ID 999 is not supported`)
    }
  })

  it('should correctly return mock position info for getYieldPosition', async () => {
    const positionId = new MakerYieldPositionId(
      '0x1111111111111111111111111111111111111111',
      '0x2222222222222222222222222222222222222222',
      ChainFamilyMap.Ethereum.Mainnet,
    )
    const position = await plugin.getYieldPosition(positionId)

    expect(position).toBeDefined()
    expect(position.principalAmount.amount.toString()).toBe('100')
    expect((position.poolId as MakerYieldPoolId).vaultAddress).toBe(
      '0x1111111111111111111111111111111111111111',
    )
  })
})
