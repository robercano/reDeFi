import {
  ILendingProtocolFeatures,
} from '@thesolidchain/protocol-plugins-common'
import {
  IPositionIdData,
  Maybe,
  IExternalLendingPosition,
  IPositionsManager,
  TransactionInfo,
  ILendingPool,
  ILendingPoolIdData,
  ILendingPoolInfo,
  ILendingPosition,
  ILendingPositionIdData,
  IUser,
  TokenAmount,
} from '@thesolidchain/sdk-common'

import { BaseProtocolPlugin } from './BaseProtocolPlugin'

/**
 * @class BaseLendingProtocolPlugin
 * Base class for all lending protocol plugins
 *
 * It provides the lending feature module implementation, setting `lending = this`
 */
export abstract class BaseLendingProtocolPlugin extends BaseProtocolPlugin implements ILendingProtocolFeatures {
  /** Feature modules */
  readonly lending = this

  /** VALIDATORS */

  /**
   * _validateLendingPoolId
   * Validates that the candidate is a valid lending pool ID for the specific protocol
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid lending pool ID for the specific protocol
   */
  protected abstract _validateLendingPoolId(
    candidate: ILendingPoolIdData,
  ): asserts candidate is ILendingPoolIdData

  /**
   * _validatePositionId
   * Validates that the candidate is a valid position ID for the specific protocol
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid position ID for the specific protocol
   */
  protected abstract _validateLendingPositionId(
    candidate: IPositionIdData,
  ): asserts candidate is IPositionIdData

  /** LENDING POOLS */

  /**
   * getLendingPoolImpl
   * Gets the lending pool for the given pool ID
   * @param params.poolId The pool ID
   * @returns The lending pool for the specific protocol
   *
   * @remarks This method should be implemented by the protocol plugin as the external one is just a wrapper to
   * validate the input and call this one
   */
  protected abstract _getLendingPoolImpl(poolId: ILendingPoolIdData): Promise<ILendingPool>

  /**
   * getLendingPoolInfoImpl
   * Gets the lending pool info for the given pool ID
   * @param params.poolId The pool ID
   * @returns The lending pool info for the specific protocol
   *
   * @remarks This method should be implemented by the protocol plugin as the external one is just a wrapper to
   * validate the input and call this one
   */
  protected abstract _getLendingPoolInfoImpl(poolId: ILendingPoolIdData): Promise<ILendingPoolInfo>

  /** @see ILendingProtocolFeatures.getLendingPool */
  async getLendingPool(poolId: ILendingPoolIdData): Promise<ILendingPool> {
    this._validateLendingPoolId(poolId)
    this._checkChainIdSupported(poolId.protocol.chainInfo.chainId)

    return this._getLendingPoolImpl(poolId)
  }

  /** @see ILendingProtocolFeatures.getLendingPoolInfo */
  async getLendingPoolInfo(poolId: ILendingPoolIdData): Promise<ILendingPoolInfo> {
    this._validateLendingPoolId(poolId)
    this._checkChainIdSupported(poolId.protocol.chainInfo.chainId)

    return this._getLendingPoolInfoImpl(poolId)
  }

  /** POSITIONS */

  /** @see ILendingProtocolFeatures.getLendingPosition */
  abstract getLendingPosition(positionId: ILendingPositionIdData): Promise<ILendingPosition>

  /** IMPORT POSITION */

  /** @see ILendingProtocolFeatures.getImportPositionTransaction */
  abstract getImportPositionTransaction(params: {
    user: IUser
    externalPosition: IExternalLendingPosition
    positionsManager: IPositionsManager
  }): Promise<Maybe<TransactionInfo>>

  /** SUPPLY TRANSACTION */

  /** @see ILendingProtocolFeatures.getSupplyTransaction */
  abstract getSupplyTransaction(params: {
    poolId: ILendingPoolIdData
    amount: TokenAmount
    user: IUser
  }): Promise<TransactionInfo>
}
