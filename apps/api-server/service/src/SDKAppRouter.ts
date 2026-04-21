import { router } from './SDKTRPC'

import { buildOrder } from './handlers/buildOrder'
import { getLendingPool } from './handlers/getLendingPool'
import { getLendingPoolInfo } from './handlers/getLendingPoolInfo'
import { getPosition } from './handlers/getPosition'
import { getSpotPrice } from './handlers/getSpotPrice'
import { getSpotPrices } from './handlers/getSpotPrices'
import { getSwapDataExactInput } from './handlers/getSwapData'
import { getSwapQuoteExactInput } from './handlers/getSwapQuote'
import { getTokenByAddress } from './handlers/getTokenByAddress'
import { getTokenByName } from './handlers/getTokenByName'
import { getTokenBySymbol } from './handlers/getTokenBySymbol'
import { getTokenTotalSupply } from './handlers/getTokenTotalSupply'
import { intentSwapsCancelOrder } from './handlers/intentSwapsCancelOrder'
import { intentSwapsCheckOrder } from './handlers/intentSwapsCheckOrder'
import { intentSwapsGetSellOrderQuote } from './handlers/intentSwapsGetSellOrderQuote'
import { intentSwapsSendOrder } from './handlers/intentSwapsSendOrder'
import { pingHandler } from './handlers/pingHandler'

/**
 * Server
 */
export const sdkAppRouter = router({
  debug: {
    ping: pingHandler,
  },
  protocols: {
    getPosition: getPosition,
    getLendingPool: getLendingPool,
    getLendingPoolInfo: getLendingPoolInfo,
  },
  tokens: {
    getTokenBySymbol: getTokenBySymbol,
    getTokenByName: getTokenByName,
    getTokenByAddress: getTokenByAddress,
    getTokenTotalSupply: getTokenTotalSupply,
  },
  orders: {
    buildOrder: buildOrder,
  },
  intentSwaps: {
    getSellOrderQuote: intentSwapsGetSellOrderQuote,
    sendOrder: intentSwapsSendOrder,
    cancelOrder: intentSwapsCancelOrder,
    checkOrder: intentSwapsCheckOrder,
  },
  swaps: {
    getSwapDataExactInput: getSwapDataExactInput,
    getSwapQuoteExactInput: getSwapQuoteExactInput,
  },
  oracle: {
    getSpotPrice: getSpotPrice,
    getSpotPrices: getSpotPrices,
  },
})

export type SDKAppRouter = typeof sdkAppRouter
