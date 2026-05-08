import { ChainFamilyMap, Token, Address } from '@thesolidchain/sdk-common'
import { TokensManagerMock } from '@thesolidchain/testing-utils'
import { AaveV3LendingPoolId, AaveV3Protocol } from '../../src'
import { IAaveV3LendingPoolId } from '../../src/plugins/aave-v3/interfaces/IAaveV3LendingPoolId'
import { EmodeType } from '../../src/plugins/common/enums/EmodeType'

export async function getAaveV3PoolIdMock(): Promise<IAaveV3LendingPoolId> {
  const tokenManagerMock = new TokensManagerMock()
  const chainInfo = ChainFamilyMap.Ethereum.Mainnet

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

  return AaveV3LendingPoolId.createFrom({
    protocol: AaveV3Protocol.createFrom({
      chainInfo,
    }),
    debtToken: DAI,
    collateralToken: WETH,
    emodeType: EmodeType.None,
  })
}
