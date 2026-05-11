import { ILendingSimulator } from '../../interfaces/simulations/ILendingSimulator'
import { RPCMainClientType } from '../../rpc/SDKMainClient'

export class LendingSimulator implements ILendingSimulator {
  public constructor(private readonly rpcClient: RPCMainClientType) {}
}
