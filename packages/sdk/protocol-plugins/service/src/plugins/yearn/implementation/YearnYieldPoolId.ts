import { PoolType, IChainInfo, PoolId, __YieldPoolIdSignature__ } from '@thesolidchain/sdk-common'
import { YearnProtocol } from './YearnProtocol'
import { IYearnYieldPoolId, IYearnYieldPoolIdData, __signature__ } from '../interfaces/IYearnYieldPoolId'

/**
 * Unique identifier for a Yearn Vault Pool.
 * Subclasses `PoolId` to provide type-safe handling of Yearn pools in the SDK.
 * @public
 */
export class YearnYieldPoolId extends PoolId implements IYearnYieldPoolId {
  public readonly [__signature__] = __signature__
  public readonly [__YieldPoolIdSignature__] = __YieldPoolIdSignature__
  /** Discriminator for identifying this as a Yield pool */
  public readonly type = PoolType.Yield

  /** The Yearn protocol definition attached to this pool ID */
  public readonly protocol: YearnProtocol

  /**
   * Initializes a new Yearn Yield Pool Identifier.
   *
   * @param vaultAddress - The on-chain contract address of the Yearn vault.
   * @param chainInfo - The network chain information where this vault resides.
   */
  public constructor(
    public readonly vaultAddress: string,
    public readonly chainInfo: IChainInfo,
  ) {
    super({})
    this.protocol = YearnProtocol.createFrom({ chainInfo })
  }

  /**
   * Serializes the Pool ID into a simple data transfer object (DTO).
   *
   * @returns The serialized JSON-compatible data of the pool ID.
   */
  public serialize(): IYearnYieldPoolIdData {
    return {
      type: this.type,
      protocol: this.protocol,
      vaultAddress: this.vaultAddress,
    }
  }
}
