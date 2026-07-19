import {
  ChainFamilyName,
  IYieldPoolId,
  IYieldPositionId,
  IYieldPoolInfo,
  IYieldPosition,
  IStakingPoolId,
  IStakingPositionId,
  IStakingPoolInfo,
  IStakingPosition,
  ProtocolName,
  valuesOfChainFamilyMap,
  YieldType,
  IChainInfo,
  ITokenAmount,
  IUser,
  TransactionInfo,
  Address,
  HexData,
  YieldPoolInfo,
  YieldPosition,
  StakingPoolInfo,
  StakingPosition,
  IFiatCurrencyAmount,
  StakingBucket,
} from '@thesolidchain/sdk-common'
import { parseAbi, encodeFunctionData } from 'viem'
import {
  IProtocolPluginContext,
  IYieldProtocolFeatures,
  IStakeProtocolFeatures,
} from '@thesolidchain/protocol-plugins-common'
import { BaseProtocolPlugin } from '../../../implementation/BaseProtocolPlugin'
import { ConvexYieldPoolId } from './ConvexYieldPoolId'
import { isConvexYieldPoolId } from '../interfaces/IConvexYieldPoolId'
import { ConvexYieldPositionId } from './ConvexYieldPositionId'
import { isConvexYieldPositionId, IConvexYieldPositionId } from '../interfaces/IConvexYieldPositionId'
import { ConvexStakingPoolId } from './ConvexStakingPoolId'
import { isConvexStakingPoolId } from '../interfaces/IConvexStakingPoolId'
import { ConvexStakingPositionId } from './ConvexStakingPositionId'
import { isConvexStakingPositionId, IConvexStakingPositionId } from '../interfaces/IConvexStakingPositionId'
import { IConvexDataSource } from '../interfaces/IConvexDataSource'
import { DefaultConvexDataSource } from './DefaultConvexDataSource'

// Convex Booster Contract on Ethereum Mainnet
const CONVEX_BOOSTER = '0xF403C135812408BFbE8713b5A23a04b3D48AAE31'

/**
 * Protocol plugin for interacting with Convex Finance.
 * @public
 */
export class ConvexProtocolPlugin extends BaseProtocolPlugin implements IYieldProtocolFeatures, IStakeProtocolFeatures {
  public readonly protocolName = ProtocolName.Convex
  public readonly supportedChains = valuesOfChainFamilyMap([ChainFamilyName.Ethereum])

  public readonly yield: IYieldProtocolFeatures = this
  public readonly stake: IStakeProtocolFeatures = this

  private dataSource!: IConvexDataSource

  public initialize(params: { context: IProtocolPluginContext; dataSource?: IConvexDataSource }) {
    super.initialize(params)
    this.dataSource = params.dataSource || new DefaultConvexDataSource(params.context)
  }

  // --- Yield Methods ---

  public async getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo> {
    if (!isConvexYieldPoolId(poolId)) {
      throw new Error(`Invalid Convex Yield Pool ID: ${JSON.stringify(poolId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const poolDto = await this.dataSource.getPool(poolId.tokenAddress)

    return YieldPoolInfo.createFrom({
      id: poolId,
      underlyingToken: poolDto.underlyingToken,
      receiptToken: poolDto.receiptToken,
      yieldType: YieldType.Claimable,
      currentApy: poolDto.currentApy,
      totalValueLocked: poolDto.totalValueLocked as IFiatCurrencyAmount,
    })
  }

  public async getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition> {
    if (!isConvexYieldPositionId(positionId)) {
      throw new Error(`Invalid Convex Yield Position ID: ${JSON.stringify(positionId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const positionDto = await this.dataSource.getUserPosition(
      positionId.tokenAddress,
      positionId.walletAddress,
    )

    return YieldPosition.createFrom({
      id: positionId,
      poolId: new ConvexYieldPoolId(
        positionId.tokenAddress,
        this.context.provider.chain as unknown as IChainInfo,
      ),
      principalAmount: positionDto.principalAmount,
      currentAmount: positionDto.currentAmount,
      claimableRewards: [],
    })
  }

  public async getDepositTransaction(params: {
    poolId: IYieldPoolId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    if (!isConvexYieldPoolId(params.poolId)) {
      throw new Error(`Invalid Convex Yield Pool ID: ${JSON.stringify(params.poolId)}`)
    }

    const depositAbi = parseAbi([
      'function deposit(uint256 _pid, uint256 _amount, bool _stake) external returns (bool)',
    ])

    // Resolve the REAL Convex Booster pool ID on-chain from the reward pool contract itself
    // (see #10). Depositing with the wrong pid moves user funds into an unrelated pool, so
    // this is never hardcoded/defaulted — `getPid` throws if it cannot be resolved. Use the
    // lightweight `getPid` (a single `pid()` read) rather than `getPool`, which additionally
    // runs token-metadata lookups, TVL, and APY calculations that are irrelevant here and
    // would otherwise add several serial RPC/oracle stages to this fund-movement hot path.
    const pid = await this.dataSource.getPid(params.poolId.tokenAddress)

    const calldata = encodeFunctionData({
      abi: depositAbi,
      functionName: 'deposit',
      args: [pid, BigInt(params.amount.toSolidityValue()), true], // true to auto-stake
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: CONVEX_BOOSTER }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Deposit and stake Curve LP to Convex Booster',
    }
  }

  public async getWithdrawTransaction(params: {
    positionId: IYieldPositionId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    if (!isConvexYieldPositionId(params.positionId)) {
      throw new Error(`Invalid Convex Yield Position ID: ${JSON.stringify(params.positionId)}`)
    }

    const withdrawAbi = parseAbi([
      'function withdrawAndUnwrap(uint256 amount, bool claim) external returns (bool)',
    ])

    const calldata = encodeFunctionData({
      abi: withdrawAbi,
      functionName: 'withdrawAndUnwrap',
      args: [BigInt(params.amount.toSolidityValue()), true],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: params.positionId.tokenAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Withdraw and unwrap from Convex Reward Pool',
    }
  }

  // --- Staking Methods ---

  public async getStakingPoolInfo(poolId: IStakingPoolId): Promise<IStakingPoolInfo> {
    if (!isConvexStakingPoolId(poolId)) {
      throw new Error(`Invalid Convex Staking Pool ID: ${JSON.stringify(poolId)}`)
    }

    const poolDto = await this.dataSource.getPool(poolId.tokenAddress)

    return StakingPoolInfo.createFrom({
      id: poolId,
      underlyingToken: poolDto.underlyingToken,
      receiptToken: poolDto.receiptToken,
      currentApy: poolDto.currentApy,
      totalValueLocked: poolDto.totalValueLocked as IFiatCurrencyAmount,
    })
  }

  public async getStakingPosition(positionId: IStakingPositionId): Promise<IStakingPosition> {
    if (!isConvexStakingPositionId(positionId)) {
      throw new Error(`Invalid Convex Staking Position ID: ${JSON.stringify(positionId)}`)
    }

    const positionDto = await this.dataSource.getUserPosition(
      positionId.poolId.tokenAddress,
      positionId.wallet.address.value,
    )

    return StakingPosition.createFrom({
      id: positionId,
      poolId: positionId.poolId,
      principalAmount: positionDto.principalAmount,
      currentAmount: positionDto.currentAmount,
      claimableRewards: [],
    })
  }

  public async getStakeTransaction(params: {
    poolId: IStakingPoolId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    if (!isConvexStakingPoolId(params.poolId)) {
      throw new Error(`Invalid Convex Staking Pool ID: ${JSON.stringify(params.poolId)}`)
    }

    const stakeAbi = parseAbi([
      'function stake(uint256 _amount) external returns (bool)',
    ])

    const calldata = encodeFunctionData({
      abi: stakeAbi,
      functionName: 'stake',
      args: [BigInt(params.amount.toSolidityValue())],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: params.poolId.tokenAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Stake tokens in Convex Reward Pool',
    }
  }

  public async getUnstakeTransaction(params: {
    positionId: IStakingPositionId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    if (!isConvexStakingPositionId(params.positionId)) {
      throw new Error(`Invalid Convex Staking Position ID: ${JSON.stringify(params.positionId)}`)
    }

    const unstakeAbi = parseAbi([
      'function withdraw(uint256 _amount, bool claim) external returns (bool)',
    ])

    const calldata = encodeFunctionData({
      abi: unstakeAbi,
      functionName: 'withdraw',
      args: [BigInt(params.amount.toSolidityValue()), true],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: (params.positionId as IConvexStakingPositionId).poolId.tokenAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Unstake tokens from Convex Reward Pool',
    }
  }

  // --- Hybrid Methods ---

  public async getClaimTransaction(params: {
    positionId: IYieldPositionId | IStakingPositionId
    user: IUser
  }): Promise<TransactionInfo> {
    const isYield = isConvexYieldPositionId(params.positionId)
    const isStaking = isConvexStakingPositionId(params.positionId)

    if (!isYield && !isStaking) {
      throw new Error(`Invalid Convex Position ID: ${JSON.stringify(params.positionId)}`)
    }

    // Both yield and staking share the same BaseRewardPool claim method
    const getRewardAbi = parseAbi([
      'function getReward(address _account, bool _claimExtras) external returns (bool)',
    ])

    const tokenAddress = isYield
      ? (params.positionId as IConvexYieldPositionId).tokenAddress
      : (params.positionId as IConvexStakingPositionId).poolId.tokenAddress

    const calldata = encodeFunctionData({
      abi: getRewardAbi,
      functionName: 'getReward',
      args: [params.user.wallet.address.value as `0x${string}`, true],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: tokenAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Claim rewards from Convex Reward Pool',
    }
  }
}
