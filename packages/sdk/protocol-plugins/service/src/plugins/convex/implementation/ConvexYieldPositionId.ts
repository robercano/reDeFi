import { PositionType, IChainInfo, PositionId, __YieldPositionIdSignature__ } from '@thesolidchain/sdk-common'
import { ConvexProtocol } from './ConvexProtocol'
import {
  IConvexYieldPositionId,
  IConvexYieldPositionIdData,
  __signature__,
} from '../interfaces/IConvexYieldPositionId'

export class ConvexYieldPositionId extends PositionId implements IConvexYieldPositionId {
  public readonly [__signature__] = __signature__
  public readonly [__YieldPositionIdSignature__] = __YieldPositionIdSignature__
  public readonly type = PositionType.Yield
  public readonly protocol: ConvexProtocol

  public constructor(
    public readonly tokenAddress: string,
    public readonly walletAddress: string,
    public readonly chainInfo: IChainInfo,
  ) {
    super({ id: `${tokenAddress}-${walletAddress}` })
    this.protocol = ConvexProtocol.createFrom({ chainInfo })
  }

  public serialize(): IConvexYieldPositionIdData {
    return {
      id: this.id,
      type: this.type,
      protocol: this.protocol,
      tokenAddress: this.tokenAddress,
      walletAddress: this.walletAddress,
    }
  }
}
