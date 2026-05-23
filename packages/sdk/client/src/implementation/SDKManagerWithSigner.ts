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
import { ProtocolsManagerClient } from './ProtocolsManagerClient'
import { OrdersManagerClient } from './OrdersManagerClient'
import { SimulatorClient } from './simulations/SimulatorClient'
import { EventBus } from '@thesolidchain/events-service'
import type { IEventBus } from '@thesolidchain/events-common'
import { ActivityService } from './ActivityService'

/** @see ISDKManager */
export class SDKManagerWithSigner implements ISDKManager {
  public readonly simulator: SimulatorClient
  public readonly chains: ChainsManagerClient
  public readonly tokens: TokensManagerClient2
  public readonly users: UsersManager
  public readonly portfolio: PortfolioManager
  public readonly swaps: SwapManagerClient
  public readonly oracle: OracleManagerClient
  public readonly protocols: ProtocolsManagerClient
  public readonly orders: OrdersManagerClient
  public readonly intentSwaps: IntentSwapClient
  public readonly eventBus: IEventBus
  public readonly activity: ActivityService

  public constructor(params: { rpcClient: RPCMainClientType; signer: SDKSigner }) {
    this.eventBus = new EventBus()
    this.simulator = new SimulatorClient(params.rpcClient)
    this.chains = new ChainsManagerClient(params)
    this.tokens = new TokensManagerClient2(params)
    this.users = new UsersManager(params)
    this.portfolio = new PortfolioManager(params)
    this.swaps = new SwapManagerClient(params)
    this.oracle = new OracleManagerClient(params)
    this.protocols = new ProtocolsManagerClient(params)
    this.orders = new OrdersManagerClient(params)
    this.intentSwaps = new IntentSwapClient({
      rpcClient: params.rpcClient,
      signer: params.signer,
    })
    this.activity = new ActivityService(this)
  }
}
