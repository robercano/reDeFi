import { createPublicClient, http } from 'viem'
import * as dotenv from 'dotenv'
dotenv.config({ path: '../../../../.env' })
import {
  TokenAmount,
  Address,
  User,
  Wallet,
  ChainInfo,
  Token,
} from '@thesolidchain/sdk-common'
import { CompoundV3LendingPoolId } from '../../src/plugins/compound-v3/implementation/CompoundV3LendingPoolId'
import { CompoundV3LendingPositionId } from '../../src/plugins/compound-v3/implementation/CompoundV3LendingPositionId'
import { CompoundV3Protocol } from '../../src/plugins/compound-v3/implementation/CompoundV3Protocol'
import { ChainFamilyMap } from '@thesolidchain/sdk-common'
import { CompoundV3LendingPoolIdDataSchema } from '../../src/plugins/compound-v3/interfaces/ICompoundV3LendingPoolId'
import { CompoundV3LendingPositionIdDataSchema } from '../../src/plugins/compound-v3/interfaces/ICompoundV3LendingPositionId'

const cUSDCv3Address = '0xc3d688B66703497DAA19211EEdff47f25384cdc3'
const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

const mockProtocol = CompoundV3Protocol.createFrom({
  chainFamily: ChainFamilyMap.Ethereum.Mainnet.chainId === 1 ? 'Ethereum' : 'Ethereum', // hack for test
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
  collateralToken: cUSDCv3Token,
  debtToken: usdcToken,
} as any)

describe('Debug', () => {
  it('debug pool id', () => {
    const res = CompoundV3LendingPoolIdDataSchema.safeParse(cUSDCv3PoolId)
    if (!res.success) {
      console.log(res.error)
      throw new Error('PoolId parse failed')
    } else {
      console.log('PoolId Success!')
    }

    const positionId = CompoundV3LendingPositionId.createFrom({
      id: 'forkPositionId',
      poolId: cUSDCv3PoolId,
      walletAddress: Address.createFromEthereum({ value: '0xAAf00613A099DeAe24EeB2c21Ad2965CaDEac244' }),
    })

    const res2 = CompoundV3LendingPositionIdDataSchema.safeParse(positionId)
    if (!res2.success) {
      console.log(res2.error)
      throw new Error('PositionId parse failed')
    } else {
      console.log('PositionId Success!')
    }
  })
})
