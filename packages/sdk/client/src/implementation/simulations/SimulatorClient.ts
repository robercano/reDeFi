import { ISimulatorClient } from '../../interfaces/simulations/ISimulatorClient'
import { RPCMainClientType } from '../../rpc/SDKMainClient'
import { LendingSimulator } from './LendingSimulator'
import { StakeSimulator } from './StakeSimulator'
import { TransferSimulator } from './TransferSimulator'
import { YieldSimulator } from './YieldSimulator'

/**
 * SimulatorClient
 * @see ISimulatorClient
 */
export class SimulatorClient implements ISimulatorClient {
  public readonly transfer: TransferSimulator
  public readonly stake: StakeSimulator
  public readonly lend: LendingSimulator
  public readonly yield: YieldSimulator

  public constructor(rpcClient: RPCMainClientType) {
    this.transfer = new TransferSimulator(rpcClient)
    this.stake = new StakeSimulator(rpcClient)
    this.lend = new LendingSimulator(rpcClient)
    this.yield = new YieldSimulator(rpcClient)
  }
}
