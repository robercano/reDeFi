import {
  IAaveV3LendingPool,
  IAaveV3LendingPosition,
  AaveV3LendingPool,
  EmodeType,
  AaveV3LendingPoolId,
  AaveV3LendingPosition,
  AaveV3LendingPositionId,
  AaveV3Protocol,
} from '@thesolidchain/protocol-plugins'
import {
  LendingPositionType,
  Address,
  ChainFamilyMap,
  ChainInfo,
  Token,
  TokenAmount,
} from '@thesolidchain/sdk-common'

export function getAaveV3TargetPosition(): IAaveV3LendingPosition {
  const chainInfo: ChainInfo = ChainFamilyMap.Ethereum.Mainnet

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

  const collateralAmount = TokenAmount.createFrom({
    token: WETH,
    amount: '5.0',
  })

  const debtAmount = TokenAmount.createFrom({
    token: DAI,
    amount: '700.0',
  })

  const protocol = AaveV3Protocol.createFrom({
    chainInfo: ChainFamilyMap.Ethereum.Mainnet,
  })

  const poolId = AaveV3LendingPoolId.createFrom({
    protocol: protocol,
    collateralToken: WETH,
    debtToken: DAI,
    emodeType: EmodeType.None,
  })

  const pool: IAaveV3LendingPool = AaveV3LendingPool.createFrom({
    id: poolId,
    debtToken: DAI,
    collateralToken: WETH,
  })

  const position = AaveV3LendingPosition.createFrom({
    subtype: LendingPositionType.Multiply,
    id: AaveV3LendingPositionId.createFrom({
      id: 'aaveV3Position',
      poolId: poolId,
      walletAddress: Address.createFromEthereum({
        value: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      }),
    }),
    debtAmount,
    collateralAmount,
    pool,
  })

  return position
}
