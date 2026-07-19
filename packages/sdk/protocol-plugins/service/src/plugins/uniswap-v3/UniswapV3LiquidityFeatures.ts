import {
  ILiquidityProtocolFeatures,
  IProtocolPluginContext,
} from '@thesolidchain/protocol-plugins-common'
import {
  ILiquidityPoolId,
  ILiquidityPoolInfo,
  ILiquidityPosition,
  ILiquidityPositionId,
  ITokenAmount,
  IUser,
  IPercentage,
  IFiatCurrencyAmount,
  TransactionInfo,
  Address,
  HexData,
  Percentage,
  TokenAmount,
  PoolType,
  getChainInfoByChainId,
} from '@thesolidchain/sdk-common'
import { encodeFunctionData } from 'viem'
import { getContractAddress } from '../utils/GetContractAddress'
import { UNISWAP_V3_NPM_CONTRACT_NAME } from './config/UniswapV3Addresses'
import {
  ERC20_BALANCE_ABI,
  UNISWAP_V3_NPM_ABI,
  UNISWAP_V3_POOL_ABI,
} from './abis/UniswapV3ABIS'
import { UniswapV3LiquidityPoolInfo } from './implementation/UniswapV3LiquidityPoolInfo'
import { UniswapV3LiquidityPosition } from './implementation/UniswapV3LiquidityPosition'

/** Default slippage tolerance applied when the caller does not provide one (0.5%). */
const DEFAULT_SLIPPAGE_TOLERANCE = Percentage.createFrom({ value: 0.5 })

/** Default deadline window applied to Uniswap V3 NonfungiblePositionManager calls (20 minutes). */
const DEADLINE_WINDOW_SECONDS = 60 * 20

/** Basis points denominator (10_000 = 100.00%). */
const BASIS_POINTS_DENOMINATOR = 10_000n

/**
 * Converts an `IPercentage` slippage tolerance into whole basis points (rounded), clamped to a
 * sane [0, 10_000] range so a malformed/huge input can never produce a negative or overflowing
 * minimum downstream.
 */
function toBasisPoints(slippageTolerance: IPercentage | undefined): bigint {
  const percentage = slippageTolerance ?? DEFAULT_SLIPPAGE_TOLERANCE
  const bps = BigInt(Math.round(percentage.toProportion() * 10_000))
  if (bps < 0n) return 0n
  if (bps > BASIS_POINTS_DENOMINATOR) return BASIS_POINTS_DENOMINATOR
  return bps
}

/**
 * Applies a slippage tolerance to a desired/expected raw (base-unit) amount to compute the
 * minimum amount that should still be accepted on-chain.
 */
function applySlippageMin(amount: bigint, slippageToleranceBps: bigint): bigint {
  return (amount * (BASIS_POINTS_DENOMINATOR - slippageToleranceBps)) / BASIS_POINTS_DENOMINATOR
}

function currentDeadline(): bigint {
  return BigInt(Math.floor(Date.now() / 1000) + DEADLINE_WINDOW_SECONDS)
}

/**
 * @class UniswapV3LiquidityFeatures
 * @see ILiquidityProtocolFeatures
 *
 * Implements Uniswap V3 concentrated liquidity operations against the
 * NonfungiblePositionManager (NPM) and pool contracts.
 *
 * ⚠️ SAFETY NOTE: this plugin is currently deregistered from `ProtocolPluginsRecord` (see
 * issue #11 item 8). It is not reachable through the normal SDK plugin registry until it has
 * been independently verified — in particular the Base NonfungiblePositionManager address in
 * `./config/UniswapV3Addresses.ts`, which is a best-effort, network-unverified value (see the
 * comment there).
 */
export class UniswapV3LiquidityFeatures implements ILiquidityProtocolFeatures {
  constructor(private readonly context: IProtocolPluginContext) {}

  /**
   * Resolves the per-chain NonfungiblePositionManager address (issue #11 item 2).
   * @internal
   */
  private async _getNpmAddress(chainId: number): Promise<`0x${string}`> {
    const chainInfo = getChainInfoByChainId(chainId)
    const address = await getContractAddress({
      addressBookManager: this.context.addressBookManager,
      chainInfo,
      contractName: UNISWAP_V3_NPM_CONTRACT_NAME,
    })
    return address.value as `0x${string}`
  }

  /** @see ILiquidityProtocolFeatures.getLiquidityPoolInfo */
  async getLiquidityPoolInfo(id: ILiquidityPoolId): Promise<ILiquidityPoolInfo> {
    const poolAddress = id.address.value as `0x${string}`
    const chainInfo = getChainInfoByChainId(id.chainId)

    const [token0Address, token1Address] = await this.context.provider.multicall({
      contracts: [
        { address: poolAddress, abi: UNISWAP_V3_POOL_ABI, functionName: 'token0' },
        { address: poolAddress, abi: UNISWAP_V3_POOL_ABI, functionName: 'token1' },
      ],
      allowFailure: false,
    })

    const [token0, token1] = await Promise.all([
      this.context.tokensManager.getTokenByAddress({
        chainInfo,
        address: Address.createFromEthereum({ value: token0Address }),
      }),
      this.context.tokensManager.getTokenByAddress({
        chainInfo,
        address: Address.createFromEthereum({ value: token1Address }),
      }),
    ])

    // TVL is computed from the token balances actually held by the pool contract, priced via the
    // oracle. This uses only on-chain state (no tick/sqrt-price math), so it can't drift from
    // Uniswap's own accounting.
    const [balance0Raw, balance1Raw] = await this.context.provider.multicall({
      contracts: [
        {
          address: token0Address,
          abi: ERC20_BALANCE_ABI,
          functionName: 'balanceOf',
          args: [poolAddress],
        },
        {
          address: token1Address,
          abi: ERC20_BALANCE_ABI,
          functionName: 'balanceOf',
          args: [poolAddress],
        },
      ],
      allowFailure: false,
    })

    const balance0 = TokenAmount.createFromBaseUnit({
      token: token0,
      amount: balance0Raw.toString(),
    })
    const balance1 = TokenAmount.createFromBaseUnit({
      token: token1,
      amount: balance1Raw.toString(),
    })

    const [price0, price1] = await Promise.all([
      this.context.oracleManager.getSpotPrice({ baseToken: token0 }),
      this.context.oracleManager.getSpotPrice({ baseToken: token1 }),
    ])

    const tvl0 = price0.price.multiply(balance0) as IFiatCurrencyAmount
    const tvl1 = price1.price.multiply(balance1) as IFiatCurrencyAmount
    const totalValueLocked = tvl0.add(tvl1)

    const poolInfo = UniswapV3LiquidityPoolInfo.createFrom({
      id,
      tokens: [token0, token1],
      totalValueLocked,
    })

    // See the class-level comment on `UniswapV3LiquidityPoolInfo` for why this cast is required:
    // `IPoolInfo`'s brand symbol is not exported from `@thesolidchain/sdk-common`, so this
    // interface cannot be genuinely implemented from outside that package.
    return poolInfo as unknown as ILiquidityPoolInfo
  }

  /** @see ILiquidityProtocolFeatures.getLiquidityPosition */
  async getLiquidityPosition(id: ILiquidityPositionId): Promise<ILiquidityPosition> {
    if (!id.tokenId) {
      throw new Error('Uniswap V3 requires a tokenId to fetch a position')
    }

    const tokenId = BigInt(id.tokenId)
    const npmAddress = await this._getNpmAddress(id.poolId.chainId)
    const chainInfo = getChainInfoByChainId(id.poolId.chainId)

    // NOTE: `positions()`'s second field is the approved `operator` (usually the zero address),
    // NOT the token owner — the owner must be read separately via `ownerOf`. Using `operator` as
    // the owner would make the `simulateContract` auth check below fail (or worse, silently
    // succeed for the wrong account) for any position that hasn't been individually approved.
    const [positionDataRaw, ownerRaw] = await this.context.provider.multicall({
      contracts: [
        { address: npmAddress, abi: UNISWAP_V3_NPM_ABI, functionName: 'positions', args: [tokenId] },
        { address: npmAddress, abi: UNISWAP_V3_NPM_ABI, functionName: 'ownerOf', args: [tokenId] },
      ],
      allowFailure: false,
    })
    const owner = ownerRaw as unknown as `0x${string}`
    const [, , token0Address, token1Address, , tickLower, tickUpper, liquidity, , , tokensOwed0, tokensOwed1] =
      positionDataRaw as unknown as readonly [
        bigint,
        `0x${string}`,
        `0x${string}`,
        `0x${string}`,
        number,
        number,
        number,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
      ]

    const [token0, token1] = await Promise.all([
      this.context.tokensManager.getTokenByAddress({
        chainInfo,
        address: Address.createFromEthereum({ value: token0Address }),
      }),
      this.context.tokensManager.getTokenByAddress({
        chainInfo,
        address: Address.createFromEthereum({ value: token1Address }),
      }),
    ])

    let amount0Raw = 0n
    let amount1Raw = 0n

    if (liquidity > 0n) {
      // Ask the NonfungiblePositionManager itself (via a static/read-only call) what removing the
      // full position would currently yield. This mirrors the approach used to fix
      // `decreaseLiquidity` below and deliberately avoids re-implementing Uniswap's tick/sqrt-price
      // math off-chain, so the reported amounts can never drift from what the contract would
      // actually return on execution.
      const { result } = await this.context.provider.simulateContract({
        address: npmAddress,
        abi: UNISWAP_V3_NPM_ABI,
        functionName: 'decreaseLiquidity',
        args: [
          {
            tokenId,
            liquidity,
            amount0Min: 0n,
            amount1Min: 0n,
            deadline: currentDeadline(),
          },
        ],
        account: owner,
      })
      ;[amount0Raw, amount1Raw] = result as readonly [bigint, bigint]
    }

    const currentAmounts: ITokenAmount[] = [
      TokenAmount.createFromBaseUnit({ token: token0, amount: amount0Raw.toString() }),
      TokenAmount.createFromBaseUnit({ token: token1, amount: amount1Raw.toString() }),
    ]

    const claimableRewards: ITokenAmount[] = [
      TokenAmount.createFromBaseUnit({ token: token0, amount: tokensOwed0.toString() }),
      TokenAmount.createFromBaseUnit({ token: token1, amount: tokensOwed1.toString() }),
    ]

    const position = UniswapV3LiquidityPosition.createFrom({
      id,
      poolId: id.poolId,
      owner: Address.createFromEthereum({ value: owner }),
      currentAmounts,
      claimableRewards,
      tickLower: Number(tickLower),
      tickUpper: Number(tickUpper),
    })

    // See the class-level comment on `UniswapV3LiquidityPosition` for why this cast is required
    // and why a minimal `pool` stand-in is added here: `IPool`'s brand symbol is not exported
    // from `@thesolidchain/sdk-common`.
    return {
      ...position,
      pool: { type: PoolType.Liquidity, id: id.poolId },
    } as unknown as ILiquidityPosition
  }

  /** @see ILiquidityProtocolFeatures.getProvideLiquidityTransaction */
  async getProvideLiquidityTransaction(params: {
    poolId: ILiquidityPoolId
    amounts: ITokenAmount[]
    user: IUser
    tickLower?: number
    tickUpper?: number
    slippageTolerance?: IPercentage
  }): Promise<TransactionInfo> {
    const npmAddress = await this._getNpmAddress(params.poolId.chainId)
    const poolAddress = params.poolId.address.value as `0x${string}`

    // Read the pool's own token0/token1/fee instead of trusting caller-supplied ordering. This
    // both enforces the `token0 < token1` invariant Uniswap V3 requires (issue #11 item 3) and
    // derives the fee tier from the pool instead of hardcoding it (issue #11 item 4).
    const [token0, token1, fee] = await this.context.provider.multicall({
      contracts: [
        { address: poolAddress, abi: UNISWAP_V3_POOL_ABI, functionName: 'token0' },
        { address: poolAddress, abi: UNISWAP_V3_POOL_ABI, functionName: 'token1' },
        { address: poolAddress, abi: UNISWAP_V3_POOL_ABI, functionName: 'fee' },
      ],
      allowFailure: false,
    })

    const amountForToken0 = params.amounts.find(
      (amount) => amount.token.address.value.toLowerCase() === token0.toLowerCase(),
    )
    const amountForToken1 = params.amounts.find(
      (amount) => amount.token.address.value.toLowerCase() === token1.toLowerCase(),
    )

    if (!amountForToken0 || !amountForToken1) {
      throw new Error('Provided amounts do not match the pool tokens')
    }

    const amount0Desired = BigInt(amountForToken0.toSolidityValue())
    const amount1Desired = BigInt(amountForToken1.toSolidityValue())

    const slippageBps = toBasisPoints(params.slippageTolerance)
    const amount0Min = applySlippageMin(amount0Desired, slippageBps)
    const amount1Min = applySlippageMin(amount1Desired, slippageBps)

    const calldata = encodeFunctionData({
      abi: UNISWAP_V3_NPM_ABI,
      functionName: 'mint',
      args: [
        {
          token0,
          token1,
          fee,
          tickLower: params.tickLower ?? -887220,
          tickUpper: params.tickUpper ?? 887220,
          amount0Desired,
          amount1Desired,
          amount0Min,
          amount1Min,
          recipient: params.user.wallet.address.value as `0x${string}`,
          deadline: currentDeadline(),
        },
      ],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: npmAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Provide Liquidity to Uniswap V3',
    }
  }

  /** @see ILiquidityProtocolFeatures.getRemoveLiquidityTransaction */
  async getRemoveLiquidityTransaction(params: {
    positionId: ILiquidityPositionId
    amount: ITokenAmount
    user: IUser
    slippageTolerance?: IPercentage
  }): Promise<TransactionInfo> {
    if (!params.positionId.tokenId) {
      throw new Error('Uniswap V3 requires a tokenId to remove liquidity')
    }

    const tokenId = BigInt(params.positionId.tokenId)
    const npmAddress = await this._getNpmAddress(params.positionId.poolId.chainId)
    const owner = params.user.wallet.address.value as `0x${string}`

    // Read the position's ACTUAL on-chain liquidity instead of blindly reinterpreting the
    // requested token amount as the Uniswap `L` liquidity units (this was the bug described in
    // issue #11 item 5: `L` and a token amount are not the same unit).
    const [, , token0, token1, , , , totalLiquidity] = await this._readPosition(
      npmAddress,
      tokenId,
    )

    if (totalLiquidity === 0n) {
      throw new Error('Position has no liquidity to remove')
    }

    const requestedTokenAddress = params.amount.token.address.value.toLowerCase()
    const isToken0 = requestedTokenAddress === token0.toLowerCase()
    const isToken1 = requestedTokenAddress === token1.toLowerCase()

    if (!isToken0 && !isToken1) {
      throw new Error('The requested removal amount token does not belong to this position')
    }

    // Ask the contract what removing the FULL position would currently yield, so we can compute
    // what proportion of `L` corresponds to the token amount the caller actually asked to
    // withdraw. This uses the contract's own accounting rather than reimplementing Uniswap's
    // tick/sqrt-price math off-chain.
    const totalAmounts = await this._simulateDecreaseLiquidity({
      npmAddress,
      tokenId,
      liquidity: totalLiquidity,
      owner,
    })
    const totalAmountForRequestedToken = isToken0 ? totalAmounts[0] : totalAmounts[1]

    if (totalAmountForRequestedToken === 0n) {
      throw new Error('Position has no removable balance in the requested token')
    }

    const requestedAmountRaw = BigInt(params.amount.toSolidityValue())

    // Proportional liquidity to remove, capped at the position's total liquidity so rounding (or
    // a caller-requested amount that is >= the full position) can never try to remove more
    // liquidity than the position actually has.
    let liquidityToRemove = (totalLiquidity * requestedAmountRaw) / totalAmountForRequestedToken
    if (liquidityToRemove > totalLiquidity) {
      liquidityToRemove = totalLiquidity
    }
    if (liquidityToRemove === 0n) {
      throw new Error('Requested amount resolves to zero liquidity')
    }

    // Re-simulate with the actual liquidity being removed so the slippage minimums reflect the
    // exact amounts this liquidity produces, not a naive proportion of the full-removal totals.
    const [amount0AtLiquidity, amount1AtLiquidity] =
      liquidityToRemove === totalLiquidity
        ? totalAmounts
        : await this._simulateDecreaseLiquidity({
            npmAddress,
            tokenId,
            liquidity: liquidityToRemove,
            owner,
          })

    const slippageBps = toBasisPoints(params.slippageTolerance)
    const amount0Min = applySlippageMin(amount0AtLiquidity, slippageBps)
    const amount1Min = applySlippageMin(amount1AtLiquidity, slippageBps)

    const calldata = encodeFunctionData({
      abi: UNISWAP_V3_NPM_ABI,
      functionName: 'decreaseLiquidity',
      args: [
        {
          tokenId,
          liquidity: liquidityToRemove,
          amount0Min,
          amount1Min,
          deadline: currentDeadline(),
        },
      ],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: npmAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Remove Liquidity from Uniswap V3',
    }
  }

  /**
   * Reads a Uniswap V3 NFT position from the NonfungiblePositionManager.
   * @internal
   */
  private async _readPosition(npmAddress: `0x${string}`, tokenId: bigint) {
    return this.context.provider.readContract({
      address: npmAddress,
      abi: UNISWAP_V3_NPM_ABI,
      functionName: 'positions',
      args: [tokenId],
    }) as unknown as Promise<
      readonly [bigint, `0x${string}`, `0x${string}`, `0x${string}`, number, number, number, bigint, bigint, bigint, bigint, bigint]
    >
  }

  /**
   * Statically calls `decreaseLiquidity` (as the position owner) to read the exact token amounts
   * a given liquidity value currently resolves to, without broadcasting a transaction or
   * mutating any state.
   * @internal
   */
  private async _simulateDecreaseLiquidity(params: {
    npmAddress: `0x${string}`
    tokenId: bigint
    liquidity: bigint
    owner: `0x${string}`
  }): Promise<readonly [bigint, bigint]> {
    const { result } = await this.context.provider.simulateContract({
      address: params.npmAddress,
      abi: UNISWAP_V3_NPM_ABI,
      functionName: 'decreaseLiquidity',
      args: [
        {
          tokenId: params.tokenId,
          liquidity: params.liquidity,
          amount0Min: 0n,
          amount1Min: 0n,
          deadline: currentDeadline(),
        },
      ],
      account: params.owner,
    })
    return result as readonly [bigint, bigint]
  }
}
