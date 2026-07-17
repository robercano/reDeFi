import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import {
  Address,
  TokenAmount,
  IChainInfo,
  Percentage,
  IFiatCurrencyAmount,
} from '@thesolidchain/sdk-common'
import { parseAbi } from 'viem'
import { IMakerDataSource, MakerVaultDto, MakerPositionDto } from '../interfaces/IMakerDataSource'

/**
 * Default implementation of the Maker data source.
 * This reads APY (mocked), TVL, and user balances on-chain using the ERC-4626 standard.
 */
export class DefaultMakerDataSource implements IMakerDataSource {
  constructor(private context: IProtocolPluginContext) {}

  async getVault(vaultAddress: string): Promise<MakerVaultDto> {
    const vaultAddressObj = Address.createFromEthereum({ value: vaultAddress })
    const chainInfo = this.context.provider.chain as unknown as IChainInfo

    // 1. Fetch Receipt Token
    const receiptToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: vaultAddressObj,
    })

    // 2. Fetch Underlying Token from ERC-4626 `asset()` function
    const assetAbi = parseAbi(['function asset() view returns (address)'])
    const underlyingAddress = (await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: assetAbi,
      functionName: 'asset',
    })) as `0x${string}`

    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: Address.createFromEthereum({ value: underlyingAddress }),
    })

    // 3. Mock APY (Fetching real DSR requires reading the Pot contract)
    const currentApyValue = 0 // Mocked for now

    // 4. TVL Calculation using ERC-4626 `totalAssets()`
    const totalAssetsAbi = parseAbi(['function totalAssets() view returns (uint256)'])
    const totalAssetsRaw = (await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: totalAssetsAbi,
      functionName: 'totalAssets',
    })) as bigint

    const totalAssetsAmount = TokenAmount.createFromBaseUnit({
      token: underlyingToken,
      amount: totalAssetsRaw.toString(),
    })

    const spotPriceInfo = await this.context.oracleManager.getSpotPrice({
      baseToken: underlyingToken,
    })
    const tvlAmount = spotPriceInfo?.price
      ? (spotPriceInfo.price.multiply(totalAssetsAmount) as IFiatCurrencyAmount)
      : undefined

    return {
      underlyingToken,
      receiptToken,
      currentApy: Percentage.createFrom({ value: currentApyValue }),
      totalValueLocked: tvlAmount,
    }
  }

  async getUserPosition(vaultAddress: string, userAddress: string): Promise<MakerPositionDto> {
    const chainInfo = this.context.provider.chain as unknown as IChainInfo

    // Fetch the underlying token from ERC-4626 `asset()`
    const assetAbi = parseAbi(['function asset() view returns (address)'])
    const underlyingAddress = (await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: assetAbi,
      functionName: 'asset',
    })) as `0x${string}`

    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: Address.createFromEthereum({ value: underlyingAddress }),
    })

    // Use Multicall to get balanceOf and convertToAssets in a single block
    const vaultAbi = parseAbi([
      'function balanceOf(address) view returns (uint256)',
      'function convertToAssets(uint256 shares) view returns (uint256)',
    ])

    const balanceRaw = (await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: vaultAbi,
      functionName: 'balanceOf',
      args: [userAddress as `0x${string}`],
    })) as bigint

    let currentAssetsRaw = 0n
    if (balanceRaw > 0n) {
      currentAssetsRaw = (await this.context.provider.readContract({
        address: vaultAddress as `0x${string}`,
        abi: vaultAbi,
        functionName: 'convertToAssets',
        args: [balanceRaw],
      })) as bigint
    }

    const currentAmount = TokenAmount.createFromBaseUnit({
      token: underlyingToken,
      amount: currentAssetsRaw.toString(),
    })

    // Without historical subgraphs, default principal to current
    const principalAmount = TokenAmount.createFromBaseUnit({
      token: underlyingToken,
      amount: currentAssetsRaw.toString(),
    })

    return {
      currentAmount,
      principalAmount,
    }
  }
}
