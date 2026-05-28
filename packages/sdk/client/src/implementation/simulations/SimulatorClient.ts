import { ISimulatorClient } from '../../interfaces/simulations/ISimulatorClient'
import { RPCMainClientType } from '../../rpc/SDKMainClient'
import { LendingSimulator } from './LendingSimulator'
import { StakeSimulator } from './StakeSimulator'
import { TransferSimulator } from './TransferSimulator'
import { YieldSimulator } from './YieldSimulator'
import { SwapSimulator } from './SwapSimulator'
import { LiquiditySimulator } from './LiquiditySimulator'

/**
 * SimulatorClient
 * @see ISimulatorClient
 */
export class SimulatorClient implements ISimulatorClient {
  public readonly transfer: TransferSimulator
  public readonly stake: StakeSimulator
  public readonly lend: LendingSimulator
  public readonly yield: YieldSimulator
  public readonly swap: SwapSimulator
  public readonly liquidity: LiquiditySimulator

  public constructor(rpcClient: RPCMainClientType) {
    this.transfer = new TransferSimulator(rpcClient)
    this.stake = new StakeSimulator(rpcClient)
    this.lend = new LendingSimulator(rpcClient)
    this.yield = new YieldSimulator(rpcClient)
    this.swap = new SwapSimulator({ rpcClient })
    this.liquidity = new LiquiditySimulator(rpcClient)
  }
}
