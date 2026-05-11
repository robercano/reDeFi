import { IYieldSimulator } from '../../interfaces/simulations/IYieldSimulator'
import { RPCMainClientType } from '../../rpc/SDKMainClient'

export class YieldSimulator implements IYieldSimulator {
  public constructor(private readonly rpcClient: RPCMainClientType) {}
}
