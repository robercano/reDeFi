import {
  __LiquidityPoolInfoSignature__,
  IFiatCurrencyAmount,
  ILiquidityPoolId,
  IToken,
  PoolType,
} from '@thesolidchain/sdk-common'

/**
 * Type for the parameters of UniswapV3LiquidityPoolInfo
 */
export type UniswapV3LiquidityPoolInfoParameters = {
  id: ILiquidityPoolId
  tokens: IToken[]
  totalValueLocked: IFiatCurrencyAmount
}

/**
 * @class UniswapV3LiquidityPoolInfo
 * @see ILiquidityPoolInfo
 *
 * NOTE: this class intentionally does NOT `implements ILiquidityPoolInfo` / extend the generic
 * `PoolInfo` base class. `Pool`/`PoolInfo` (`packages/sdk/common/src/common/implementation/{Pool,PoolInfo}.ts`)
 * are NOT exported from `@thesolidchain/sdk-common`'s public entrypoint, and neither is the
 * `unique symbol` used to brand the generic `IPool`/`IPoolInfo` interfaces. That makes it
 * impossible for a package outside `sdk-common` to genuinely satisfy `ILiquidityPoolInfo`
 * (which extends `IPoolInfo`) without a cast — this is very likely why `getLiquidityPoolInfo`
 * previously just threw. `getLiquidityPoolInfo` casts an instance of this class to
 * `ILiquidityPoolInfo` at its return boundary; see the comment there for details. This should be
 * revisited if/when `sdk-common` exports `Pool`/`PoolInfo` (or adds liquidity-specific base
 * classes mirroring `LendingPoolInfo`).
 */
export class UniswapV3LiquidityPoolInfo {
  /** SIGNATURE (the `ILiquidityPoolInfo`-specific brand only; see class doc for the generic one) */
  readonly [__LiquidityPoolInfoSignature__] = __LiquidityPoolInfoSignature__

  /** ATTRIBUTES */
  readonly type = PoolType.Liquidity
  readonly id: ILiquidityPoolId
  readonly tokens: IToken[]
  readonly totalValueLocked: IFiatCurrencyAmount

  /** FACTORY */
  static createFrom(params: UniswapV3LiquidityPoolInfoParameters): UniswapV3LiquidityPoolInfo {
    return new UniswapV3LiquidityPoolInfo(params)
  }

  /** SEALED CONSTRUCTOR */
  private constructor(params: UniswapV3LiquidityPoolInfoParameters) {
    this.id = params.id
    this.tokens = params.tokens
    this.totalValueLocked = params.totalValueLocked
  }

  /** METHODS */
  toString(): string {
    return `Uniswap V3 Liquidity Pool: ${this.tokens.map((token) => token.symbol).join('/')}`
  }
}
