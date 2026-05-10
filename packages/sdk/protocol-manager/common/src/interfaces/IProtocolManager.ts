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
  readonly yield: unknown // Hinted for future implementation, could be IYieldProtocolManagerFeatures

  /** 
   * Staking features router.
   */
  readonly stake: unknown // Hinted for future implementation, could be IStakeProtocolManagerFeatures
}
