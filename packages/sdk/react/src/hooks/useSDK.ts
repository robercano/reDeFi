import { makeSDK, makeSDKWithSigner } from '@thesolidchain/sdk-client'
import type { ISimulatorClient, SimulatorClient, SDKSigner } from '@thesolidchain/sdk-client'
import { useCallback, useMemo } from 'react'

import { useSDKContext } from '../components/SDKContext'
import { getWalletAddressHandler } from '../factories/getWalletAddressHandler'
import { getChainHandler } from '../handlers/getChainHandler'
import { getChainInfoHandler } from '../handlers/getChainInfoHandler'
import { getCurrentUserHandler } from '../handlers/getCurrentUserHandler'
import { getSpotPriceHandler } from '../handlers/getSpotPriceHandler'
import { getSpotPricesHandler } from '../handlers/getSpotPricesHandler'
import { getSwapQuoteHandler } from '../handlers/getSwapQuoteHandler'
import { getSwapDataHandler } from '../handlers/getSwapDataHandler'
import { getSellOrderQuoteHandler } from '../handlers/getSellOrderQuoteHandler'
import { sendOrderHandler } from '../handlers/sendOrderHandler'
import { checkOrderHandler } from '../handlers/checkOrderHandler'
import { cancelOrderHandler } from '../handlers/cancelOrderHandler'
import { getTokenBySymbolHandler } from '../handlers/getTokenBySymbolHandler'
import { getTokenTotalSupplyHandler } from '../handlers/getTokenTotalSupplyHandler'
import { getUserPortfolioHandler } from '../handlers/getUserPortfolioHandler'
import { getLendingPoolHandler } from '../handlers/getLendingPoolHandler'
import { getLendingPoolInfoHandler } from '../handlers/getLendingPoolInfoHandler'
import { buildOrderHandler } from '../handlers/buildOrderHandler'

type UseSdk = {
  walletAddress?: string
  chainId?: number
  signer?: SDKSigner
}

/**
 * @name useSDK
 * @description A comprehensive React Hook that provides access to the backend SDK methods.
 *              It initializes the SDK client using the context parameters and memoizes the action handlers
 *              for performance optimization within the React component lifecycle.
 *
 * @param params - The hook initialization parameters.
 * @param params.walletAddress - The active wallet address connecting to the SDK.
 * @param params.chainId - The currently active chain ID context.
 * @param params.signer - An optional signer for operations that require user signatures (like intents).
 * @returns A memoized object containing the SDK event bus and various data retrieval/execution functions.
 */
export const useSDK = (params: UseSdk) => {
  const { apiURL, apiKey } = useSDKContext()
  const { chainId, walletAddress: walletAddressString, signer } = params

  const sdk = useMemo(() => {
    if (signer) {
      return makeSDKWithSigner({ apiURL, apiKey, signer })
    }
    return makeSDK({ apiURL, apiKey })
  }, [apiURL, apiKey, signer])

  const getChainInfo = useMemo(() => getChainInfoHandler(chainId), [chainId])
  const getTargetChainInfo = useCallback((specificChainId: number) => {
    const chainInfoFn = getChainInfoHandler(specificChainId)
    return chainInfoFn()
  }, [])

  const getWalletAddress = useMemo(
    () => getWalletAddressHandler(walletAddressString),
    [walletAddressString],
  )

  // State getters
  const getCurrentUser = useMemo(
    () => getCurrentUserHandler(getChainInfo, getWalletAddress),
    [getCurrentUserHandler, getChainInfo, getWalletAddress],
  )

  // CHAIN HANDLERS
  const getChain = useMemo(() => getChainHandler(sdk), [sdk, chainId])
  const getTokenBySymbol = useMemo(() => getTokenBySymbolHandler(getChain), [getChain])
  const getTokenTotalSupply = useMemo(() => getTokenTotalSupplyHandler(getChain), [getChain])

  // SWAPS
  const getSwapQuote = useMemo(() => getSwapQuoteHandler(sdk), [sdk])
  const getSwapData = useMemo(() => getSwapDataHandler(sdk), [sdk])

  // ORACLES

  const getSpotPrice = useMemo(() => getSpotPriceHandler(sdk), [sdk])
  const getSpotPrices = useMemo(() => getSpotPricesHandler(sdk), [sdk])

  // PORTFOLIO

  const getUserPortfolio = useMemo(() => getUserPortfolioHandler(sdk), [sdk])

  // PROTOCOLS & ORDERS
  const getLendingPool = useMemo(() => getLendingPoolHandler(sdk), [sdk])
  const getLendingPoolInfo = useMemo(() => getLendingPoolInfoHandler(sdk), [sdk])
  const buildOrder = useMemo(() => buildOrderHandler(sdk), [sdk])

  // INTENT SWAPS
  const intentSwaps = useMemo(() => ({
    getSellOrderQuote: getSellOrderQuoteHandler(sdk),
    sendOrder: sendOrderHandler(sdk),
    checkOrder: checkOrderHandler(sdk),
    cancelOrder: cancelOrderHandler(sdk),
  }), [sdk])

  const memo = useMemo(
    () => ({
      eventBus: sdk.eventBus,
      getCurrentUser,
      getWalletAddress,
      getChainInfo,
      getTargetChainInfo,
      getChain,
      getTokenBySymbol,
      getTokenTotalSupply,
      getSwapQuote,
      getSwapData,
      getSpotPrice,
      getSpotPrices,
      getUserPortfolio,
      getLendingPool,
      getLendingPoolInfo,
      buildOrder,
      intentSwaps,
      simulator: sdk.simulator,
    }),
    [
      sdk.eventBus,
      sdk.simulator,
      getCurrentUser,
      getWalletAddress,
      getChainInfo,
      getTargetChainInfo,
      getChain,
      getTokenBySymbol,
      getTokenTotalSupply,
      getSwapQuote,
      getSwapData,
      getSpotPrice,
      getSpotPrices,
      getUserPortfolio,
      getLendingPool,
      getLendingPoolInfo,
      buildOrder,
      intentSwaps,
    ],
  )

  return memo
}

export type SdkClient = ReturnType<typeof useSDK>
