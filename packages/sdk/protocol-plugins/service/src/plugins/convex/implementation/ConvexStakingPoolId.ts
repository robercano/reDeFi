import { PoolType, IChainInfo, PoolId, __StakingPoolIdSignature__ } from '@thesolidchain/sdk-common'
import { ConvexProtocol } from './ConvexProtocol'
import {
  IConvexStakingPoolId,
  IConvexStakingPoolIdData,
  __signature__,
} from '../interfaces/IConvexStakingPoolId'

export class ConvexStakingPoolId extends PoolId implements IConvexStakingPoolId {
  public readonly [__signature__] = __signature__
  public readonly [__StakingPoolIdSignature__] = __StakingPoolIdSignature__
  public readonly type = PoolType.Staking
  public readonly protocol: ConvexProtocol

  public constructor(
    public readonly tokenAddress: string,
    public readonly chainInfo: IChainInfo,
  ) {
    super({})
    this.protocol = ConvexProtocol.createFrom({ chainInfo })
  }

  public serialize(): IConvexStakingPoolIdData {
    return {
      type: this.type,
      protocol: this.protocol,
      tokenAddress: this.tokenAddress,
    }
  }
}
