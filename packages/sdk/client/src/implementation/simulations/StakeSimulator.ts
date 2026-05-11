import { IStakeSimulator } from '../../interfaces/simulations/IStakeSimulator'
import { RPCMainClientType } from '../../rpc/SDKMainClient'

export class StakeSimulator implements IStakeSimulator {
  public constructor(private readonly rpcClient: RPCMainClientType) {}
}
