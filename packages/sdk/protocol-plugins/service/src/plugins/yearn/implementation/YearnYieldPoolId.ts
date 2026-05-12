import { ProtocolName, PoolType, IChainInfo, PoolId } from '@thesolidchain/sdk-common'
import { YearnProtocol } from './YearnProtocol'
import { IYearnYieldPoolId, IYearnYieldPoolIdData } from '../interfaces/IYearnYieldPoolId'
import { __signature__ } from '../interfaces/IYearnYieldPoolId'
import { __YieldPoolIdSignature__ } from '@thesolidchain/sdk-common'

export class YearnYieldPoolId extends PoolId implements IYearnYieldPoolId {
  public readonly [__signature__] = __signature__
  public readonly [__YieldPoolIdSignature__] = __YieldPoolIdSignature__
  public readonly type = PoolType.Yield

  public readonly protocol: YearnProtocol

  public constructor(
    public readonly vaultAddress: string,
    public readonly chainInfo: IChainInfo,
  ) {
    super({})
    this.protocol = YearnProtocol.createFrom({ chainInfo })
  }

  public serialize(): IYearnYieldPoolIdData {
    return {
      type: this.type,
      protocol: this.protocol,
      vaultAddress: this.vaultAddress,
    }
  }
}
