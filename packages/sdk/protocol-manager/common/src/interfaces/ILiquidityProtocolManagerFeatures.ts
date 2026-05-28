import { ILiquidityPoolId } from '@thesolidchain/sdk-common'
import { ILiquidityPoolInfo } from '@thesolidchain/sdk-common'
import { ILiquidityPosition } from '@thesolidchain/sdk-common'
import { ILiquidityPositionId } from '@thesolidchain/sdk-common'

/**
 * ILiquidityProtocolManagerFeatures
 * Features that a Liquidity Protocol Plugin must implement
 */
export interface ILiquidityProtocolManagerFeatures {
  /**
   * Retrieves the pool info for a given pool ID
   * @param id The ID of the pool
   * @returns The pool info
   */
  getLiquidityPoolInfo(id: ILiquidityPoolId): Promise<ILiquidityPoolInfo | undefined>

  /**
   * Retrieves the position for a given position ID
   * @param id The ID of the position
   * @returns The position info
   */
  getLiquidityPosition(id: ILiquidityPositionId): Promise<ILiquidityPosition | undefined>
}
