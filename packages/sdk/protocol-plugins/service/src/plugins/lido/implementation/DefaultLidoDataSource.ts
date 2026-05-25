import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import {
  Address,
  TokenAmount,
  IChainInfo,
  Percentage,
  IFiatCurrencyAmount,
} from '@thesolidchain/sdk-common'
import { parseAbi } from 'viem'
import { ILidoDataSource, LidoPoolDto, LidoPositionDto } from '../interfaces/ILidoDataSource'

const LIDO_APR_API = 'https://eth-api.lido.fi/v1/protocol/steth/apr/sma'

export class DefaultLidoDataSource implements ILidoDataSource {
  constructor(private context: IProtocolPluginContext) {}

  async getPool(tokenAddress: string): Promise<LidoPoolDto> {
    const tokenAddressObj = Address.createFromEthereum({ value: tokenAddress })
    const chainInfo = this.context.provider.chain as unknown as IChainInfo

    const receiptToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: tokenAddressObj,
    })

    // For Lido on Ethereum, the underlying is always ETH.
    // We fetch ETH's metadata from the tokensManager using the zero address or '0xeeee...'
    const ethAddressObj = Address.createFromEthereum({ value: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' })
    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: ethAddressObj,
    })

    let currentApyValue = 0

    try {
      const response = await fetch(LIDO_APR_API)
      if (response.ok) {
        const data = await response.json()
        currentApyValue = data?.data?.smaApr || 0
      }
    } catch (error) {
      console.warn('Failed to fetch Lido APY from API', error)
    }

    // Fallback calculation for TVL
    const totalAssetsAbi = parseAbi(['function totalSupply() view returns (uint256)'])
    const totalSupplyRaw = (await this.context.provider.readContract({
      address: tokenAddress as `0x${string}`,
      abi: totalAssetsAbi,
      functionName: 'totalSupply',
    })) as bigint

    const totalSupplyAmount = TokenAmount.createFrom({
      token: receiptToken,
      amount: totalSupplyRaw.toString(),
    })

    const spotPriceInfo = await this.context.oracleManager.getSpotPrice({
      baseToken: receiptToken,
    })
    
    const tvlAmount = spotPriceInfo.price.multiply(totalSupplyAmount) as IFiatCurrencyAmount

    return {
      underlyingToken,
      receiptToken,
      currentApy: Percentage.createFrom({ value: currentApyValue }),
      totalValueLocked: tvlAmount,
    }
  }

  async getUserPosition(tokenAddress: string, userAddress: string): Promise<LidoPositionDto> {
    const chainInfo = this.context.provider.chain as unknown as IChainInfo

    // Fetch the underlying token (ETH)
    const ethAddressObj = Address.createFromEthereum({ value: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' })
    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: ethAddressObj,
    })

    const balanceAbi = parseAbi(['function balanceOf(address) view returns (uint256)'])
    
    // For stETH, balanceOf already returns the rebased underlying amount.
    // For wstETH, we would need to check if it's wstETH and multiply by stEthPerToken().
    // We assume stETH here based on standard Lido integration.
    const balanceRaw = (await this.context.provider.readContract({
      address: tokenAddress as `0x${string}`,
      abi: balanceAbi,
      functionName: 'balanceOf',
      args: [userAddress as `0x${string}`],
    })) as bigint

    const currentAmount = TokenAmount.createFrom({
      token: underlyingToken,
      amount: balanceRaw.toString(),
    })

    // Without historical indexed data, we default principal to current.
    const principalAmount = TokenAmount.createFrom({
      token: underlyingToken,
      amount: balanceRaw.toString(),
    })

    return {
      currentAmount,
      principalAmount,
    }
  }
}
