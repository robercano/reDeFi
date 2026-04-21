import { ISimulationManager } from '../../interfaces/simulations/ISimulationManager'
import { RPCMainClientType } from '../../rpc/SDKMainClient'
/**
 * @name SimulationManager
 * @see ISimulationManager
 */
export class SimulationManager implements ISimulationManager {
  public readonly finance: undefined
  public readonly refinance: undefined
  public readonly automation: undefined
  public readonly importing: undefined
  public readonly earn: undefined

  public constructor(_params: { rpcClient: RPCMainClientType }) {}
}
