import { PositionType, IChainInfo, PositionId, __YieldPositionIdSignature__ } from '@thesolidchain/sdk-common'
import { LidoProtocol } from './LidoProtocol'
import {
  ILidoYieldPositionId,
  ILidoYieldPositionIdData,
  __signature__,
} from '../interfaces/ILidoYieldPositionId'

export class LidoYieldPositionId extends PositionId implements ILidoYieldPositionId {
  public readonly [__signature__] = __signature__
  public readonly [__YieldPositionIdSignature__] = __YieldPositionIdSignature__
  public readonly type = PositionType.Yield
  public readonly protocol: LidoProtocol

  public constructor(
    public readonly tokenAddress: string,
    public readonly walletAddress: string,
    public readonly chainInfo: IChainInfo,
  ) {
    super({ id: `${tokenAddress}-${walletAddress}` })
    this.protocol = LidoProtocol.createFrom({ chainInfo })
  }

  public serialize(): ILidoYieldPositionIdData {
    return {
      id: this.id,
      type: this.type,
      protocol: this.protocol,
      tokenAddress: this.tokenAddress,
      walletAddress: this.walletAddress,
    }
  }
}
