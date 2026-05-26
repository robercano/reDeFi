import { ManagerProviderBase } from '@thesolidchain/api-server-common'
import {
  ChainId,
  ChainIds,
  IAddress,
  IPercentage,
  IToken,
  ITokenAmount,
  QuoteData,
  SwapData,
  SwapProviderType,
  TokenAmount,
  Address,
} from '@thesolidchain/sdk-common'
import { ISwapProvider } from '@thesolidchain/swap-common'

import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'

export class SepoliaSwapProvider
  extends ManagerProviderBase<SwapProviderType>
  implements ISwapProvider
{
  constructor(params: { configProvider: IConfigurationProvider }) {
    super({ type: SwapProviderType.OneInch, ...params }) // Use OneInch type to not break UI or downstream depending on provider type, or we could add a Mock type if needed. We'll use OneInch so it mocks OneInch.
  }

  getSupportedChainIds(): ChainId[] {
    return [ChainIds.Sepolia]
  }

  async getSwapDataExactInput(params: {
    fromAmount: ITokenAmount
    toToken: IToken
    recipient: IAddress
    slippage: IPercentage
  }): Promise<SwapData> {
    const mockOutputAmount = this._calculateMockOutput(params.fromAmount, params.toToken)

    return {
      provider: SwapProviderType.OneInch,
      fromTokenAmount: params.fromAmount,
      toTokenAmount: TokenAmount.createFromBaseUnit({
        token: params.toToken,
        amount: mockOutputAmount.toString(),
      }),
      calldata: '0x0' as any, // Mock calldata
      targetContract: Address.createFromEthereum({
        value: '0x0000000000000000000000000000000000000000' as any,
      }),
      value: '0',
      gasPrice: '1000000000', // 1 gwei
    }
  }

  async getSwapQuoteExactInput(params: {
    fromAmount: ITokenAmount
    toToken: IToken
  }): Promise<QuoteData> {
    const mockOutputAmount = this._calculateMockOutput(params.fromAmount, params.toToken)

    return {
      provider: SwapProviderType.OneInch,
      fromTokenAmount: params.fromAmount,
      toTokenAmount: TokenAmount.createFromBaseUnit({
        token: params.toToken,
        amount: mockOutputAmount.toString(),
      }),
      routes: [],
      estimatedGas: '100000',
    }
  }

  private _calculateMockOutput(fromAmount: ITokenAmount, toToken: IToken): bigint {
    // Basic mock: 1 to 1 based on decimals (adjusting for decimal differences)
    // In reality this doesn't matter much for a mock, but we try to keep it reasonable.
    const fromDecimals = fromAmount.token.decimals
    const toDecimals = toToken.decimals
    const fromValue = BigInt(fromAmount.amount)

    if (fromDecimals === toDecimals) {
      return fromValue
    } else if (fromDecimals > toDecimals) {
      return fromValue / 10n ** BigInt(fromDecimals - toDecimals)
    } else {
      return fromValue * 10n ** BigInt(toDecimals - fromDecimals)
    }
  }
}
