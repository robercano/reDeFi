import { PoolType, IChainInfo, PoolId, __YieldPoolIdSignature__ } from '@thesolidchain/sdk-common'
import { ConvexProtocol } from './ConvexProtocol'
import {
  IConvexYieldPoolId,
  IConvexYieldPoolIdData,
  __signature__,
} from '../interfaces/IConvexYieldPoolId'

export class ConvexYieldPoolId extends PoolId implements IConvexYieldPoolId {
  public readonly [__signature__] = __signature__
  public readonly [__YieldPoolIdSignature__] = __YieldPoolIdSignature__
  public readonly type = PoolType.Yield
  public readonly protocol: ConvexProtocol

  public constructor(
    public readonly tokenAddress: string,
    public readonly chainInfo: IChainInfo,
  ) {
    super({})
    this.protocol = ConvexProtocol.createFrom({ chainInfo })
  }

  public serialize(): IConvexYieldPoolIdData {
    return {
      type: this.type,
      protocol: this.protocol,
      tokenAddress: this.tokenAddress,
    }
  }
}
