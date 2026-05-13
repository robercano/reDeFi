import { AaveV3ContractNames } from '@thesolidchain/deployment-types'
import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import {
  FiatCurrency,
  ChainFamilyName,
  IChainInfo,
  IPositionIdData,
  Maybe,
  ProtocolName,
  valuesOfChainFamilyMap,
  ILendingPoolIdData,
  ILendingPosition,
  ILendingPositionId,
  TransactionInfo,
  IUser,
  TokenAmount,
  LendingPositionType,
  CollateralInfo,
  DebtInfo,
  Percentage,
  Price,
  RiskRatio,
  RiskRatioType,
  Denomination,
  IToken,
  ICollateralInfo,
  HexData,
  IAddress,
} from '@thesolidchain/sdk-common'
import { BigNumber } from 'bignumber.js'
import { BaseLendingProtocolPlugin } from '../../../implementation/BaseLendingProtocolPlugin'
import { ContractInfo } from '../../common/types/ContractInfo'
import { ChainContractsProvider } from '../../utils/ChainContractProvider'
import { AaveV3AbiMap } from '../abis/AaveV3AddressAbiMap'
import {
  IAaveV3LendingPoolId,
  IAaveV3LendingPoolIdData,
  isAaveV3LendingPoolId,
} from '../interfaces/IAaveV3LendingPoolId'
import {
  IAaveV3LendingPositionIdData,
  IAaveV3LendingPositionId,
  isAaveV3LendingPositionId,
} from '../interfaces/IAaveV3LendingPositionId'
import { AaveV3LendingPool } from './AaveV3LendingPool'
import { AaveV3LendingPoolInfo } from './AaveV3LendingPoolInfo'
import { aaveV3EmodeCategoryMap } from './EmodeCategoryMap'
import { AaveV3LendingPosition } from './AaveV3LendingPosition'
import { PRECISION_BI, UNCAPPED_SUPPLY } from '../../common/constants/AaveV3LikeConstants'
import { encodeFunctionData } from 'viem'

/**
 * @class AaveV3ProtocolPlugin
 * Aave V3 protocol plugin
 * @see BaseProtocolPlugin
 */
export class AaveV3ProtocolPlugin extends BaseLendingProtocolPlugin {
  /** The unique name identifying this protocol. */
  readonly protocolName = ProtocolName.AaveV3
  
  /** The list of chains on which this protocol is supported. */
  readonly supportedChains = valuesOfChainFamilyMap([
    ChainFamilyName.Ethereum,
    ChainFamilyName.Base,
    ChainFamilyName.Arbitrum,
    ChainFamilyName.Optimism,
  ])

  private _contractsAbiProvider!: ChainContractsProvider<AaveV3ContractNames, typeof AaveV3AbiMap>

  /**
   * Initializes the Aave V3 protocol plugin with the given context.
   *
   * @param params - The initialization parameters.
   * @param params.context - The protocol plugin context providing configuration and chain access.
   * @throws {Error} If the chain provided in the context is not supported by Aave V3.
   */
  initialize(params: { context: IProtocolPluginContext }) {
    super.initialize(params)
    this._contractsAbiProvider = new ChainContractsProvider(AaveV3AbiMap)

    if (
      !this.supportedChains.some(
        (chainInfo) => chainInfo.chainId === this.context.provider.chain?.id,
      )
    ) {
      throw new Error(`Chain ID ${this.context.provider.chain?.id} is not supported`)
    }
  }

  /** VALIDATORS */

  /**
   * Validates if a given candidate object conforms to the Aave V3 lending pool ID structure.
   *
   * @param candidate - The lending pool ID candidate to validate.
   * @throws {Error} If the candidate is not a valid Aave V3 lending pool ID.
   * @internal
   */
  protected _validateLendingPoolId(
    candidate: ILendingPoolIdData,
  ): asserts candidate is IAaveV3LendingPoolIdData {
    if (!isAaveV3LendingPoolId(candidate)) {
      throw new Error(`Invalid AaveV3 pool ID: ${JSON.stringify(candidate)}`)
    }
  }

  /**
   * Validates if a given candidate object conforms to the Aave V3 lending position ID structure.
   *
   * @param candidate - The lending position ID candidate to validate.
   * @throws {Error} If the candidate is not a valid Aave V3 lending position ID.
   * @internal
   */
  protected _validateLendingPositionId(
    candidate: IPositionIdData,
  ): asserts candidate is IAaveV3LendingPositionIdData {
    if (!isAaveV3LendingPositionId(candidate)) {
      throw new Error(`Invalid AaveV3 position ID: ${JSON.stringify(candidate)}`)
    }
  }

  /** LENDING POOLS */

  /**
   * Retrieves an Aave V3 lending pool instance for the given pool ID.
   *
   * @param aaveV3PoolId - The Aave V3 lending pool ID.
   * @returns A promise that resolves to the Aave V3 lending pool instance.
   * @internal
   */
  async _getLendingPoolImpl(aaveV3PoolId: IAaveV3LendingPoolId): Promise<AaveV3LendingPool> {
    return AaveV3LendingPool.createFrom({
      id: aaveV3PoolId,
      collateralToken: aaveV3PoolId.collateralToken,
      debtToken: aaveV3PoolId.debtToken,
    })
  }

  /**
   * Retrieves detailed information about an Aave V3 lending pool, including collateral and debt metrics.
   * Executes multicall against the PoolDataProvider and Oracle contracts to fetch reserves and prices.
   *
   * @param aaveV3PoolId - The Aave V3 lending pool ID.
   * @returns A promise that resolves to detailed Aave V3 lending pool information.
   * @internal
   */
  async _getLendingPoolInfoImpl(
    aaveV3PoolId: IAaveV3LendingPoolId,
  ): Promise<AaveV3LendingPoolInfo> {
    const chainInfo = aaveV3PoolId.protocol.chainInfo

    const [dataProviderContract, oracleContract] = await Promise.all([
      this._getContractDef({ chainInfo, contractName: 'PoolDataProvider' }),
      this._getContractDef({ chainInfo, contractName: 'Oracle' }),
    ])

    const collateralAddress = aaveV3PoolId.collateralToken.address.value
    const debtAddress = aaveV3PoolId.debtToken.address.value

    const results = (await this.context.provider.multicall({
      contracts: [
        {
          abi: dataProviderContract.abi,
          address: dataProviderContract.address,
          functionName: 'getReserveConfigurationData',
          args: [collateralAddress],
        },
        {
          abi: dataProviderContract.abi,
          address: dataProviderContract.address,
          functionName: 'getReserveData',
          args: [collateralAddress],
        },
        {
          abi: dataProviderContract.abi,
          address: dataProviderContract.address,
          functionName: 'getReserveCaps',
          args: [collateralAddress],
        },
        {
          abi: oracleContract.abi,
          address: oracleContract.address,
          functionName: 'getAssetPrice',
          args: [collateralAddress],
        },
        {
          abi: dataProviderContract.abi,
          address: dataProviderContract.address,
          functionName: 'getReserveConfigurationData',
          args: [debtAddress],
        },
        {
          abi: dataProviderContract.abi,
          address: dataProviderContract.address,
          functionName: 'getReserveData',
          args: [debtAddress],
        },
        {
          abi: dataProviderContract.abi,
          address: dataProviderContract.address,
          functionName: 'getReserveCaps',
          args: [debtAddress],
        },
        {
          abi: oracleContract.abi,
          address: oracleContract.address,
          functionName: 'getAssetPrice',
          args: [debtAddress],
        },
      ],
      allowFailure: false,
    })) as unknown[]

    const collateralInfo = this._buildCollateralInfo({
      token: aaveV3PoolId.collateralToken,
      poolBaseCurrencyToken: FiatCurrency.USD,
      config: results[0] as bigint[],
      data: results[1] as bigint[],
      caps: results[2] as bigint[],
      price: results[3] as bigint,
    })

    const debtInfo = this._buildDebtInfo({
      token: aaveV3PoolId.debtToken,
      poolBaseCurrencyToken: FiatCurrency.USD,
      config: results[4] as bigint[],
      data: results[5] as bigint[],
      caps: results[6] as bigint[],
      price: results[7] as bigint,
    })

    return AaveV3LendingPoolInfo.createFrom({
      id: aaveV3PoolId,
      collateral: collateralInfo,
      debt: debtInfo,
    })
  }

  private _buildCollateralInfo(params: {
    token: IToken
    poolBaseCurrencyToken: Denomination
    config: bigint[]
    data: bigint[]
    caps: bigint[]
    price: bigint
  }): ICollateralInfo {
    const { token, poolBaseCurrencyToken, config, data, caps, price } = params
    const LTV_TO_PERCENTAGE_DIVISOR = new BigNumber(100)

    const liquidationThreshold = config[2]
    const liquidationBonus = config[3]
    const totalAToken = data[2]
    const supplyCap = caps[1]

    return CollateralInfo.createFrom({
      token,
      price: Price.createFrom({
        base: token,
        quote: poolBaseCurrencyToken,
        value: price.toString(),
      }),
      priceUSD: Price.createFrom({
        base: token,
        quote: FiatCurrency.USD,
        value: price.toString(),
      }),
      liquidationThreshold: RiskRatio.createFrom({
        value: Percentage.createFrom({
          value: new BigNumber(liquidationThreshold.toString())
            .div(LTV_TO_PERCENTAGE_DIVISOR)
            .toNumber(),
        }),
        type: RiskRatioType.LTV,
      }),
      tokensLocked: TokenAmount.createFromBaseUnit({
        token,
        amount: totalAToken.toString(),
      }),
      maxSupply: TokenAmount.createFrom({
        token,
        amount: supplyCap === 0n ? UNCAPPED_SUPPLY : supplyCap.toString(),
      }),
      liquidationPenalty: Percentage.createFrom({
        value: new BigNumber(liquidationBonus.toString()).div(LTV_TO_PERCENTAGE_DIVISOR).toNumber(),
      }),
    })
  }

  private _buildDebtInfo(params: {
    token: IToken
    poolBaseCurrencyToken: Denomination
    config: bigint[]
    data: bigint[]
    caps: bigint[]
    price: bigint
  }): DebtInfo {
    const { token, poolBaseCurrencyToken, config, data, caps, price } = params

    const reserveFactor = config[4]
    const totalStableDebt = data[3]
    const totalVariableDebt = data[4]
    const variableBorrowRate = data[6]
    const borrowCap = caps[0]

    const assetDecimals = token.decimals
    const assetFactor = new BigNumber(10).pow(assetDecimals)
    const borrowCapWithDecimals = BigInt(
      new BigNumber(borrowCap.toString()).multipliedBy(assetFactor).toFixed(0),
    )

    const RESERVE_FACTOR_TO_PERCENTAGE_DIVISOR = 10000n
    const PRECISION_PRESERVING_OFFSET = 1000000n
    const RATE_DIVISOR_TO_GET_PERCENTAGE = Number((PRECISION_PRESERVING_OFFSET - 100n).toString())

    const rate =
      Number(((variableBorrowRate * PRECISION_PRESERVING_OFFSET) / PRECISION_BI.RAY).toString()) /
      RATE_DIVISOR_TO_GET_PERCENTAGE
    const totalBorrowed = totalVariableDebt + totalStableDebt

    return DebtInfo.createFrom({
      token,
      price: Price.createFrom({
        base: token,
        quote: poolBaseCurrencyToken,
        value: price.toString(),
      }),
      priceUSD: Price.createFrom({
        base: token,
        quote: FiatCurrency.USD,
        value: price.toString(),
      }),
      interestRate: Percentage.createFrom({ value: rate }),
      totalBorrowed: TokenAmount.createFromBaseUnit({
        token,
        amount: totalBorrowed.toString(),
      }),
      debtCeiling: TokenAmount.createFrom({
        token,
        amount: borrowCapWithDecimals === 0n ? UNCAPPED_SUPPLY : borrowCapWithDecimals.toString(),
      }),
      debtAvailable: TokenAmount.createFromBaseUnit({
        token,
        amount:
          borrowCapWithDecimals === 0n
            ? UNCAPPED_SUPPLY
            : (borrowCapWithDecimals - totalBorrowed).toString(),
      }),
      dustLimit: TokenAmount.createFromBaseUnit({ token, amount: '0' }),
      originationFee: Percentage.createFrom({
        value: Number((reserveFactor / RESERVE_FACTOR_TO_PERCENTAGE_DIVISOR).toString()),
      }),
    })
  }

  /** POSITIONS */

  /**
   * Retrieves a lending position for a specific wallet in an Aave V3 pool.
   * Fetches user reserve data (aToken and debtToken balances) and validates eMode settings.
   *
   * @param positionId - The lending position ID containing the pool ID and wallet address.
   * @returns A promise that resolves to the lending position details.
   * @throws {Error} If the user's eMode does not match the pool's expected eMode.
   */
  async getLendingPosition(positionId: ILendingPositionId): Promise<ILendingPosition> {
    this._validateLendingPositionId(positionId)

    const { poolId, walletAddress } = positionId
    const chainInfo = poolId.protocol.chainInfo

    const [dataProviderContract, aavePoolContract] = await Promise.all([
      this._getContractDef({ chainInfo, contractName: 'PoolDataProvider' }),
      this._getContractDef({ chainInfo, contractName: 'AavePool' }),
    ])

    const [collateralReserveData, debtReserveData, userEMode] =
      await this.context.provider.multicall({
        contracts: [
          {
            abi: dataProviderContract.abi,
            address: dataProviderContract.address,
            functionName: 'getUserReserveData',
            args: [poolId.collateralToken.address.value, walletAddress.value],
          },
          {
            abi: dataProviderContract.abi,
            address: dataProviderContract.address,
            functionName: 'getUserReserveData',
            args: [poolId.debtToken.address.value, walletAddress.value],
          },
          {
            abi: aavePoolContract.abi,
            address: aavePoolContract.address,
            functionName: 'getUserEMode',
            args: [walletAddress.value],
          },
        ],
        allowFailure: false,
      })

    const currentATokenBalance = (collateralReserveData as unknown[])[0] as bigint
    const currentVariableDebt = (debtReserveData as unknown[])[2] as bigint

    const expectedEmode = aaveV3EmodeCategoryMap[poolId.emodeType]
    if (expectedEmode !== Number(userEMode)) {
      throw new Error(`User eMode ${userEMode} does not match pool eMode ${expectedEmode}`)
    }

    const pool = await this._getLendingPoolImpl(poolId)

    return AaveV3LendingPosition.createFrom({
      id: positionId as IAaveV3LendingPositionId,
      pool,
      subtype: LendingPositionType.Borrow,
      collateralAmount: TokenAmount.createFromBaseUnit({
        token: poolId.collateralToken,
        amount: currentATokenBalance.toString(),
      }),
      debtAmount: TokenAmount.createFromBaseUnit({
        token: poolId.debtToken,
        amount: currentVariableDebt.toString(),
      }),
    })
  }

  /** SUPPLY TRANSACTION */

  /**
   * Generates a supply transaction to deposit tokens into an Aave V3 pool.
   *
   * @param params - The supply parameters.
   * @param params.poolId - The lending pool ID to supply to.
   * @param params.amount - The token amount to supply.
   * @param params.user - The user initiating the supply transaction.
   * @returns A promise that resolves to the supply transaction information.
   */
  async getSupplyTransaction(params: {
    poolId: ILendingPoolIdData
    amount: TokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    const chainInfo = params.poolId.protocol.chainInfo
    const aavePoolContract = await this._getContractDef({ chainInfo, contractName: 'AavePool' })

    const asset = params.amount.token.address.value
    const amount = params.amount.toSolidityValue()
    const onBehalfOf = params.user.wallet.address.value
    const referralCode = 0

    const data = encodeFunctionData({
      abi: aavePoolContract.abi,
      functionName: 'supply',
      args: [asset, amount, onBehalfOf, referralCode],
    })

    return {
      transaction: {
        target: { value: aavePoolContract.address } as IAddress, // assuming IAddress shape
        calldata: data as HexData,
        value: '0',
      },
      description: 'Supply tokens to Aave V3',
    }
  }

  /** PRIVATE */

  protected async _getContractDef(params: {
    chainInfo: IChainInfo
    contractName: AaveV3ContractNames
  }): Promise<ContractInfo> {
    const contractAddress = await this._getContractAddress({
      chainInfo: params.chainInfo,
      contractName: params.contractName,
    })

    return {
      address: contractAddress.value,
      abi: AaveV3AbiMap[params.contractName],
    }
  }
}
