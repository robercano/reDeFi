import { ProtocolName, PositionType, IChainInfo, PositionId } from '@thesolidchain/sdk-common'
import { YearnProtocol } from './YearnProtocol'
import {
  IYearnYieldPositionId,
  IYearnYieldPositionIdData,
} from '../interfaces/IYearnYieldPositionId'
import { __signature__ } from '../interfaces/IYearnYieldPositionId'
import { __YieldPositionIdSignature__ } from '@thesolidchain/sdk-common'

export class YearnYieldPositionId extends PositionId implements IYearnYieldPositionId {
  public readonly [__signature__] = __signature__
  public readonly [__YieldPositionIdSignature__] = __YieldPositionIdSignature__
  public readonly type = PositionType.Yield

  public readonly protocol: YearnProtocol

  public constructor(
    public readonly vaultAddress: string,
    public readonly walletAddress: string,
    public readonly chainInfo: IChainInfo,
  ) {
    super({ id: `${vaultAddress}-${walletAddress}` })
    this.protocol = YearnProtocol.createFrom({ chainInfo })
  }

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
