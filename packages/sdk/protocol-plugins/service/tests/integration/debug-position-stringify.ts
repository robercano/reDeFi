import { Address } from '@thesolidchain/sdk-common'
import { CompoundV3LendingPoolId } from '../../src/plugins/compound-v3/implementation/CompoundV3LendingPoolId'
import { CompoundV3LendingPositionId } from '../../src/plugins/compound-v3/implementation/CompoundV3LendingPositionId'
import { CompoundV3Protocol } from '../../src/plugins/compound-v3/implementation/CompoundV3Protocol'
import { ChainFamilyMap, Token } from '@thesolidchain/sdk-common'
import { CompoundV3LendingPositionIdDataSchema } from '../../src/plugins/compound-v3/interfaces/ICompoundV3LendingPositionId'

const cUSDCv3Address = '0xc3d688B66703497DAA19211EEdff47f25384cdc3'
const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

const mockProtocol = CompoundV3Protocol.createFrom({
  chainFamily: 'Ethereum', // hack for test
  version: '3.0',
  description: 'Compound V3',
} as any)

const usdcToken = Token.createFrom({
  address: Address.createFromEthereum({ value: usdcAddress }),
  decimals: 6,
  symbol: 'USDC',
  name: 'USD Coin',
  chainInfo: ChainFamilyMap.Ethereum.Mainnet,
})

const cUSDCv3Token = Token.createFrom({
  address: Address.createFromEthereum({ value: cUSDCv3Address }),
  decimals: 6,
  symbol: 'cUSDCv3',
  name: 'Compound USDC III',
  chainInfo: ChainFamilyMap.Ethereum.Mainnet,
})

const cUSDCv3PoolId = CompoundV3LendingPoolId.createFrom({
  protocol: mockProtocol,
  address: Address.createFromEthereum({ value: cUSDCv3Address }),
  underlyingToken: usdcToken,
  collateralToken: cUSDCv3Token,
  debtToken: usdcToken,
} as any)

const positionId = CompoundV3LendingPositionId.createFrom({
  id: 'forkPositionId',
  poolId: cUSDCv3PoolId,
  walletAddress: Address.createFromEthereum({ value: '0xAAf00613A099DeAe24EeB2c21Ad2965CaDEac244' }),
})

console.log(JSON.stringify(positionId))
const res2 = CompoundV3LendingPositionIdDataSchema.safeParse(positionId)
console.log('Valid:', res2.success)
if (!res2.success) console.log(res2.error)
