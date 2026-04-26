import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { ChainFamilyMap, ChainInfo, ProtocolName, Address } from '@thesolidchain/sdk-common'
import assert from 'assert'
import { AaveV3LendingPositionId } from '../../../src'
import { vi } from 'vitest'
import { AaveV3ProtocolPlugin } from '../../../src/plugins/aave-v3/implementation/AAVEv3ProtocolPlugin'
import {
  IAaveV3LendingPoolId,
  IAaveV3LendingPoolIdData,
  isAaveV3LendingPoolId,
} from '../../../src/plugins/aave-v3/interfaces/IAaveV3LendingPoolId'
import { getAaveV3PoolIdMock } from '../../mocks/AAVEv3PoolIdMock'
import { createProtocolPluginContext } from '../../utils/CreateProtocolPluginContext'
import { getErrorMessage } from '../../utils/ErrorMessage'

describe('AAVEv3 Protocol Plugin', () => {
  let ctx: IProtocolPluginContext
  let aaveV3PoolIdMock: IAaveV3LendingPoolId
  let aaveV3ProtocolPlugin: AaveV3ProtocolPlugin
  beforeAll(async () => {
    ctx = await createProtocolPluginContext(ChainFamilyMap.Ethereum.Mainnet)
    aaveV3PoolIdMock = await getAaveV3PoolIdMock()
    aaveV3ProtocolPlugin = new AaveV3ProtocolPlugin()
    aaveV3ProtocolPlugin.initialize({
      context: ctx,
    })
  })

  it('should verify that a given poolId is recognised as a valid format', () => {
    expect(isAaveV3LendingPoolId(aaveV3PoolIdMock)).toBe(true)
  })

  it('should throw a specific error when provided with a poolId not matching the AAVEv3PoolId format', async () => {
    try {
      const invalidAaveV3PoolIdMock = {
        ...aaveV3PoolIdMock,
        protocol: {
          ...aaveV3PoolIdMock.protocol,
          name: ProtocolName.Maker,
        },
      } as unknown as IAaveV3LendingPoolIdData

      await expect(
        aaveV3ProtocolPlugin.getLendingPool(invalidAaveV3PoolIdMock),
      ).resolves.toBeDefined()
      assert.fail('Should throw error')
    } catch (error: unknown) {
      expect(getErrorMessage(error)).toMatch('Invalid AaveV3 pool ID')
    }
  })

  it('should correctly return a AaveV3LendingPool object for a valid AaveV3PoolId', async () => {
    const aaveV3PoolIdValid = aaveV3PoolIdMock
    await expect(aaveV3ProtocolPlugin.getLendingPool(aaveV3PoolIdValid)).resolves.toBeDefined()
  })

  it('should throw an error when calling getLendingPool with an unsupported Chain', async () => {
    const invalidAaveV3PoolIdUnsupportedChain = {
      ...aaveV3PoolIdMock,
      protocol: {
        ...aaveV3PoolIdMock.protocol,
        chainInfo: ChainInfo.createFrom({
          chainId: 146,
          name: 'Unknown',
        }),
      },
    }
    await expect(
      aaveV3ProtocolPlugin.getLendingPool(invalidAaveV3PoolIdUnsupportedChain),
    ).rejects.toThrow('Chain ID 146 is not supported')
  })

  it('should throw an error when calling getLendingPool with chain id missing from ctx', async () => {
    try {
      new AaveV3ProtocolPlugin().initialize({
        context: {
          ...ctx,
          provider: {
            ...ctx.provider,
            chain: {
              ...ctx.provider.chain!,
              id: undefined as unknown as number,
            },
          },
        },
      })

      assert.fail('Should throw error')
    } catch (error: unknown) {
      expect(getErrorMessage(error)).toMatch('ctx.provider.chain.id undefined')
    }
  })

  it('should throw an error when calling getLendingPool with an unsupported chain ID', async () => {
    const wrongChainId = 2

    try {
      new AaveV3ProtocolPlugin().initialize({
        context: {
          ...ctx,
          provider: {
            ...ctx.provider,
            chain: {
              ...ctx.provider.chain!,
              id: wrongChainId,
            },
          },
        },
      })

      assert.fail('Should throw error')
    } catch (error: unknown) {
      expect(getErrorMessage(error)).toMatch(`Chain ID ${wrongChainId} is not supported`)
    }
  })

  it('should correctly return a lending position when calling getPosition', async () => {
    const positionId = AaveV3LendingPositionId.createFrom({
      id: 'mockPositionId',
      poolId: aaveV3PoolIdMock,
      walletAddress: Address.createFromEthereum({ value: '0x1234567890123456789012345678901234567890' }),
    })

    vi.spyOn(ctx.provider, 'multicall').mockResolvedValue([
      [100000000000000000000n], // collateralReserveData (100 WETH)
      [0n, 0n, 50000000000000000000n], // debtReserveData (50 DAI)
      0n, // userEMode
    ] as any)

    const position = await aaveV3ProtocolPlugin.getLendingPosition(positionId)
    expect(position).toBeDefined()
    expect(position.collateralAmount.amount.toString()).toBe('100')
    expect(position.debtAmount.amount.toString()).toBe('50')
  })
})
