import { ILendingProtocolManagerFeatures } from './ILendingProtocolManagerFeatures'
import { IYieldProtocolManagerFeatures } from './IYieldProtocolManagerFeatures'
import { ILiquidityProtocolManagerFeatures } from './ILiquidityProtocolManagerFeatures'

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
  readonly yield: IYieldProtocolManagerFeatures

  /**
   * Staking features router.
   */
  readonly stake: unknown // Hinted for future implementation, could be IStakeProtocolManagerFeatures

  /**
   * Liquidity features router.
   */
  readonly liquidity: ILiquidityProtocolManagerFeatures
}
