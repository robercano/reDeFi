import { ILendingPool, ILendingPoolIdData, ILendingPoolInfo } from '@thesolidchain/sdk-common'
import type { Maybe } from '@thesolidchain/sdk-common'
import { IProtocolsManagerClient } from '../interfaces/IProtocolsManagerClient'
import { IRPCClient } from '../interfaces/IRPCClient'
import { RPCMainClientType } from '../rpc/SDKMainClient'

/**
 * @class ProtocolsManagerClient
 * @see IProtocolsManagerClient
 */
export class ProtocolsManagerClient extends IRPCClient implements IProtocolsManagerClient {
  public constructor(params: { rpcClient: RPCMainClientType }) {
    super(params)
  }

  getLendingPool(params: { poolId: ILendingPoolIdData }): Promise<Maybe<ILendingPool>> {
    return this.rpcClient.protocols.getLendingPool.query(params.poolId)
  }

  getLendingPoolInfo(params: { poolId: ILendingPoolIdData }): Promise<Maybe<ILendingPoolInfo>> {
    return this.rpcClient.protocols.getLendingPoolInfo.query(params.poolId)
  }
}
