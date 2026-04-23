import type { ChainInfo, Wallet, Position, IUser, IUserPortfolio, IHolding } from '@thesolidchain/sdk-common'
import { IPortfolioManager } from '../interfaces/IPortfolioManager'
import { IRPCClient } from '../interfaces/IRPCClient'
import { RPCMainClientType } from '../rpc/SDKMainClient'

export class PortfolioManager extends IRPCClient implements IPortfolioManager {
  constructor(params: { rpcClient: RPCMainClientType }) {
    super(params)
  }

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  public async getPositions(_params: {
    networks: ChainInfo[]
    wallet: Wallet
  }): Promise<Position[]> {
    // TODO: Implement
    return [] as Position[]
  }

  public async getUserPortfolio(params: { user: IUser }): Promise<IUserPortfolio> {
    return await this.rpcClient.portfolio.getUserPortfolio.query(params)
  }

  public async getWalletHoldings(params: { user: IUser }): Promise<IHolding[]> {
    return await this.rpcClient.portfolio.getWalletHoldings.query(params)
  }
}
