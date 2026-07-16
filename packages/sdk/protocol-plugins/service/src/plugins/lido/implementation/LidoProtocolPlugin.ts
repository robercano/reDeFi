import {
  ChainFamilyName,
  IYieldPoolId,
  IYieldPositionId,
  IYieldPoolInfo,
  IYieldPosition,
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
  IFiatCurrencyAmount,
} from '@thesolidchain/sdk-common'
import { parseAbi, encodeFunctionData } from 'viem'
import {
  IProtocolPluginContext,
  IYieldProtocolFeatures,
} from '@thesolidchain/protocol-plugins-common'
import { BaseProtocolPlugin } from '../../../implementation/BaseProtocolPlugin'
import { LidoYieldPoolId } from './LidoYieldPoolId'
import { isLidoYieldPoolId } from '../interfaces/ILidoYieldPoolId'
import { isLidoYieldPositionId } from '../interfaces/ILidoYieldPositionId'
import { ILidoDataSource } from '../interfaces/ILidoDataSource'
import { DefaultLidoDataSource } from './DefaultLidoDataSource'

/**
 * Protocol plugin for interacting with Lido Staking.
 * @public
 */
export class LidoProtocolPlugin extends BaseProtocolPlugin implements IYieldProtocolFeatures {
  public readonly protocolName = ProtocolName.Lido
  public readonly supportedChains = valuesOfChainFamilyMap([ChainFamilyName.Ethereum])

  public readonly yield: IYieldProtocolFeatures = this

  private dataSource!: ILidoDataSource

  public initialize(params: { context: IProtocolPluginContext; dataSource?: ILidoDataSource }) {
    super.initialize(params)
    this.dataSource = params.dataSource || new DefaultLidoDataSource(params.context)
  }

  public async getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo> {
    if (!isLidoYieldPoolId(poolId)) {
      throw new Error(`Invalid Lido Pool ID: ${JSON.stringify(poolId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const poolDto = await this.dataSource.getPool(poolId.tokenAddress)

    return YieldPoolInfo.createFrom({
      id: poolId,
      underlyingToken: poolDto.underlyingToken,
      receiptToken: poolDto.receiptToken,
      yieldType: YieldType.Rebasing,
      currentApy: poolDto.currentApy,
      totalValueLocked: poolDto.totalValueLocked as IFiatCurrencyAmount,
    })
  }

  public async getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition> {
    if (!isLidoYieldPositionId(positionId)) {
      throw new Error(`Invalid Lido Position ID: ${JSON.stringify(positionId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const positionDto = await this.dataSource.getUserPosition(
      positionId.tokenAddress,
      positionId.walletAddress,
    )

    return YieldPosition.createFrom({
      id: positionId,
      poolId: new LidoYieldPoolId(
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
    if (!isLidoYieldPoolId(params.poolId)) {
      throw new Error(`Invalid Lido Pool ID: ${JSON.stringify(params.poolId)}`)
    }

    const submitAbi = parseAbi([
      'function submit(address _referral) external payable returns (uint256)',
    ])
    const calldata = encodeFunctionData({
      abi: submitAbi,
      functionName: 'submit',
      args: ['0x0000000000000000000000000000000000000000'],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: params.poolId.tokenAddress }),
        calldata: calldata as HexData,
        value: params.amount.toSolidityValue().toString(),
      },
      description: 'Deposit ETH to Lido',
    }
  }

  public async getWithdrawTransaction(params: {
    positionId: IYieldPositionId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    if (!isLidoYieldPositionId(params.positionId)) {
      throw new Error(`Invalid Lido Position ID: ${JSON.stringify(params.positionId)}`)
    }

    const requestWithdrawalsAbi = parseAbi([
      'function requestWithdrawals(uint256[] _amounts, address _owner) external returns (uint256[])',
    ])

    const calldata = encodeFunctionData({
      abi: requestWithdrawalsAbi,
      functionName: 'requestWithdrawals',
      args: [
        [BigInt(params.amount.toSolidityValue())],
        params.user.wallet.address.value as `0x${string}`,
      ],
    })

    // Hardcoded Lido WithdrawalQueueERC721 on Ethereum Mainnet
    const withdrawalQueueAddress = '0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1'

    return {
      transaction: {
        target: Address.createFromEthereum({ value: withdrawalQueueAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Request withdrawal of stETH from Lido',
    }
  }

  public async getClaimTransaction(): Promise<TransactionInfo> {
    throw new Error('Method getClaimTransaction is not supported for Lido protocol (rebasing)')
  }
}
