import {
  ILiquidityPoolId,
  ILiquidityPoolInfo,
  ILiquidityPosition,
  ILiquidityPositionId,
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
   * @returns Transaction info
   */
  getProvideLiquidityTransaction(params: {
    poolId: ILiquidityPoolId
    amounts: ITokenAmount[]
    user: IUser
    tickLower?: number
    tickUpper?: number
  }): Promise<TransactionInfo>

  /**
   * getRemoveLiquidityTransaction
   * @param params Parameters for removing liquidity
   * @returns Transaction info
   */
  getRemoveLiquidityTransaction(params: {
    positionId: ILiquidityPositionId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo>
}
