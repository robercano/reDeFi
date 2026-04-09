import { ISDKManager } from '../interfaces/ISDKManager'
import { RPCMainClientType } from '../rpc/SDKMainClient'
import { ChainsManagerClient } from './ChainsManager'
import { OracleManagerClient } from './OracleManagerClient'
import { PortfolioManager } from './PortfolioManager'
import { SimulationManager } from './simulations/SimulationManager'
import { SwapManagerClient } from './SwapManagerClient'
import { TokensManagerClient2 } from './TokensManagerClient2'
import { UsersManager } from './UsersManager'

/** @see ISDKManager */
export class SDKManager implements ISDKManager {
  public readonly simulator: SimulationManager
  public readonly chains: ChainsManagerClient
  public readonly tokens: TokensManagerClient2
  public readonly users: UsersManager
  public readonly portfolio: PortfolioManager
  public readonly swaps: SwapManagerClient
  public readonly oracle: OracleManagerClient

  public constructor(params: { rpcClient: RPCMainClientType }) {
    this.simulator = new SimulationManager(params)
    this.chains = new ChainsManagerClient(params)
    this.tokens = new TokensManagerClient2(params)
    this.users = new UsersManager(params)
    this.portfolio = new PortfolioManager(params)
    this.swaps = new SwapManagerClient(params)
    this.oracle = new OracleManagerClient(params)
  }
}
