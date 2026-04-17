import type { ISDKAdminManager } from '../interfaces/ISDKAdminManager'
import { RPCMainClientType } from '../rpc/SDKMainClient'
import { ChainsManagerClient } from './ChainsManager'
import { OracleManagerClient } from './OracleManagerClient'
import { SwapManagerClient } from './SwapManagerClient'
import { TokensManagerClient2 } from './TokensManagerClient2'
import { UsersManager } from './UsersManager'

/** @see ISDKAdminManager */
export class SDKAdminManager implements ISDKAdminManager {
  public readonly chains: ChainsManagerClient
  public readonly tokens: TokensManagerClient2
  public readonly users: UsersManager
  public readonly swaps: SwapManagerClient
  public readonly oracle: OracleManagerClient

  public constructor(params: { rpcClient: RPCMainClientType }) {
    this.chains = new ChainsManagerClient(params)
    this.tokens = new TokensManagerClient2(params)
    this.users = new UsersManager(params)
    this.swaps = new SwapManagerClient(params)
    this.oracle = new OracleManagerClient(params)
  }
}
