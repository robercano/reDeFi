import {
  ILendingPool,
  ILendingPoolIdData,
  ILendingPoolInfo,
  IYieldPoolIdData,
  IYieldPoolInfo,
  IYieldPositionIdData,
  IYieldPosition,
  IStakingPoolIdData,
  IStakingPoolInfo,
  IStakingPositionIdData,
  IStakingPosition,
  Maybe,
} from '@thesolidchain/sdk-common'
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

  getYieldPoolInfo(params: { poolId: IYieldPoolIdData }): Promise<Maybe<IYieldPoolInfo>> {
    return this.rpcClient.protocols.getYieldPoolInfo.query(params.poolId)
  }

  getYieldPosition(params: { positionId: IYieldPositionIdData }): Promise<Maybe<IYieldPosition>> {
    return this.rpcClient.protocols.getYieldPosition.query(params.positionId)
  }

  getStakingPoolInfo(params: { poolId: IStakingPoolIdData }): Promise<Maybe<IStakingPoolInfo>> {
    return this.rpcClient.protocols.getStakingPoolInfo.query(params.poolId)
  }

  getStakingPosition(params: { positionId: IStakingPositionIdData }): Promise<Maybe<IStakingPosition>> {
    return this.rpcClient.protocols.getStakingPosition.query(params.positionId)
  }
}
