import { PositionType, IChainInfo, PositionId, ProtocolName, __YieldPositionIdSignature__ } from '@thesolidchain/sdk-common'
import { IMakerYieldPositionId, IMakerYieldPositionIdData, __signature__ } from '../interfaces/IMakerYieldPositionId'
import { MakerProtocol } from './MakerProtocol'

/**
 * Concrete implementation of the Maker Yield Position ID.
 */
export class MakerYieldPositionId extends PositionId implements IMakerYieldPositionId {
  public readonly [__signature__] = __signature__
  public readonly [__YieldPositionIdSignature__] = __YieldPositionIdSignature__
  public readonly type = PositionType.Yield
  public readonly protocol: MakerProtocol
  public readonly vaultAddress: string
  public readonly walletAddress: string

  constructor(vaultAddress: string, walletAddress: string, chainInfo: IChainInfo) {
    super({ id: `${vaultAddress}-${walletAddress}` })
    this.vaultAddress = vaultAddress
    this.walletAddress = walletAddress
    this.protocol = MakerProtocol.createFrom({ chainInfo })
  }

  public serialize(): IMakerYieldPositionIdData {
    return {
      id: this.id,
      type: this.type,
      protocol: this.protocol,
      vaultAddress: this.vaultAddress,
      walletAddress: this.walletAddress,
    }
  }
}
