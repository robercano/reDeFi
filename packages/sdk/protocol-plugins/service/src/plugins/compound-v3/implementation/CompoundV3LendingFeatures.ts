import { CompoundV3ContractNames } from '@thesolidchain/deployment-types'
import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import {
  ChainFamilyName,
  FiatCurrency,
  IChainInfo,
  ILendingPoolIdData,
  ILendingPosition,
  ILendingPositionIdData,
  IPositionIdData,
  IUser,
  LendingPositionType,
  Price,
  ProtocolName,
  TokenAmount,
  TransactionInfo,
  valuesOfChainFamilyMap,
  HexData,
  IAddress,
  ILendingPoolInfo,
  CollateralInfo,
  DebtInfo,
  Percentage,
  RiskRatio,
  RiskRatioType,
  ILendingPool,
  ILendingPositionId,
} from '@thesolidchain/sdk-common'
import { encodeFunctionData } from 'viem'
import { BaseLendingProtocolPlugin } from '../../../implementation/BaseLendingProtocolPlugin'
import { ContractInfo } from '../../common/types/ContractInfo'
import { ChainContractsProvider } from '../../utils/ChainContractProvider'
import { CompoundV3AbiMap } from '../abis/CompoundV3AddressAbiMap'
import {
  ICompoundV3LendingPoolIdData,
  ICompoundV3LendingPoolId,
  isCompoundV3LendingPoolId,
} from '../interfaces/ICompoundV3LendingPoolId'
import {
  ICompoundV3LendingPositionIdData,
  ICompoundV3LendingPositionId,
  isCompoundV3LendingPositionId,
} from '../interfaces/ICompoundV3LendingPositionId'
import { CompoundV3LendingPoolId } from './CompoundV3LendingPoolId'
import { CompoundV3LendingPoolInfo } from './CompoundV3LendingPoolInfo'
import { CompoundV3LendingPosition } from './CompoundV3LendingPosition'
import { BigNumber } from 'bignumber.js'

// Using viem MaxUint256 as string
const UNCAPPED_SUPPLY = '115792089237316195423570985008687907853269984665640564039457584007913129639935'

export class CompoundV3LendingFeatures extends BaseLendingProtocolPlugin {
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

  protected _validateLendingPoolId(
    candidate: ILendingPoolIdData,
  ): asserts candidate is ICompoundV3LendingPoolIdData {
    if (!isCompoundV3LendingPoolId(candidate)) {
      throw new Error(`Invalid CompoundV3 pool ID: ${JSON.stringify(candidate)}`)
    }
  }

  protected _validateLendingPositionId(
    candidate: IPositionIdData,
  ): asserts candidate is ICompoundV3LendingPositionIdData {
    if (!isCompoundV3LendingPositionId(candidate)) {
      throw new Error(`Invalid CompoundV3 position ID: ${JSON.stringify(candidate)}`)
    }
  }

  async _getLendingPoolImpl(poolId: ICompoundV3LendingPoolId): Promise<ILendingPool> {
    return CompoundV3LendingPoolId.createFrom({
      protocol: poolId.protocol,
      collateralToken: poolId.collateralToken,
      debtToken: poolId.debtToken,
      address: poolId.address,
    }) as unknown as ILendingPool
  }

  async _getLendingPoolInfoImpl(
    poolId: ICompoundV3LendingPoolId,
  ): Promise<ILendingPoolInfo> {
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

    const [borrowRate] = await this.context.provider.multicall({
      contracts: [
        {
          abi: cometContract.abi,
          address: cometContract.address,
          functionName: 'getBorrowRate',
          args: [utilization as bigint],
        },
      ],
      allowFailure: false,
    })

    const SECONDS_PER_YEAR = 31536000
    const borrowRateBig = new BigNumber((borrowRate as bigint).toString())
    const borrowApy = borrowRateBig.multipliedBy(SECONDS_PER_YEAR).div(1e18).toNumber()

    const collateralInfo = CollateralInfo.createFrom({
      token: poolId.collateralToken,
      price: Price.createFrom({
        base: poolId.collateralToken,
        quote: FiatCurrency.USD,
        value: '1',
      }),
      priceUSD: Price.createFrom({
        base: poolId.collateralToken,
        quote: FiatCurrency.USD,
        value: '1',
      }),
      liquidationThreshold: RiskRatio.createFrom({
        value: Percentage.createFrom({ value: 0 }),
        type: RiskRatioType.LTV,
      }),
      tokensLocked: TokenAmount.createFromBaseUnit({
        token: poolId.collateralToken,
        amount: '0',
      }),
      maxSupply: TokenAmount.createFromBaseUnit({
        token: poolId.collateralToken,
        amount: UNCAPPED_SUPPLY,
      }),
      liquidationPenalty: Percentage.createFrom({ value: 0 }),
    })

    const debtInfo = DebtInfo.createFrom({
      token: poolId.debtToken,
      price: Price.createFrom({
        base: poolId.debtToken,
        quote: FiatCurrency.USD,
        value: '1',
      }),
      priceUSD: Price.createFrom({
        base: poolId.debtToken,
        quote: FiatCurrency.USD,
        value: '1',
      }),
      interestRate: Percentage.createFrom({ value: borrowApy }),
      totalBorrowed: TokenAmount.createFromBaseUnit({
        token: poolId.debtToken,
        amount: '0',
      }),
      debtCeiling: TokenAmount.createFromBaseUnit({
        token: poolId.debtToken,
        amount: UNCAPPED_SUPPLY,
      }),
      debtAvailable: TokenAmount.createFromBaseUnit({
        token: poolId.debtToken,
        amount: UNCAPPED_SUPPLY,
      }),
      dustLimit: TokenAmount.createFromBaseUnit({ token: poolId.debtToken, amount: '0' }),
      originationFee: Percentage.createFrom({ value: 0 }),
    })

    return CompoundV3LendingPoolInfo.createFrom({
      id: poolId,
      collateral: collateralInfo,
      debt: debtInfo,
    })
  }

  async getLendingPosition(positionId: ILendingPositionIdData): Promise<ILendingPosition> {
    this._validateLendingPositionId(positionId)
    const { poolId, walletAddress } = positionId as ICompoundV3LendingPositionId
    const cometContract = { address: poolId.address.value as `0x${string}`, abi: CompoundV3AbiMap.Comet } as const

    const [userBasicInfo, userCollateralBalance] = await this.context.provider.multicall({
      contracts: [
        {
          abi: cometContract.abi,
          address: cometContract.address,
          functionName: 'userBasic',
          args: [walletAddress.value],
        },
        {
          abi: cometContract.abi,
          address: cometContract.address,
          functionName: 'userCollateral',
          args: [walletAddress.value, poolId.collateralToken.address.value],
        },
      ],
      allowFailure: false,
    })

    const principal = (userBasicInfo as unknown[])[0] as bigint
    const collateralBal = (userCollateralBalance as unknown[])[0] as bigint

    const borrowedAmount = principal < 0n ? -principal : 0n

    return CompoundV3LendingPosition.createFrom({
      id: positionId as unknown as ILendingPositionId,
      pool: await this._getLendingPoolImpl(poolId),
      subtype: LendingPositionType.Borrow,
      collateralAmount: TokenAmount.createFromBaseUnit({
        token: poolId.collateralToken,
        amount: collateralBal.toString(),
      }),
      debtAmount: TokenAmount.createFromBaseUnit({
        token: poolId.debtToken,
        amount: borrowedAmount.toString(),
      }),
    })
  }

  async getSupplyTransaction(params: {
    poolId: ILendingPoolIdData
    amount: TokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    const poolId = params.poolId as ICompoundV3LendingPoolId
    const cometContract = { address: poolId.address.value as `0x${string}`, abi: CompoundV3AbiMap.Comet } as const

    const asset = params.amount.token.address.value
    const amount = params.amount.toSolidityValue()

    const data = encodeFunctionData({
      abi: cometContract.abi,
      functionName: 'supply',
      args: [asset, amount],
    })

    return {
      transaction: {
        target: { value: cometContract.address } as IAddress,
        calldata: data as HexData,
        value: '0',
      },
      description: 'Supply collateral to Compound V3',
    }
  }

  async getWithdrawTransaction(params: {
    poolId: ILendingPoolIdData
    amount: TokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    const poolId = params.poolId as ICompoundV3LendingPoolId
    const cometContract = { address: poolId.address.value as `0x${string}`, abi: CompoundV3AbiMap.Comet } as const

    const asset = params.amount.token.address.value
    const amount = params.amount.toSolidityValue()

    const data = encodeFunctionData({
      abi: cometContract.abi,
      functionName: 'withdraw',
      args: [asset, amount],
    })

    return {
      transaction: {
        target: { value: cometContract.address } as IAddress,
        calldata: data as HexData,
        value: '0',
      },
      description: 'Withdraw collateral from Compound V3',
    }
  }

  async getBorrowTransaction(params: {
    poolId: ILendingPoolIdData
    amount: TokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    const poolId = params.poolId as ICompoundV3LendingPoolId
    const cometContract = { address: poolId.address.value as `0x${string}`, abi: CompoundV3AbiMap.Comet } as const

    const asset = params.amount.token.address.value
    const amount = params.amount.toSolidityValue()

    const data = encodeFunctionData({
      abi: cometContract.abi,
      functionName: 'withdraw',
      args: [asset, amount],
    })

    return {
      transaction: {
        target: { value: cometContract.address } as IAddress,
        calldata: data as HexData,
        value: '0',
      },
      description: 'Borrow base asset from Compound V3',
    }
  }

  async getRepayTransaction(params: {
    poolId: ILendingPoolIdData
    amount: TokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    const poolId = params.poolId as ICompoundV3LendingPoolId
    const cometContract = { address: poolId.address.value as `0x${string}`, abi: CompoundV3AbiMap.Comet } as const

    const asset = params.amount.token.address.value
    const amount = params.amount.toSolidityValue()

    const data = encodeFunctionData({
      abi: cometContract.abi,
      functionName: 'supply',
      args: [asset, amount],
    })

    return {
      transaction: {
        target: { value: cometContract.address } as IAddress,
        calldata: data as HexData,
        value: '0',
      },
      description: 'Repay base asset to Compound V3',
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
