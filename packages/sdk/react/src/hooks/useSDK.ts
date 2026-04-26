import { makeSDK } from '@thesolidchain/sdk-client'
import { useCallback, useMemo } from 'react'

import { useSDKContext } from '../components/SDKContext'
import { getWalletAddressHandler } from '../factories/getWalletAddressHandler'
import { getChainHandler } from '../handlers/getChainHandler'
import { getChainInfoHandler } from '../handlers/getChainInfoHandler'
import { getCurrentUserHandler } from '../handlers/getCurrentUserHandler'
import { getSpotPriceHandler } from '../handlers/getSpotPriceHandler'
import { getSpotPricesHandler } from '../handlers/getSpotPricesHandler'
import { getSwapQuoteHandler } from '../handlers/getSwapQuoteHandler'
import { getTokenBySymbolHandler } from '../handlers/getTokenBySymbolHandler'
import { getTokenTotalSupplyHandler } from '../handlers/getTokenTotalSupplyHandler'
import { getUserPortfolioHandler } from '../handlers/getUserPortfolioHandler'
import { getLendingPoolHandler } from '../handlers/getLendingPoolHandler'
import { getLendingPoolInfoHandler } from '../handlers/getLendingPoolInfoHandler'
import { buildOrderHandler } from '../handlers/buildOrderHandler'

type UseSdk = {
  walletAddress?: string
  chainId?: number
}

export const useSDK = (params: UseSdk) => {
  const { apiURL, apiKey } = useSDKContext()
  const sdk = useMemo(() => {
    return makeSDK({ apiURL, apiKey })
  }, [apiURL, apiKey])

  const { chainId, walletAddress: walletAddressString } = params

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

  // ORACLES

  const getSpotPrice = useMemo(() => getSpotPriceHandler(sdk), [sdk])
  const getSpotPrices = useMemo(() => getSpotPricesHandler(sdk), [sdk])

  // PORTFOLIO

  const getUserPortfolio = useMemo(() => getUserPortfolioHandler(sdk), [sdk])

  // PROTOCOLS & ORDERS
  const getLendingPool = useMemo(() => getLendingPoolHandler(sdk), [sdk])
  const getLendingPoolInfo = useMemo(() => getLendingPoolInfoHandler(sdk), [sdk])
  const buildOrder = useMemo(() => buildOrderHandler(sdk), [sdk])

  const memo = useMemo(
    () => ({
      getCurrentUser,
      getWalletAddress,
      getChainInfo,
      getTargetChainInfo,
      getChain,
      getTokenBySymbol,
      getTokenTotalSupply,
      getSwapQuote,
      getSpotPrice,
      getSpotPrices,
      getUserPortfolio,
      getLendingPool,
      getLendingPoolInfo,
      buildOrder,
    }),
    [
      getCurrentUser,
      getWalletAddress,
      getChainInfo,
      getTargetChainInfo,
      getChain,
      getTokenBySymbol,
      getTokenTotalSupply,
      getSwapQuote,
      getSpotPrice,
      getSpotPrices,
      getUserPortfolio,
      getLendingPool,
      getLendingPoolInfo,
      buildOrder,
    ],
  )

  return memo
}

export type SdkClient = ReturnType<typeof useSDK>
