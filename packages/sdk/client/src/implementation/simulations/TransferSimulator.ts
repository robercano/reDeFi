import { ITransferSimulator } from '../../interfaces/simulations/ITransferSimulator'
import { RPCMainClientType } from '../../rpc/SDKMainClient'

export class TransferSimulator implements ITransferSimulator {
  public constructor(private readonly rpcClient: RPCMainClientType) {}
}
