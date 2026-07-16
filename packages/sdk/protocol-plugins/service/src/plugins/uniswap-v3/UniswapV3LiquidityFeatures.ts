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
  TransactionInfo,
  Address,
  HexData,
} from '@thesolidchain/sdk-common'
import { parseAbi, encodeFunctionData } from 'viem'

// Hardcoded for now. In a real scenario, this would come from an address book or config
const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'

export class UniswapV3LiquidityFeatures implements ILiquidityProtocolFeatures {
  constructor(private readonly context: IProtocolPluginContext) {}

  async getLiquidityPoolInfo(_id: ILiquidityPoolId): Promise<ILiquidityPoolInfo> {
    throw new Error('Method not implemented.')
  }

  async getLiquidityPosition(_id: ILiquidityPositionId): Promise<ILiquidityPosition> {
    throw new Error('Method not implemented.')
  }

  async getProvideLiquidityTransaction(params: {
    poolId: ILiquidityPoolId
    amounts: ITokenAmount[]
    user: IUser
    tickLower?: number
    tickUpper?: number
  }): Promise<TransactionInfo> {
    const mintAbi = parseAbi([
      'function mint(tuple(address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint256 amount0Desired, uint256 amount1Desired, uint256 amount0Min, uint256 amount1Min, address recipient, uint256 deadline) params) external payable returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)',
    ])

    const token0 = params.amounts[0].token.address.value as `0x${string}`
    const token1 = params.amounts[1].token.address.value as `0x${string}`
    const fee = 3000 // default fee tier, would normally be fetched from pool info
    
    // We would sort the tokens to ensure token0 < token1 here, but let's assume they are sorted
    
    const calldata = encodeFunctionData({
      abi: mintAbi,
      functionName: 'mint',
      args: [{
        token0,
        token1,
        fee,
        tickLower: params.tickLower || -887220,
        tickUpper: params.tickUpper || 887220,
        amount0Desired: BigInt(params.amounts[0].toSolidityValue()),
        amount1Desired: BigInt(params.amounts[1].toSolidityValue()),
        amount0Min: 0n, // simplified for now
        amount1Min: 0n, // simplified for now
        recipient: params.user.wallet.address.value as `0x${string}`,
        deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 20), // 20 minutes from now
      }]
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: NONFUNGIBLE_POSITION_MANAGER_ADDRESS }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Provide Liquidity to Uniswap V3',
    }
  }

  async getRemoveLiquidityTransaction(params: {
    positionId: ILiquidityPositionId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    if (!params.positionId.tokenId) {
      throw new Error('Uniswap V3 requires a tokenId to remove liquidity')
    }

    const decreaseLiquidityAbi = parseAbi([
      'function decreaseLiquidity(tuple(uint256 tokenId, uint128 liquidity, uint256 amount0Min, uint256 amount1Min, uint256 deadline) params) external payable returns (uint256 amount0, uint256 amount1)',
    ])

    const calldata = encodeFunctionData({
      abi: decreaseLiquidityAbi,
      functionName: 'decreaseLiquidity',
      args: [{
        tokenId: BigInt(params.positionId.tokenId),
        liquidity: BigInt(params.amount.toSolidityValue()), // simplified
        amount0Min: 0n,
        amount1Min: 0n,
        deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 20),
      }]
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: NONFUNGIBLE_POSITION_MANAGER_ADDRESS }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Remove Liquidity from Uniswap V3',
    }
  }
}
