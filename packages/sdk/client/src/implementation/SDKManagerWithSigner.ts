import { ISDKManager } from '../interfaces/ISDKManager'
import { RPCMainClientType } from '../rpc/SDKMainClient'
import { ChainsManagerClient } from './ChainsManager'
import { IntentSwapClient } from './IntentSwapClient'
import type { SDKSigner } from './MakeSDKWithSigner'
import { OracleManagerClient } from './OracleManagerClient'
import { PortfolioManager } from './PortfolioManager'
import { SwapManagerClient } from './SwapManagerClient'
import { TokensManagerClient2 } from './TokensManagerClient2'
import { UsersManager } from './UsersManager'
import { SimulationManager } from './simulations/SimulationManager'

/** @see ISDKManager */
export class SDKManagerWithSigner implements ISDKManager {
  public readonly simulator: SimulationManager
  public readonly chains: ChainsManagerClient
  public readonly tokens: TokensManagerClient2
  public readonly users: UsersManager
  public readonly portfolio: PortfolioManager
  public readonly swaps: SwapManagerClient
  public readonly oracle: OracleManagerClient
  public readonly intentSwaps: IntentSwapClient

  public constructor(params: { rpcClient: RPCMainClientType; signer: SDKSigner }) {
    this.simulator = new SimulationManager(params)
    this.chains = new ChainsManagerClient(params)
    this.tokens = new TokensManagerClient2(params)
    this.users = new UsersManager(params)
    this.portfolio = new PortfolioManager(params)
    this.swaps = new SwapManagerClient(params)
    this.oracle = new OracleManagerClient(params)
    this.intentSwaps = new IntentSwapClient({
      rpcClient: params.rpcClient,
      signer: params.signer,
    })
  }
}
