import { CompoundV3ContractNames } from '@thesolidchain/deployment-types'
import { IProtocolPluginContext, IYieldProtocolFeatures } from '@thesolidchain/protocol-plugins-common'
import {
  ChainFamilyName,
  IChainInfo,
  IPositionIdData,
  IUser,
  ProtocolName,
  TokenAmount,
  TransactionInfo,
  valuesOfChainFamilyMap,
  HexData,
  IAddress,
  IYieldPoolId,
  IYieldPoolInfo,
  IYieldPosition,
  IYieldPositionId,
  YieldPoolInfo,
  YieldPosition,
  YieldType,
  Percentage,
  FiatCurrencyAmount,
  FiatCurrency,
} from '@thesolidchain/sdk-common'
import { encodeFunctionData } from 'viem'
import { BaseProtocolPlugin } from '../../../implementation/BaseProtocolPlugin'
import { ContractInfo } from '../../common/types/ContractInfo'
import { ChainContractsProvider } from '../../utils/ChainContractProvider'
import { CompoundV3AbiMap } from '../abis/CompoundV3AddressAbiMap'
import {
  ICompoundV3YieldPoolId,
  isCompoundV3YieldPoolId,
} from '../interfaces/ICompoundV3YieldPoolId'
import {
  ICompoundV3YieldPositionId,
  isCompoundV3YieldPositionId,
} from '../interfaces/ICompoundV3YieldPositionId'
import { CompoundV3YieldPoolId } from './CompoundV3YieldPoolId'
import { BigNumber } from 'bignumber.js'

export class CompoundV3YieldFeatures extends BaseProtocolPlugin implements IYieldProtocolFeatures {
  readonly protocolName = ProtocolName.CompoundV3
  readonly supportedChains = valuesOfChainFamilyMap([
    ChainFamilyName.Ethereum,
    ChainFamilyName.Base,
    ChainFamilyName.Arbitrum,
    ChainFamilyName.Optimism,
  ])

  private _contractsAbiProvider!: ChainContractsProvider<CompoundV3ContractNames, typeof CompoundV3AbiMap>

  initialize(params: { context: IProtocolPluginContext }) {
    super.initialize(params)
    this._contractsAbiProvider = new ChainContractsProvider(CompoundV3AbiMap)
  }

  async getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo> {
    if (!isCompoundV3YieldPoolId(poolId)) {
      throw new Error(`Invalid CompoundV3 yield pool ID: ${JSON.stringify(poolId)}`)
    }

    const cometContract = { address: poolId.address.value as `0x${string}`, abi: CompoundV3AbiMap.Comet } as const

    const [utilization] = await this.context.provider.multicall({
      contracts: [
        {
          abi: cometContract.abi,
          address: cometContract.address,
          functionName: 'getUtilization',
        },
      ],
      allowFailure: false,
    })

    const [supplyRate] = await this.context.provider.multicall({
      contracts: [
        {
          abi: cometContract.abi,
          address: cometContract.address,
          functionName: 'getSupplyRate',
          args: [utilization as bigint],
        },
      ],
      allowFailure: false,
    })

    const SECONDS_PER_YEAR = 31536000
    const supplyRateBig = new BigNumber((supplyRate as bigint).toString())
    const supplyApy = supplyRateBig.multipliedBy(SECONDS_PER_YEAR).div(1e18).toNumber()

    return YieldPoolInfo.createFrom({
      id: poolId,
      underlyingToken: poolId.underlyingToken,
      receiptToken: poolId.receiptToken,
      yieldType: YieldType.ValueAccruing,
      currentApy: Percentage.createFrom({ value: supplyApy }),
      totalValueLocked: FiatCurrencyAmount.createFrom({ amount: '0', fiat: FiatCurrency.USD }),
    })
  }

  async getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition> {
    if (!isCompoundV3YieldPositionId(positionId)) {
      throw new Error(`Invalid CompoundV3 yield position ID: ${JSON.stringify(positionId)}`)
    }

    const { poolId, walletAddress } = positionId as ICompoundV3YieldPositionId
    const cometContract = { address: poolId.address.value as `0x${string}`, abi: CompoundV3AbiMap.Comet } as const

    const [userBasicInfo] = await this.context.provider.multicall({
      contracts: [
        {
          abi: cometContract.abi,
          address: cometContract.address,
          functionName: 'userBasic',
          args: [walletAddress.value],
        },
      ],
      allowFailure: false,
    })

    const principal = (userBasicInfo as unknown[])[0] as bigint

    const suppliedAmount = principal > 0n ? principal : 0n

    return YieldPosition.createFrom({
      id: positionId,
      poolId: CompoundV3YieldPoolId.createFrom({
        protocol: poolId.protocol,
        underlyingToken: poolId.underlyingToken,
        receiptToken: poolId.receiptToken,
        address: poolId.address,
      }),
      principalAmount: TokenAmount.createFromBaseUnit({
        token: poolId.underlyingToken,
        amount: suppliedAmount.toString(),
      }),
      currentAmount: TokenAmount.createFromBaseUnit({
        token: poolId.underlyingToken,
        amount: suppliedAmount.toString(),
      }),
      claimableRewards: [],
    })
  }

  async getDepositTransaction(params: {
    poolId: IYieldPoolId
    amount: TokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    const { poolId, amount } = params
    if (!isCompoundV3YieldPoolId(poolId)) throw new Error('Invalid yield pool id')
    const pool = poolId as ICompoundV3YieldPoolId
    const cometContract = { address: pool.address.value as `0x${string}`, abi: CompoundV3AbiMap.Comet } as const

    const asset = amount.token.address.value
    const value = amount.toSolidityValue()

    const data = encodeFunctionData({
      abi: cometContract.abi,
      functionName: 'supply',
      args: [asset, value],
    })

    return {
      transaction: {
        target: { value: cometContract.address } as IAddress,
        calldata: data as HexData,
        value: '0',
      },
      description: 'Supply base asset to Compound V3 for yield',
    }
  }

  async getWithdrawTransaction(params: {
    positionId: IYieldPositionId
    amount: TokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    const { positionId, amount } = params
    if (!isCompoundV3YieldPositionId(positionId)) throw new Error('Invalid yield position id')
    const position = positionId as ICompoundV3YieldPositionId
    const cometContract = { address: position.poolId.address.value as `0x${string}`, abi: CompoundV3AbiMap.Comet } as const

    const asset = amount.token.address.value
    const value = amount.toSolidityValue()

    const data = encodeFunctionData({
      abi: cometContract.abi,
      functionName: 'withdraw',
      args: [asset, value],
    })

    return {
      transaction: {
        target: { value: cometContract.address } as IAddress,
        calldata: data as HexData,
        value: '0',
      },
      description: 'Withdraw base asset from Compound V3',
    }
  }

  protected async _getContractDef(params: {
    chainInfo: IChainInfo
    contractName: CompoundV3ContractNames
  }): Promise<ContractInfo> {
    const contractAddress = await this._getContractAddress({
      chainInfo: params.chainInfo,
      contractName: params.contractName,
    })

    return {
      address: contractAddress.value,
      abi: CompoundV3AbiMap[params.contractName],
    }
  }
}
