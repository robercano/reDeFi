import { parseAbi } from 'viem'

/**
 * Minimal Uniswap V3 pool ABI fragment required to read the canonical token ordering
 * (`token0`/`token1`) used by the pool. Reading it directly from the pool contract, instead of
 * trusting caller-supplied ordering, is what guarantees the `token0 < token1` invariant Uniswap
 * V3 requires (issue #11 item 3) and lets the fee tier be derived from the pool itself
 * (issue #11 item 4) instead of being hardcoded.
 */
export const UNISWAP_V3_POOL_ABI = parseAbi([
  'function token0() view returns (address)',
  'function token1() view returns (address)',
  'function fee() view returns (uint24)',
])

/**
 * Minimal ERC20 ABI fragment used to read the pool's token balances for TVL purposes.
 */
export const ERC20_BALANCE_ABI = parseAbi([
  'function balanceOf(address account) view returns (uint256)',
])

/**
 * Uniswap V3 NonfungiblePositionManager ABI fragment required by the plugin's builders and
 * reads.
 */
// NOTE: viem/abitype's human-readable ABI parser does NOT accept the `tuple(...)` keyword form
// for struct parameters (only bare `(...)`, matching real Solidity signature syntax) — the
// pre-existing `tuple(...)` spelling here was invalid and threw at `parseAbi` time whenever this
// module was loaded/exercised. It was never caught because there were zero tests for this plugin
// before issue #11 (see the new calldata tests in `tests/unit/plugins/UniswapV3LiquidityFeatures.spec.ts`).
export const UNISWAP_V3_NPM_ABI = parseAbi([
  'function mint((address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint256 amount0Desired, uint256 amount1Desired, uint256 amount0Min, uint256 amount1Min, address recipient, uint256 deadline) params) external payable returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)',
  'function decreaseLiquidity((uint256 tokenId, uint128 liquidity, uint256 amount0Min, uint256 amount1Min, uint256 deadline) params) external payable returns (uint256 amount0, uint256 amount1)',
  'function positions(uint256 tokenId) external view returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)',
  'function ownerOf(uint256 tokenId) external view returns (address)',
])
