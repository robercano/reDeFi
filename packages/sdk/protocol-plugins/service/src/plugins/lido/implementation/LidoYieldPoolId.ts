import { PoolType, IChainInfo, PoolId, __YieldPoolIdSignature__ } from '@thesolidchain/sdk-common'
import { LidoProtocol } from './LidoProtocol'
import { ILidoYieldPoolId, ILidoYieldPoolIdData, __signature__ } from '../interfaces/ILidoYieldPoolId'

export class LidoYieldPoolId extends PoolId implements ILidoYieldPoolId {
  public readonly [__signature__] = __signature__
  public readonly [__YieldPoolIdSignature__] = __YieldPoolIdSignature__
  public readonly type = PoolType.Yield
  public readonly protocol: LidoProtocol

  public constructor(
    public readonly tokenAddress: string,
    public readonly chainInfo: IChainInfo,
  ) {
    super({})
    this.protocol = LidoProtocol.createFrom({ chainInfo })
  }

  public serialize(): ILidoYieldPoolIdData {
    return {
      type: this.type,
      protocol: this.protocol,
      tokenAddress: this.tokenAddress,
    }
  }
}
