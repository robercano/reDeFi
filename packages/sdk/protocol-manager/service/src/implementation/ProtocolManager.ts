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
  IYieldPoolId,
  IYieldPoolInfo,
  IYieldPosition,
  IYieldPositionId,
  isYieldPoolId,
  isYieldPositionId,
  ILiquidityPoolId,
  ILiquidityPoolInfo,
  ILiquidityPosition,
  ILiquidityPositionId,
  isLiquidityPoolId,
  isLiquidityPositionId,
  ProtocolName,
  IStakingPoolId,
  IStakingPoolInfo,
  IStakingPosition,
  IStakingPositionId,
  isStakingPoolId,
  isStakingPositionId,
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
  readonly yield = this
  readonly liquidity = this
  readonly stake = this

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
      throw new Error(
        `Protocol plugin for protocol ${poolId.protocol.name} does not support lending`,
      )
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
      throw new Error(
        `Protocol plugin for protocol ${poolId.protocol.name} does not support lending`,
      )
    }
    return plugin.lending.getLendingPoolInfo(poolId)
  }

  /** @see ILendingProtocolManagerFeatures.getLendingPosition */
  async getLendingPosition(positionId: ILendingPositionId): Promise<ILendingPosition> {
    this._validatePositionId(positionId)

    const typedPositionId = positionId as IPositionId & { protocol?: { name: string }, poolId?: { protocol: { name: string } } }
    const protocolName = (typedPositionId.protocol?.name || typedPositionId.poolId?.protocol?.name) as ProtocolName
    if (!protocolName) {
      throw new Error(
        `Unable to determine protocol from position ID: ${JSON.stringify(positionId)}`,
      )
    }

    const plugin = this._pluginsRegistry.getPlugin({ protocolName })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${protocolName} not found`)
    }
    if (!plugin.lending) {
      throw new Error(`Protocol plugin for protocol ${protocolName} does not support lending`)
    }
    return plugin.lending.getLendingPosition(positionId)
  }

  /** @see IYieldProtocolManagerFeatures.getYieldPoolInfo */
  async getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo> {
    this._validateYieldPoolId(poolId)

    const plugin = this._pluginsRegistry.getPlugin({ protocolName: poolId.protocol.name })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${poolId.protocol.name} not found`)
    }
    if (!plugin.yield) {
      throw new Error(`Protocol plugin for protocol ${poolId.protocol.name} does not support yield`)
    }
    return plugin.yield.getYieldPoolInfo(poolId)
  }

  /** @see IYieldProtocolManagerFeatures.getYieldPosition */
  async getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition> {
    this._validateYieldPositionId(positionId)

    const typedPositionId = positionId as IPositionId & { protocol?: { name: string }, poolId?: { protocol: { name: string } } }
    const protocolName = (typedPositionId.protocol?.name || typedPositionId.poolId?.protocol?.name) as ProtocolName
    if (!protocolName) {
      throw new Error(
        `Unable to determine protocol from position ID: ${JSON.stringify(positionId)}`,
      )
    }

    const plugin = this._pluginsRegistry.getPlugin({ protocolName })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${protocolName} not found`)
    }
    if (!plugin.yield) {
      throw new Error(`Protocol plugin for protocol ${protocolName} does not support yield`)
    }
    return plugin.yield.getYieldPosition(positionId)
  }

  /** @see IYieldProtocolManagerFeatures.getClaimTransaction */
  /** @see IStakingProtocolManagerFeatures.getClaimTransaction */
  async getClaimTransaction(params: {
    positionId: IYieldPositionId | IStakingPositionId
    user: import('@thesolidchain/sdk-common').IUser
  }): Promise<import('@thesolidchain/sdk-common').TransactionInfo> {
    const typedPositionId = params.positionId as IPositionId & { protocol?: { name: string }, poolId?: { protocol: { name: string } } }
    const protocolName = (typedPositionId.protocol?.name || typedPositionId.poolId?.protocol?.name) as ProtocolName
    if (!protocolName) {
      throw new Error(
        `Unable to determine protocol from position ID: ${JSON.stringify(params.positionId)}`,
      )
    }

    const plugin = this._pluginsRegistry.getPlugin({ protocolName })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${protocolName} not found`)
    }

    if (isYieldPositionId(params.positionId)) {
      this._validateYieldPositionId(params.positionId)
      if (!plugin.yield) throw new Error(`Protocol plugin for protocol ${protocolName} does not support yield`)
      return plugin.yield.getClaimTransaction({ ...params, positionId: params.positionId })
    } else if (isStakingPositionId(params.positionId)) {
      this._validateStakingPositionId(params.positionId)
      if (!plugin.stake) throw new Error(`Protocol plugin for protocol ${protocolName} does not support staking`)
      return plugin.stake.getClaimTransaction({ ...params, positionId: params.positionId })
    } else {
      throw new Error(`Invalid position ID for claim transaction: ${JSON.stringify(params.positionId)}`)
    }
  }

  /** @see IStakingProtocolManagerFeatures.getStakingPoolInfo */
  async getStakingPoolInfo(poolId: IStakingPoolId): Promise<IStakingPoolInfo> {
    this._validateStakingPoolId(poolId)

    const plugin = this._pluginsRegistry.getPlugin({ protocolName: poolId.protocol.name })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${poolId.protocol.name} not found`)
    }
    if (!plugin.stake) {
      throw new Error(`Protocol plugin for protocol ${poolId.protocol.name} does not support staking`)
    }
    return plugin.stake.getStakingPoolInfo(poolId)
  }

  /** @see IStakingProtocolManagerFeatures.getStakingPosition */
  async getStakingPosition(positionId: IStakingPositionId): Promise<IStakingPosition> {
    this._validateStakingPositionId(positionId)

    const typedPositionId = positionId as IPositionId & { protocol?: { name: string }, poolId?: { protocol: { name: string } } }
    const protocolName = (typedPositionId.protocol?.name || typedPositionId.poolId?.protocol?.name) as ProtocolName
    if (!protocolName) {
      throw new Error(
        `Unable to determine protocol from position ID: ${JSON.stringify(positionId)}`,
      )
    }

    const plugin = this._pluginsRegistry.getPlugin({ protocolName })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${protocolName} not found`)
    }
    if (!plugin.stake) {
      throw new Error(`Protocol plugin for protocol ${protocolName} does not support staking`)
    }
    return plugin.stake.getStakingPosition(positionId)
  }

  /** @see IStakingProtocolManagerFeatures.getStakeTransaction */
  async getStakeTransaction(params: {
    poolId: IStakingPoolId
    amount: import('@thesolidchain/sdk-common').ITokenAmount
    user: import('@thesolidchain/sdk-common').IUser
  }): Promise<import('@thesolidchain/sdk-common').TransactionInfo> {
    this._validateStakingPoolId(params.poolId)
    const plugin = this._pluginsRegistry.getPlugin({ protocolName: params.poolId.protocol.name })
    if (!plugin || !plugin.stake) throw new Error(`Staking not supported for protocol ${params.poolId.protocol.name}`)
    return plugin.stake.getStakeTransaction(params)
  }

  /** @see IStakingProtocolManagerFeatures.getUnstakeTransaction */
  async getUnstakeTransaction(params: {
    positionId: IStakingPositionId
    amount: import('@thesolidchain/sdk-common').ITokenAmount
    user: import('@thesolidchain/sdk-common').IUser
  }): Promise<import('@thesolidchain/sdk-common').TransactionInfo> {
    this._validateStakingPositionId(params.positionId)
    const typedPositionId = params.positionId as IPositionId & { protocol?: { name: string }, poolId?: { protocol: { name: string } } }
    const protocolName = (typedPositionId.protocol?.name || typedPositionId.poolId?.protocol?.name) as ProtocolName
    const plugin = this._pluginsRegistry.getPlugin({ protocolName })
    if (!plugin || !plugin.stake) throw new Error(`Staking not supported for protocol ${protocolName}`)
    return plugin.stake.getUnstakeTransaction(params)
  }



  /** @see ILiquidityProtocolManagerFeatures.getLiquidityPoolInfo */
  async getLiquidityPoolInfo(poolId: ILiquidityPoolId): Promise<ILiquidityPoolInfo> {
    this._validateLiquidityPoolId(poolId)

    const plugin = this._pluginsRegistry.getPlugin({ protocolName: poolId.protocol.name })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${poolId.protocol.name} not found`)
    }
    if (!plugin.liquidity) {
      throw new Error(
        `Protocol plugin for protocol ${poolId.protocol.name} does not support liquidity`,
      )
    }
    return plugin.liquidity.getLiquidityPoolInfo(poolId)
  }

  /** @see ILiquidityProtocolManagerFeatures.getLiquidityPosition */
  async getLiquidityPosition(positionId: ILiquidityPositionId): Promise<ILiquidityPosition> {
    this._validateLiquidityPositionId(positionId)

    const typedPositionId = positionId as IPositionId & { protocol?: { name: string }, poolId?: { protocol: { name: string } } }
    const protocolName = (typedPositionId.protocol?.name || typedPositionId.poolId?.protocol?.name) as ProtocolName
    if (!protocolName) {
      throw new Error(
        `Unable to determine protocol from position ID: ${JSON.stringify(positionId)}`,
      )
    }

    const plugin = this._pluginsRegistry.getPlugin({ protocolName })
    if (!plugin) {
      throw new Error(`Protocol plugin for protocol ${protocolName} not found`)
    }
    if (!plugin.liquidity) {
      throw new Error(`Protocol plugin for protocol ${protocolName} does not support liquidity`)
    }
    return plugin.liquidity.getLiquidityPosition(positionId)
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
   * _validatePositionId
   * Validates that the candidate is a valid position ID
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid position ID
   */
  private _validatePositionId(candidate: unknown): asserts candidate is IPositionId {
    if (!isPositionId(candidate)) {
      throw new Error(`Invalid position ID: ${JSON.stringify(candidate)}`)
    }
  }

  /**
   * _validateYieldPoolId
   * Validates that the candidate is a valid yield pool ID for the specific protocol
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid yield pool ID for the specific protocol
   */
  private _validateYieldPoolId(candidate: unknown): asserts candidate is IYieldPoolId {
    if (!isYieldPoolId(candidate)) {
      throw new Error(`Invalid yield pool ID: ${JSON.stringify(candidate)}`)
    }
  }

  /**
   * _validateYieldPositionId
   * Validates that the candidate is a valid yield position ID
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid yield position ID
   */
  private _validateYieldPositionId(candidate: unknown): asserts candidate is IYieldPositionId {
    if (!isYieldPositionId(candidate)) {
      throw new Error(`Invalid yield position ID: ${JSON.stringify(candidate)}`)
    }
  }

  /**
   * _validateLiquidityPoolId
   * Validates that the candidate is a valid liquidity pool ID for the specific protocol
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid liquidity pool ID for the specific protocol
   */
  private _validateLiquidityPoolId(candidate: unknown): asserts candidate is ILiquidityPoolId {
    if (!isLiquidityPoolId(candidate)) {
      throw new Error(`Invalid liquidity pool ID: ${JSON.stringify(candidate)}`)
    }
  }

  /**
   * _validateLiquidityPositionId
   * Validates that the candidate is a valid liquidity position ID
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid liquidity position ID
   */
  private _validateLiquidityPositionId(
    candidate: unknown,
  ): asserts candidate is ILiquidityPositionId {
    if (!isLiquidityPositionId(candidate)) {
      throw new Error(`Invalid liquidity position ID: ${JSON.stringify(candidate)}`)
    }
  }

  /**
   * _validateStakingPoolId
   * Validates that the candidate is a valid staking pool ID for the specific protocol
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid staking pool ID for the specific protocol
   */
  private _validateStakingPoolId(candidate: unknown): asserts candidate is IStakingPoolId {
    if (!isStakingPoolId(candidate)) {
      throw new Error(`Invalid staking pool ID: ${JSON.stringify(candidate)}`)
    }
  }

  /**
   * _validateStakingPositionId
   * Validates that the candidate is a valid staking position ID
   * @param params.candidate The candidate to validate
   * @returns asserts that the candidate is a valid staking position ID
   */
  private _validateStakingPositionId(candidate: unknown): asserts candidate is IStakingPositionId {
    if (!isStakingPositionId(candidate)) {
      throw new Error(`Invalid staking position ID: ${JSON.stringify(candidate)}`)
    }
  }
}
