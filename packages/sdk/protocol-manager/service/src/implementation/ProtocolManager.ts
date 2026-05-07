import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IProtocolPluginsRegistry } from '@thesolidchain/protocol-plugins-common'
import {
  IPositionId,
  Maybe,
  isPositionId,
  ILendingPool,
  ILendingPoolId,
  ILendingPoolInfo,
  ILendingPosition,
  ILendingPositionId,
  isLendingPoolId,
  IExternalLendingPosition,
  IPositionsManager,
  TransactionInfo,
  IUser,
} from '@thesolidchain/sdk-common'

/**
 * @class ProtocolManager
 * Component that offers access to the different protocol plugins for the endpoint service
 * @see IProtocolManager
 *
 * It validates the input data coming from the SDK client and forwards the requests to the corresponding protocol plugin
 * Each plugin is in charge of further validation and processing of the request
 */
export class ProtocolManager implements IProtocolManager {
  /** The registry of protocol plugins */
  private _pluginsRegistry: IProtocolPluginsRegistry

  /** Feature modules */
  readonly lending = this
  readonly yield: any = undefined
  readonly stake: any = undefined

  /**
   * createWith
   * @param params.pluginsRegistry The registry of protocol plugins
   * @returns A new instance of ProtocolManager
   */
  static createWith(params: { pluginsRegistry: IProtocolPluginsRegistry }): ProtocolManager {
    return new ProtocolManager(params)
  }

  /** Sealed constructor */
  private constructor(params: { pluginsRegistry: IProtocolPluginsRegistry }) {
    this._pluginsRegistry = params.pluginsRegistry
  }

  /** @see ILendingProtocolManagerFeatures.getLendingPool */
  async getLendingPool(poolId: ILendingPoolId): Promise<ILendingPool> {
    this._validateLendingPoolId(poolId)

    const plugin = this._pluginsRegistry.getPlugin({ protocolName: poolId.protocol.name })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${poolId.protocol.name} not found`)
    }
    if (!plugin.lending) {
      throw new Error(`Protocol plugin for protocol ${poolId.protocol.name} does not support lending`)
    }
    return plugin.lending.getLendingPool(poolId)
  }

  /** @see ILendingProtocolManagerFeatures.getLendingPoolInfo */
  async getLendingPoolInfo(poolId: ILendingPoolId): Promise<ILendingPoolInfo> {
    this._validateLendingPoolId(poolId)

    const plugin = this._pluginsRegistry.getPlugin({ protocolName: poolId.protocol.name })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${poolId.protocol.name} not found`)
    }
    if (!plugin.lending) {
      throw new Error(`Protocol plugin for protocol ${poolId.protocol.name} does not support lending`)
    }
    return plugin.lending.getLendingPoolInfo(poolId)
  }

  /** @see ILendingProtocolManagerFeatures.getLendingPosition */
  async getLendingPosition(positionId: ILendingPositionId): Promise<ILendingPosition> {
    this._validatePositionId(positionId)

    throw new Error('Not implemented')
  }

  /** @see ILendingProtocolManagerFeatures.getImportPositionTransaction */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  async getImportPositionTransaction(params: {
    user: IUser
    externalPosition: IExternalLendingPosition
    positionsManager: IPositionsManager
  }): Promise<Maybe<TransactionInfo>> {
    const plugin = this._pluginsRegistry.getPlugin({ protocolName: params.externalPosition.pool.id.protocol.name })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${params.externalPosition.pool.id.protocol.name} not found`)
    }
    if (!plugin.lending) {
      throw new Error(`Protocol plugin for protocol ${params.externalPosition.pool.id.protocol.name} does not support lending`)
    }
    return plugin.lending.getImportPositionTransaction(params)
  }

  /** PRIVATE */

  /**
   * _validateLendingPoolId
   * Validates that the candidate is a valid lending pool ID for the specific protocol
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid lending pool ID for the specific protocol
   */
  private _validateLendingPoolId(candidate: unknown): asserts candidate is ILendingPoolId {
    if (!isLendingPoolId(candidate)) {
      throw new Error(`Invalid lending pool ID: ${JSON.stringify(candidate)}`)
    }
  }

  /**
   * _validateLendingPoolId
   * Validates that the candidate is a valid lending pool ID for the specific protocol
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid lending pool ID for the specific protocol
   */
  private _validatePositionId(candidate: unknown): asserts candidate is IPositionId {
    if (!isPositionId(candidate)) {
      throw new Error(`Invalid lending pool ID: ${JSON.stringify(candidate)}`)
    }
  }
}
