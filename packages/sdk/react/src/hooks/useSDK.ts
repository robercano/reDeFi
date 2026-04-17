import { makeAdminSDK, makeSDK } from '@thesolidchain/sdk-client'
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

type UseSdk = {
  walletAddress?: string
  chainId?: number
  clientId?: string
}

export const useSDK = (params: UseSdk) => {
  const { apiURL, apiKey } = useSDKContext()
  const sdk = useMemo(() => {
    if (params.clientId) {
      return makeAdminSDK({ apiURL, apiKey, clientId: params.clientId })
    }
    return makeSDK({ apiURL, apiKey })
  }, [apiURL, apiKey, params.clientId])

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

  // SWAPS
  const getSwapQuote = useMemo(() => getSwapQuoteHandler(sdk), [sdk])

  // ORACLES

  const getSpotPrice = useMemo(() => getSpotPriceHandler(sdk), [sdk])
  const getSpotPrices = useMemo(() => getSpotPricesHandler(sdk), [sdk])

  const memo = useMemo(
    () => ({
      getCurrentUser,
      getWalletAddress,
      getChainInfo,
      getTargetChainInfo,
      getChain,
      getTokenBySymbol,
      getSwapQuote,
      getSpotPrice,
      getSpotPrices,
    }),
    [
      getCurrentUser,
      getWalletAddress,
      getChainInfo,
      getTargetChainInfo,
      getChain,
      getTokenBySymbol,
      getSwapQuote,
      getSpotPrice,
      getSpotPrices,
    ],
  )

  return memo
}

export type SdkClient = ReturnType<typeof useSDK>
