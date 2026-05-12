import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import {
  Address,
  TokenAmount,
  IChainInfo,
  Percentage,
  IFiatCurrencyAmount,
  FiatCurrencyAmount,
} from '@thesolidchain/sdk-common'
import { parseAbi } from 'viem'
import { IYearnDataSource, YearnVaultDto, YearnPositionDto } from '../interfaces/IYearnDataSource'

/**
 * The default implementation of the Yearn data source.
 * This implementation queries real vault APY and TVL data using the official Yearn yDaemon API,
 * while querying the exact user positions directly on-chain using the provided RPC client.
 *
 * @public
 */
export class DefaultYearnDataSource implements IYearnDataSource {
  /**
   * Initializes the Yearn data source.
   *
   * @param context - The plugin context providing the provider (RPC), oracle manager, and tokens manager.
   */
  constructor(private context: IProtocolPluginContext) {}

  /**
   * Retrieves the off-chain and on-chain aggregated data for a specific Yearn vault.
   * This hits the yDaemon API to fetch the current net APR and TVL, and falls back to
   * on-chain calculation for TVL if needed.
   *
   * @param vaultAddress - The contract address of the Yearn vault.
   * @returns A promise resolving to the Vault DTO containing tokens, APY, and TVL.
   */
  async getVault(vaultAddress: string): Promise<YearnVaultDto> {
    const vaultAddressObj = Address.createFromEthereum({ value: vaultAddress })
    const chainInfo = this.context.provider.chain as unknown as IChainInfo
    const chainId = chainInfo.id || 1

    // Fetch receipt token (the vault itself)
    const receiptToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: vaultAddressObj,
    })

    // Fetch the underlying token from on-chain to be absolutely sure
    const tokenAbi = parseAbi(['function token() view returns (address)'])
    const underlyingAddress = (await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: tokenAbi,
      functionName: 'token',
    })) as `0x${string}`

    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: Address.createFromEthereum({ value: underlyingAddress }),
    })

    // Query yDaemon for APY and TVL
    let currentApyValue = 0
    let tvlAmount: IFiatCurrencyAmount | undefined

    try {
      const response = await fetch(`https://ydaemon.yearn.fi/${chainId}/vaults/${vaultAddress}`)
      if (response.ok) {
        const vaultData = await response.json()
        
        // Prefer netAPR, fallback to forwardAPR.netAPR, then default to 0
        currentApyValue =
          vaultData.apr?.netAPR ?? vaultData.apr?.forwardAPR?.netAPR ?? 0

        // Grab USD TVL if available
        if (vaultData.tvl?.tvl) {
          tvlAmount = FiatCurrencyAmount.createFrom({ value: vaultData.tvl.tvl })
        }
      }
    } catch (error) {
      console.warn(`Failed to fetch yDaemon data for vault ${vaultAddress}`, error)
    }

    // Fallback TVL calculation if yDaemon fails or doesn't return TVL
    if (!tvlAmount) {
      const assetsAbi = parseAbi(['function totalAssets() view returns (uint256)'])
      const totalAssetsRaw = (await this.context.provider.readContract({
        address: vaultAddress as `0x${string}`,
        abi: assetsAbi,
        functionName: 'totalAssets',
      })) as bigint

      const totalAssetsAmount = TokenAmount.createFrom({
        token: underlyingToken,
        amount: totalAssetsRaw.toString(),
      })

      const spotPriceInfo = await this.context.oracleManager.getSpotPrice({
        baseToken: underlyingToken,
      })
      tvlAmount = spotPriceInfo.price.multiply(totalAssetsAmount) as IFiatCurrencyAmount
    }

    return {
      underlyingToken,
      receiptToken,
      currentApy: Percentage.createFrom({ value: currentApyValue }),
      totalValueLocked: tvlAmount,
    }
  }

  /**
   * Retrieves the current Yield position of a specific user in a given Yearn vault.
   * This is done completely on-chain using Multicall to ensure the balance is exactly
   * correct at the current block.
   *
   * @param vaultAddress - The contract address of the Yearn vault.
   * @param userAddress - The address of the user holding the position.
   * @returns A promise resolving to the Position DTO with current underlying balances.
   */
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
      'function balanceOf(address) view returns (uint256)',
    ])

    const multicallResult = await this.context.provider.multicall({
      contracts: [
        { address: vaultAddress as `0x${string}`, abi: tokenAbi, functionName: 'token' },
        { address: vaultAddress as `0x${string}`, abi: tokenAbi, functionName: 'pricePerShare' },
        {
          address: vaultAddress as `0x${string}`,
          abi: tokenAbi,
          functionName: 'balanceOf',
          args: [userAddress as `0x${string}`],
        },
      ],
    })

    const underlyingAddress = multicallResult[0].result as `0x${string}`
    const pricePerShare = multicallResult[1].result as bigint
    const balance = multicallResult[2].result as bigint

    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: Address.createFromEthereum({ value: underlyingAddress }),
    })

    const sharesDecimals = receiptToken.decimals

    // raw underlying = (balance * pricePerShare) / 10**sharesDecimals
    const underlyingBalanceRaw = (balance * pricePerShare) / 10n ** BigInt(sharesDecimals)

    const currentAmount = TokenAmount.createFrom({
      token: underlyingToken,
      amount: underlyingBalanceRaw.toString(),
    })

    // Using currentAmount as a proxy for principalAmount since we don't have historical data natively.
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
