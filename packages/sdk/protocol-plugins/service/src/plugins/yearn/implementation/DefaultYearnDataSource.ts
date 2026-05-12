import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { Address, TokenAmount, IChainInfo, Percentage, IFiatCurrencyAmount } from '@thesolidchain/sdk-common'
import { parseAbi } from 'viem'
import { BigNumber } from 'bignumber.js'
import { IYearnDataSource, YearnVaultDto, YearnPositionDto } from '../interfaces/IYearnDataSource'

export class DefaultYearnDataSource implements IYearnDataSource {
  constructor(private context: IProtocolPluginContext) {}

  async getVault(vaultAddress: string): Promise<YearnVaultDto> {
    const vaultAddressObj = Address.createFromEthereum({ value: vaultAddress })
    const chainInfo = this.context.provider.chain as unknown as IChainInfo
    
    // We fetch receipt token (the vault itself)
    const receiptToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: vaultAddressObj,
    })
    
    // We fetch the underlying token
    const tokenAbi = parseAbi(['function token() view returns (address)'])
    const underlyingAddress = await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: tokenAbi,
      functionName: 'token',
    }) as `0x${string}`
    
    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: Address.createFromEthereum({ value: underlyingAddress })
    })

    // Fetch total assets
    const assetsAbi = parseAbi(['function totalAssets() view returns (uint256)'])
    const totalAssetsRaw = await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: assetsAbi,
      functionName: 'totalAssets',
    }) as bigint

    const totalAssetsAmount = TokenAmount.createFrom({
      token: underlyingToken,
      amount: totalAssetsRaw.toString(),
    })

    const spotPriceInfo = await this.context.oracleManager.getSpotPrice({
      baseToken: underlyingToken,
    })
    const totalValueLocked = spotPriceInfo.price.multiply(totalAssetsAmount) as IFiatCurrencyAmount

    return {
      underlyingToken,
      receiptToken,
      currentApy: Percentage.createFrom({ value: 0.05 }), // Hardcoded for now
      totalValueLocked,
    }
  }

  async getUserPosition(vaultAddress: string, userAddress: string): Promise<YearnPositionDto> {
    const vaultAddressObj = Address.createFromEthereum({ value: vaultAddress })
    const chainInfo = this.context.provider.chain as unknown as IChainInfo

    const receiptToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: vaultAddressObj,
    })
    
    const tokenAbi = parseAbi([
      'function token() view returns (address)',
      'function pricePerShare() view returns (uint256)',
      'function balanceOf(address) view returns (uint256)'
    ])
    
    const multicallResult = await this.context.provider.multicall({
      contracts: [
        { address: vaultAddress as `0x${string}`, abi: tokenAbi, functionName: 'token' },
        { address: vaultAddress as `0x${string}`, abi: tokenAbi, functionName: 'pricePerShare' },
        { address: vaultAddress as `0x${string}`, abi: tokenAbi, functionName: 'balanceOf', args: [userAddress as `0x${string}`] }
      ]
    })

    const underlyingAddress = multicallResult[0].result as `0x${string}`
    const pricePerShare = multicallResult[1].result as bigint
    const balance = multicallResult[2].result as bigint

    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: Address.createFromEthereum({ value: underlyingAddress })
    })

    // currentAmount = balance * pricePerShare / 10**decimals
    const sharesDecimals = receiptToken.decimals

    // raw underlying = (balance * pricePerShare) / 10**sharesDecimals
    const underlyingBalanceRaw = (balance * pricePerShare) / (10n ** BigInt(sharesDecimals))

    const currentAmount = TokenAmount.createFrom({
      token: underlyingToken,
      amount: underlyingBalanceRaw.toString(),
    })

    // Using currentAmount as a proxy for principalAmount since we don't have historical data.
    const principalAmount = TokenAmount.createFrom({
      token: underlyingToken,
      amount: underlyingBalanceRaw.toString(),
    })

    return {
      currentAmount,
      principalAmount,
    }
  }
}
