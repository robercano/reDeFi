import {
  EmodeType,
  IAaveV3LendingPosition,
  AaveV3LendingPool,
  AaveV3LendingPoolId,
  AaveV3LendingPosition,
  AaveV3LendingPositionId,
  AaveV3Protocol,
} from '@thesolidchain/protocol-plugins'
import {
  IRefinanceSimulation,
  RefinanceSimulation,
  Address,
  ChainFamilyMap,
  ChainInfo,
  Maybe,
  Token,
  TokenAmount,
  LendingPositionType,
  IPositionsManager,
  Order,
} from '@thesolidchain/sdk-common'
import { vi, expect } from 'vitest'
import { SDKManager } from '../../src/implementation/SDKManager'
import { UserClient } from '../../src/implementation/UserClient'
import { RPCMainClientType } from '../../src/rpc/SDKMainClient'

export default async function simulateNewOrder() {
  const chainInfo: ChainInfo = ChainFamilyMap.Ethereum.Mainnet

  // Tokens
  const WETH = Token.createFrom({
    chainInfo,
    address: Address.createFromEthereum({ value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' }),
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
  })

  const DAI = Token.createFrom({
    chainInfo,
    address: Address.createFromEthereum({ value: '0x6B175474E89094C44Da98b954EedeAC495271d0F' }),
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    decimals: 18,
  })

  const sourceProtocol = AaveV3Protocol.createFrom({
    chainInfo: chainInfo,
  })

  const sourcePoolId = AaveV3LendingPoolId.createFrom({
    protocol: sourceProtocol,
    
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
      chainInfo: { chainId: 1, name: 'Ethereum' },
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
    }),
    emodeType: EmodeType.None,
  })

  const pool = AaveV3LendingPool.createFrom({
    id: sourcePoolId,
    collateralToken: sourcePoolId.collateralToken,
    debtToken: sourcePoolId.debtToken,
  })

  const prevPosition: IAaveV3LendingPosition = AaveV3LendingPosition.createFrom({
    subtype: LendingPositionType.Multiply,
    id: AaveV3LendingPositionId.createFrom({
      id: '1234567890',
      poolId: sourcePoolId,
      walletAddress: Address.createFromEthereum({ value: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' }),
    }),
    pool: pool,
    debtAmount: TokenAmount.createFrom({ token: DAI, amount: '56.78' }),
    collateralAmount: TokenAmount.createFrom({ token: WETH, amount: '105.98' }),
  })

  const targetProtocol = AaveV3Protocol.createFrom({
    chainInfo: chainInfo,
  })

  const targetPoolId = AaveV3LendingPoolId.createFrom({
    protocol: targetProtocol,
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
      chainInfo: { chainId: 1, name: 'Ethereum' },
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
    }),
    emodeType: EmodeType.None,
  })

  const targetPool = AaveV3LendingPool.createFrom({
    id: targetPoolId,
    collateralToken: targetPoolId.collateralToken,
    debtToken: targetPoolId.debtToken,
  })

  const simulation: IRefinanceSimulation = RefinanceSimulation.createFrom({
    sourcePosition: prevPosition,
    swaps: [],
    targetPosition: AaveV3LendingPosition.createFrom({
      subtype: LendingPositionType.Multiply,
      id: AaveV3LendingPositionId.createFrom({
        id: '1234567890',
        poolId: targetPoolId,
        walletAddress: Address.createFromEthereum({ value: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' }),
      }),
      debtAmount: TokenAmount.createFrom({ token: DAI, amount: '56.78' }),
      collateralAmount: TokenAmount.createFrom({ token: WETH, amount: '105.98' }),
      pool: targetPool,
    }),
    steps: [],
  })

  const positionsManager: IPositionsManager = {
    address: Address.ZeroAddressEthereum,
  }

  let userClient: UserClient | undefined = undefined

  type BuildOrderType = RPCMainClientType['orders']['buildOrder']['mutate']
  const buildOrder: BuildOrderType = vi.fn(async (params) => {
    expect(params).toBeDefined()
    expect(params.positionsManager).toBeDefined()
    expect(params.user).toBeDefined()
    expect(params.user.chainInfo).toBe(userClient?.user.chainInfo)
    expect(params.user.wallet).toBe(userClient?.user.wallet)

    expect(params.simulation).toBeDefined()
    expect(params.simulation).toBe(simulation)

    return {} as Maybe<Order>
  })

  const rpcClient = {
    orders: {
      buildOrder: {
        mutate: buildOrder,
      },
    },
  } as unknown as RPCMainClientType

  const sdkManager = new SDKManager({ rpcClient })

  expect(sdkManager).toBeDefined()

  userClient = await sdkManager.users.getUserClient({
    chainInfo: chainInfo,
    walletAddress: Address.createFromEthereum({
      value: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    }),
  })

  const order: Maybe<Order> = await userClient.newOrder({ simulation, positionsManager })

  if (!order) {
    expect.fail('Order not generated')
  }
}
