import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { ChainFamilyMap, ProtocolName, Percentage, TokenAmount } from '@thesolidchain/sdk-common'
import assert from 'assert'
import { LidoProtocolPlugin } from '../../../src/plugins/lido/implementation/LidoProtocolPlugin'
import { LidoYieldPoolId } from '../../../src/plugins/lido/implementation/LidoYieldPoolId'
import { LidoYieldPositionId } from '../../../src/plugins/lido/implementation/LidoYieldPositionId'
import { isLidoYieldPoolId } from '../../../src/plugins/lido/interfaces/ILidoYieldPoolId'
import { createProtocolPluginContext } from '../../utils/CreateProtocolPluginContext'
import { getErrorMessage } from '../../utils/ErrorMessage'
import {
  ILidoDataSource,
  LidoPoolDto,
  LidoPositionDto,
} from '../../../src/plugins/lido/interfaces/ILidoDataSource'
import BigNumber from 'bignumber.js'

const mockUnderlyingToken = {
  address: { value: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' } as any,
  chainInfo: ChainFamilyMap.Ethereum.Mainnet,
  decimals: 18,
  symbol: 'ETH',
  name: 'Ether',
} as any

const mockReceiptToken = {
  address: { value: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84' } as any,
  chainInfo: ChainFamilyMap.Ethereum.Mainnet,
  decimals: 18,
  symbol: 'stETH',
  name: 'Liquid staked Ether 2.0',
} as any

const mockPoolDto: LidoPoolDto = {
  underlyingToken: mockUnderlyingToken,
  receiptToken: mockReceiptToken,
  currentApy: Percentage.createFrom({ value: 3.5 }),
  totalValueLocked: {
    value: new BigNumber(1000000000),
    currency: { symbol: 'USD', name: 'US Dollar', decimals: 2 },
  } as any,
}

const mockPositionDto: LidoPositionDto = {
  principalAmount: TokenAmount.createFrom({ token: mockUnderlyingToken, amount: '500' }),
  currentAmount: TokenAmount.createFrom({ token: mockUnderlyingToken, amount: '505' }),
}

class MockLidoDataSource implements ILidoDataSource {
  async getPool(tokenAddress: string): Promise<LidoPoolDto> {
    return mockPoolDto
  }
  async getUserPosition(tokenAddress: string, userAddress: string): Promise<LidoPositionDto> {
    return mockPositionDto
  }
}

describe('Lido Protocol Plugin', () => {
  let ctx: IProtocolPluginContext
  let poolIdMock: LidoYieldPoolId
  let plugin: LidoProtocolPlugin

  beforeAll(async () => {
    ctx = await createProtocolPluginContext(ChainFamilyMap.Ethereum.Mainnet)
    poolIdMock = new LidoYieldPoolId(
      '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
      ChainFamilyMap.Ethereum.Mainnet,
    )
    plugin = new LidoProtocolPlugin()
    plugin.initialize({ context: ctx, dataSource: new MockLidoDataSource() })
  })

  it('should verify that a given poolId is recognised as a valid format', () => {
    expect(isLidoYieldPoolId(poolIdMock)).toBe(true)
  })

  it('should throw an error when provided with an invalid poolId format', async () => {
    const invalidId = {
      protocol: { name: ProtocolName.Maker },
    } as any

    await expect(plugin.getYieldPoolInfo(invalidId)).rejects.toThrow('Invalid Lido Pool ID')
  })

  it('should correctly return mock pool info for getYieldPoolInfo', async () => {
    const poolInfo = await plugin.getYieldPoolInfo(poolIdMock)
    expect(poolInfo).toBeDefined()
    expect(poolInfo.underlyingToken.symbol).toBe('ETH')
    expect(poolInfo.currentApy.value.toString()).toBe('3.5')
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

      const badPlugin = new LidoProtocolPlugin()
      badPlugin.initialize({ context: invalidCtx, dataSource: new MockLidoDataSource() })

      await badPlugin.getYieldPoolInfo(poolIdMock)
      assert.fail('Should throw error')
    } catch (error: unknown) {
      expect(getErrorMessage(error)).toMatch(`Chain ID 999 is not supported`)
    }
  })

  it('should correctly return mock position info for getYieldPosition', async () => {
    const positionId = new LidoYieldPositionId(
      '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
      '0x2222222222222222222222222222222222222222',
      ChainFamilyMap.Ethereum.Mainnet,
    )
    const position = await plugin.getYieldPosition(positionId)

    expect(position).toBeDefined()
    expect(position.currentAmount.amount.toString()).toBe('505')
    expect((position.poolId as LidoYieldPoolId).tokenAddress).toBe(
      '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    )
  })
})
