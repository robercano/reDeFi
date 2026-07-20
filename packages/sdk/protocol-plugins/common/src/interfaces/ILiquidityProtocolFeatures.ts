import {
  ILiquidityPoolId,
  ILiquidityPoolInfo,
  ILiquidityPosition,
  ILiquidityPositionId,
  IPercentage,
  ITokenAmount,
  IUser,
  TransactionInfo,
} from '@thesolidchain/sdk-common'

/**
 * ILiquidityProtocolFeatures
 * Interface for protocols that support liquidity pool operations (AMMs)
 */
export interface ILiquidityProtocolFeatures {
  /**
   * getLiquidityPoolInfo
   * @param id The ID of the liquidity pool
   * @returns Information about the liquidity pool
   */
  getLiquidityPoolInfo(id: ILiquidityPoolId): Promise<ILiquidityPoolInfo>

  /**
   * getLiquidityPosition
   * @param id The ID of the liquidity position
   * @returns The user's liquidity position
   */
  getLiquidityPosition(id: ILiquidityPositionId): Promise<ILiquidityPosition>

  /**
   * getProvideLiquidityTransaction
   * @param params Parameters for providing liquidity
   * @param params.slippageTolerance Optional slippage tolerance used to compute the minimum
   *              amounts accepted for the deposit (`amount0Min`/`amount1Min` for Uniswap V3).
   *              Implementations should apply a sane default when omitted; it must never be
   *              treated as `0` (no slippage protection).
   * @returns Transaction info
   */
  getProvideLiquidityTransaction(params: {
    poolId: ILiquidityPoolId
    amounts: ITokenAmount[]
    user: IUser
    tickLower?: number
    tickUpper?: number
    slippageTolerance?: IPercentage
  }): Promise<TransactionInfo>

  /**
   * getRemoveLiquidityTransaction
   * @param params Parameters for removing liquidity
   * @param params.slippageTolerance Optional slippage tolerance used to compute the minimum
   *              amounts accepted when withdrawing (`amount0Min`/`amount1Min` for Uniswap V3).
   *              Implementations should apply a sane default when omitted; it must never be
   *              treated as `0` (no slippage protection).
   * @returns Transaction info
   */
  getRemoveLiquidityTransaction(params: {
    positionId: ILiquidityPositionId
    amount: ITokenAmount
    user: IUser
    slippageTolerance?: IPercentage
  }): Promise<TransactionInfo>
}
