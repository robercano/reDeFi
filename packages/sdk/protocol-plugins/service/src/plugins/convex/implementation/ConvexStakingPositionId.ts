import { PositionType, IChainInfo, PositionId, __StakingPositionIdSignature__, IWallet } from '@thesolidchain/sdk-common'
import { ConvexProtocol } from './ConvexProtocol'
import { ConvexStakingPoolId } from './ConvexStakingPoolId'
import {
  IConvexStakingPositionId,
  IConvexStakingPositionIdData,
  __signature__,
} from '../interfaces/IConvexStakingPositionId'

export class ConvexStakingPositionId extends PositionId implements IConvexStakingPositionId {
  public readonly [__signature__] = __signature__
  public readonly [__StakingPositionIdSignature__] = __StakingPositionIdSignature__
  public readonly type = PositionType.Staking
  public readonly protocol: ConvexProtocol

  public constructor(
    public readonly poolId: ConvexStakingPoolId,
    public readonly wallet: IWallet,
    public readonly chainInfo: IChainInfo,
  ) {
    super({ id: `${poolId.tokenAddress}-${wallet.address}` })
    this.protocol = ConvexProtocol.createFrom({ chainInfo })
  }

  public serialize(): IConvexStakingPositionIdData {
    return {
      id: this.id,
      type: this.type,
      protocol: this.protocol,
      poolId: this.poolId,
      wallet: this.wallet,
    }
  }
}
