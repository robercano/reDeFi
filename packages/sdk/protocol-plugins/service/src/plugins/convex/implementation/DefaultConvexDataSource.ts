import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import {
  Address,
  TokenAmount,
  IChainInfo,
  Percentage,
  IFiatCurrencyAmount,
} from '@thesolidchain/sdk-common'
import { parseAbi } from 'viem'
import { IConvexDataSource, ConvexPoolDto, ConvexPositionDto } from '../interfaces/IConvexDataSource'

export class DefaultConvexDataSource implements IConvexDataSource {
  constructor(private context: IProtocolPluginContext) {}

  async getPool(tokenAddress: string): Promise<ConvexPoolDto> {
    const tokenAddressObj = Address.createFromEthereum({ value: tokenAddress })
    const chainInfo = this.context.provider.chain as unknown as IChainInfo

    const receiptToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: tokenAddressObj,
    })

    // Assume underlying token is same as receipt token for the context of this mock setup
    // Real implementation would query the Booster or Reward pool for its underlying LP token.
    const underlyingToken = receiptToken

    const currentApyValue = 0 // Mock APY

    // Fallback calculation for TVL
    const totalAssetsAbi = parseAbi(['function totalSupply() view returns (uint256)'])
    let tvlAmount: IFiatCurrencyAmount | undefined = undefined

    try {
      const totalSupplyRaw = (await this.context.provider.readContract({
        address: tokenAddress as `0x${string}`,
        abi: totalAssetsAbi,
        functionName: 'totalSupply',
      })) as bigint

      const totalSupplyAmount = TokenAmount.createFromBaseUnit({
        token: receiptToken,
        amount: totalSupplyRaw.toString(),
      })

      const spotPriceInfo = await this.context.oracleManager.getSpotPrice({
        baseToken: receiptToken,
      })
      
      tvlAmount = spotPriceInfo?.price
        ? (spotPriceInfo.price.multiply(totalSupplyAmount) as IFiatCurrencyAmount)
        : undefined
    } catch (e) {
      console.warn('Failed to fetch Convex totalSupply or spot price', e)
    }

    return {
      underlyingToken,
      receiptToken,
      currentApy: Percentage.createFrom({ value: currentApyValue }),
      totalValueLocked: tvlAmount,
    }
  }

  async getUserPosition(tokenAddress: string, userAddress: string): Promise<ConvexPositionDto> {
    const chainInfo = this.context.provider.chain as unknown as IChainInfo
    const tokenAddressObj = Address.createFromEthereum({ value: tokenAddress })

    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: tokenAddressObj,
    })

    const balanceAbi = parseAbi(['function balanceOf(address) view returns (uint256)'])
    let balanceRaw = 0n

    try {
      balanceRaw = (await this.context.provider.readContract({
        address: tokenAddress as `0x${string}`,
        abi: balanceAbi,
        functionName: 'balanceOf',
        args: [userAddress as `0x${string}`],
      })) as bigint
    } catch (e) {
      console.warn('Failed to fetch Convex position balance', e)
    }

    const currentAmount = TokenAmount.createFromBaseUnit({
      token: underlyingToken,
      amount: balanceRaw.toString(),
    })

    const principalAmount = TokenAmount.createFromBaseUnit({
      token: underlyingToken,
      amount: balanceRaw.toString(),
    })

    return {
      currentAmount,
      principalAmount,
    }
  }
}
