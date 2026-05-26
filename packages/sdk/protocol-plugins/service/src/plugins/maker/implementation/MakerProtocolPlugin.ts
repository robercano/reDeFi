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
import { MakerYieldPoolId } from './MakerYieldPoolId'
import { isMakerYieldPoolId } from '../interfaces/IMakerYieldPoolId'
import { MakerYieldPositionId } from './MakerYieldPositionId'
import { isMakerYieldPositionId } from '../interfaces/IMakerYieldPositionId'
import { IMakerDataSource } from '../interfaces/IMakerDataSource'
import { DefaultMakerDataSource } from './DefaultMakerDataSource'

/**
 * Protocol plugin for interacting with Maker/Sky ERC-4626 Vaults (e.g., sDAI, sUSDS).
 * @public
 */
export class MakerProtocolPlugin extends BaseProtocolPlugin implements IYieldProtocolFeatures {
  public readonly protocolName = ProtocolName.Maker
  // Maker/Sky yield vaults are typically on Ethereum Mainnet and several L2s.
  public readonly supportedChains = valuesOfChainFamilyMap([
    ChainFamilyName.Ethereum,
    ChainFamilyName.Base,
    ChainFamilyName.Arbitrum,
    ChainFamilyName.Optimism,
  ])

  public readonly yield: IYieldProtocolFeatures = this

  private dataSource!: IMakerDataSource

  public initialize(params: { context: IProtocolPluginContext; dataSource?: IMakerDataSource }) {
    super.initialize(params)
    this.dataSource = params.dataSource || new DefaultMakerDataSource(params.context)
  }

  public async getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo> {
    if (!isMakerYieldPoolId(poolId)) {
      throw new Error(`Invalid Maker Pool ID: ${JSON.stringify(poolId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const poolDto = await this.dataSource.getVault(poolId.vaultAddress)

    return YieldPoolInfo.createFrom({
      id: poolId,
      underlyingToken: poolDto.underlyingToken,
      receiptToken: poolDto.receiptToken,
      yieldType: YieldType.ValueAccruing, // ERC4626 vaults accrue value (shares increase in price)
      currentApy: poolDto.currentApy,
      totalValueLocked: poolDto.totalValueLocked as IFiatCurrencyAmount,
    })
  }

  public async getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition> {
    if (!isMakerYieldPositionId(positionId)) {
      throw new Error(`Invalid Maker Position ID: ${JSON.stringify(positionId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const positionDto = await this.dataSource.getUserPosition(
      positionId.vaultAddress,
      positionId.walletAddress,
    )

    return YieldPosition.createFrom({
      id: positionId,
      poolId: new MakerYieldPoolId(
        positionId.vaultAddress,
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
    if (!isMakerYieldPoolId(params.poolId)) {
      throw new Error(`Invalid Maker Pool ID: ${JSON.stringify(params.poolId)}`)
    }

    // Standard ERC-4626 deposit function
    const depositAbi = parseAbi(['function deposit(uint256 assets, address receiver) external returns (uint256)'])
    
    const calldata = encodeFunctionData({
      abi: depositAbi,
      functionName: 'deposit',
      args: [
        BigInt(params.amount.toSolidityValue()),
        params.user.wallet.address.value as `0x${string}`
      ],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: params.poolId.vaultAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Deposit into Maker Vault',
    }
  }

  public async getWithdrawTransaction(params: {
    positionId: IYieldPositionId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    if (!isMakerYieldPositionId(params.positionId)) {
      throw new Error(`Invalid Maker Position ID: ${JSON.stringify(params.positionId)}`)
    }

    // Because params.amount is the *underlying* token amount we want back,
    // we use `withdraw` rather than `redeem`.
    // ERC-4626: withdraw(uint256 assets, address receiver, address owner)
    const withdrawAbi = parseAbi([
      'function withdraw(uint256 assets, address receiver, address owner) external returns (uint256)'
    ])
    
    const calldata = encodeFunctionData({
      abi: withdrawAbi,
      functionName: 'withdraw',
      args: [
        BigInt(params.amount.toSolidityValue()),
        params.user.wallet.address.value as `0x${string}`, // receiver
        params.user.wallet.address.value as `0x${string}`, // owner
      ],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: params.positionId.vaultAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Withdraw from Maker Vault',
    }
  }
}
