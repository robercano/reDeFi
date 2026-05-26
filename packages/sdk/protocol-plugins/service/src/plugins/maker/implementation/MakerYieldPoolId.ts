import { PoolType, IChainInfo, PoolId, ProtocolName, __YieldPoolIdSignature__ } from '@thesolidchain/sdk-common'
import { IMakerYieldPoolId, IMakerYieldPoolIdData, __signature__ } from '../interfaces/IMakerYieldPoolId'
import { MakerProtocol } from './MakerProtocol'

/**
 * Concrete implementation of the Maker Yield Pool ID.
 */
export class MakerYieldPoolId extends PoolId implements IMakerYieldPoolId {
  public readonly [__signature__] = __signature__
  public readonly [__YieldPoolIdSignature__] = __YieldPoolIdSignature__
  public readonly type = PoolType.Yield
  public readonly protocol: MakerProtocol
  public readonly vaultAddress: string

  constructor(vaultAddress: string, chainInfo: IChainInfo) {
    super({})
    this.vaultAddress = vaultAddress
    this.protocol = MakerProtocol.createFrom({ chainInfo })
  }

  public serialize(): IMakerYieldPoolIdData {
    return {
      type: this.type,
      protocol: this.protocol,
      vaultAddress: this.vaultAddress,
    }
  }
}
