import type { AddressValue } from './AddressValue'
import type { IPercentage } from '../interfaces/IPercentage'

/**
 * IFeeRevenueConfig
 * Configuration for fee revenue settings
 */
export interface IFeeRevenueConfig {
  /**
   * vaultFeeReceiverAddress
   * The address that receives vault fees
   */
  vaultFeeReceiverAddress: AddressValue

  /**
   * vaultFeeAmount
   * The percentage amount of vault fees
   */
  vaultFeeAmount: IPercentage
}
