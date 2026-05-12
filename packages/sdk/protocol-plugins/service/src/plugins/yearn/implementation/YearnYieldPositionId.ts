import { ProtocolName, PositionType, IChainInfo, PositionId } from '@thesolidchain/sdk-common'
import { YearnProtocol } from './YearnProtocol'
import {
  IYearnYieldPositionId,
  IYearnYieldPositionIdData,
} from '../interfaces/IYearnYieldPositionId'
import { __signature__ } from '../interfaces/IYearnYieldPositionId'
import { __YieldPositionIdSignature__ } from '@thesolidchain/sdk-common'

/**
 * Unique identifier for a user's Yearn Vault Position.
 * Subclasses `PositionId` to provide type-safe handling of Yearn positions in the SDK.
 * @public
 */
export class YearnYieldPositionId extends PositionId implements IYearnYieldPositionId {
  public readonly [__signature__] = __signature__
  public readonly [__YieldPositionIdSignature__] = __YieldPositionIdSignature__
  /** Discriminator for identifying this as a Yield position */
  public readonly type = PositionType.Yield

  /** The Yearn protocol definition attached to this position ID */
  public readonly protocol: YearnProtocol

  /**
   * Initializes a new Yearn Yield Position Identifier.
   *
   * @param vaultAddress - The on-chain contract address of the Yearn vault.
   * @param walletAddress - The owner's wallet address.
   * @param chainInfo - The network chain information where this position resides.
   */
  public constructor(
    public readonly vaultAddress: string,
    public readonly walletAddress: string,
    public readonly chainInfo: IChainInfo,
  ) {
    super({ id: `${vaultAddress}-${walletAddress}` })
    this.protocol = YearnProtocol.createFrom({ chainInfo })
  }

  /**
   * Serializes the Position ID into a simple data transfer object (DTO).
   *
   * @returns The serialized JSON-compatible data of the position ID.
   */
  public serialize(): IYearnYieldPositionIdData {
    return {
      id: this.id,
      type: this.type,
      protocol: this.protocol,
      vaultAddress: this.vaultAddress,
      walletAddress: this.walletAddress,
    }
  }
}
