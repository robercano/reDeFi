import {
  __LiquidityPositionSignature__,
  IAddress,
  ILiquidityPoolId,
  ILiquidityPositionId,
  ITokenAmount,
  PositionType,
} from '@thesolidchain/sdk-common'

/**
 * Type for the parameters of UniswapV3LiquidityPosition
 */
export type UniswapV3LiquidityPositionParameters = {
  id: ILiquidityPositionId
  poolId: ILiquidityPoolId
  owner: IAddress
  currentAmounts: ITokenAmount[]
  claimableRewards: ITokenAmount[]
  tickLower?: number
  tickUpper?: number
}

/**
 * @class UniswapV3LiquidityPosition
 * @see ILiquidityPosition
 *
 * NOTE: see the equivalent note on `UniswapV3LiquidityPoolInfo` — this class does NOT
 * `implements ILiquidityPosition` because `ILiquidityPosition` (via `IPosition`) requires a
 * `pool: IPool` field, and `IPool`'s brand symbol is not exported from `@thesolidchain/sdk-common`.
 * `getLiquidityPosition` casts an instance of this class to `ILiquidityPosition` at its return
 * boundary (adding a minimal `pool` stand-in there), with a comment explaining why.
 */
export class UniswapV3LiquidityPosition {
  /** SIGNATURE (the `ILiquidityPosition`-specific brand only; see class doc for the generic one) */
  readonly [__LiquidityPositionSignature__] = __LiquidityPositionSignature__

  /** ATTRIBUTES */
  readonly type = PositionType.Liquidity
  readonly id: ILiquidityPositionId
  readonly poolId: ILiquidityPoolId
  readonly owner: IAddress
  readonly currentAmounts: ITokenAmount[]
  readonly claimableRewards: ITokenAmount[]
  readonly tickLower?: number
  readonly tickUpper?: number

  /** FACTORY */
  static createFrom(params: UniswapV3LiquidityPositionParameters): UniswapV3LiquidityPosition {
    return new UniswapV3LiquidityPosition(params)
  }

  /** SEALED CONSTRUCTOR */
  private constructor(params: UniswapV3LiquidityPositionParameters) {
    this.id = params.id
    this.poolId = params.poolId
    this.owner = params.owner
    this.currentAmounts = params.currentAmounts
    this.claimableRewards = params.claimableRewards
    this.tickLower = params.tickLower
    this.tickUpper = params.tickUpper
  }

  /** METHODS */
  toString(): string {
    return `Uniswap V3 Liquidity Position: ${this.id.toString()}`
  }
}
