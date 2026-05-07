import {
  ILendingPoolId,
  Maybe,
  ILendingPool,
  ILendingPoolInfo,
  ILendingPosition,
  ILendingPositionId,
  IExternalLendingPosition,
  IPositionsManager,
  TransactionInfo,
  IUser,
} from '@thesolidchain/sdk-common'

import { ILendingProtocolManagerFeatures } from './ILendingProtocolManagerFeatures'

/**
 * @interface IProtocolManager
 * Interface to be implemented by a protocol manager to provide access to protocol-specific functionality
 */
export interface IProtocolManager {
  /** 
   * Lending features router.
   */
  readonly lending: ILendingProtocolManagerFeatures

  /** 
   * Yield features router.
   */
  readonly yield: any // Hinted for future implementation, could be IYieldProtocolManagerFeatures

  /** 
   * Staking features router.
   */
  readonly stake: any // Hinted for future implementation, could be IStakeProtocolManagerFeatures
}
