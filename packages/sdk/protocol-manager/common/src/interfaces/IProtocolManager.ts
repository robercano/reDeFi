import { ILendingProtocolManagerFeatures } from './ILendingProtocolManagerFeatures'
import { IYieldProtocolManagerFeatures } from './IYieldProtocolManagerFeatures'
import { ILiquidityProtocolManagerFeatures } from './ILiquidityProtocolManagerFeatures'
import { IStakingProtocolManagerFeatures } from './IStakingProtocolManagerFeatures'

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
  readonly stake: IStakingProtocolManagerFeatures

  /**
   * Liquidity features router.
   */
  readonly liquidity: ILiquidityProtocolManagerFeatures
}
