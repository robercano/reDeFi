import {
  EmodeType,
  AaveV3LendingPool,
  AaveV3LendingPoolId,
  AaveV3Protocol,
  isAaveV3LendingPoolId,
} from '@thesolidchain/protocol-plugins'
import { Address, ChainFamilyMap, PoolType, ProtocolName, Token } from '@thesolidchain/sdk-common'
import { SDKManager } from '../../src/implementation/SDKManager'
import { RPCMainClientType } from '../../src/rpc/SDKMainClient'
import { vi, expect } from 'vitest'

export default async function getLendingPoolTest() {
  type GetLendingPoolType = RPCMainClientType['protocols']['getLendingPool']['query']

  const getLendingPoolQuery: GetLendingPoolType = vi.fn(async (poolId) => {
    expect(poolId).toBeDefined()

    if (!isAaveV3LendingPoolId(poolId)) {
      expect.fail('PoolId is not AaveV3PoolId')
    }

    expect(poolId.protocol).toBeDefined()
    expect(poolId.protocol.name).toBe(ProtocolName.AaveV3)

    return {
      type: PoolType.Lending,
      id: poolId,
    } as unknown as AaveV3LendingPool
  })

  const rpcClient = {
    protocols: {
      getLendingPool: {
        query: getLendingPoolQuery,
      },
    },
  } as unknown as RPCMainClientType

  const sdkManager = new SDKManager({ rpcClient })

  expect(sdkManager).toBeDefined()

  const chain = await sdkManager.chains.getChain({
    chainInfo: { chainId: 1, name: 'Mainnet' },
  })

  if (!chain) {
    expect.fail('Chain not found')
  }

  const protocol = AaveV3Protocol.createFrom({
    chainInfo: chain.chainInfo,
  })

  const aaveV3PoolId = AaveV3LendingPoolId.createFrom({
    protocol: AaveV3Protocol.createFrom({
      chainInfo: chain.chainInfo,
    }),
    collateralToken: Token.createFrom({
      address: Address.createFromEthereum({
        value: '0x6b175474e89094c44da98b954eedeac495271d0f',
      }),
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
    }),
    debtToken: Token.createFrom({
      address: Address.createFromEthereum({
        value: '0x6b175474e89094c44da98b954eedeac495271d0f',
      }),
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
    }),
    emodeType: EmodeType.None,
  })

  const pool = await chain.protocols.getLendingPool({ poolId: aaveV3PoolId })

  if (!pool) {
    expect.fail('Pool not found')
  }

  expect(pool.type).toBe(PoolType.Lending)
  expect(pool.id).toBe(aaveV3PoolId)
  expect(pool.id.protocol.name).toBe(protocol.name)
  expect(pool.id.protocol.chainInfo).toEqual(protocol.chainInfo)
}
