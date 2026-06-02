import { router } from './SDKTRPC'
import { buildOrder } from './handlers/buildOrder'
import { getWalletHoldings } from './handlers/getWalletHoldings'
import { getUserPortfolio } from './handlers/getUserPortfolio'
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
import { getYieldPoolInfo } from './handlers/getYieldPoolInfo'
import { getYieldPosition } from './handlers/getYieldPosition'
import { getStakingPoolInfo } from './handlers/getStakingPoolInfo'
import { getStakingPosition } from './handlers/getStakingPosition'
import { simulatorRouter } from './routers/simulatorRouter'

/**
 * @name sdkAppRouter
 * @description The main tRPC router that exposes all the backend SDK services.
 *              It maps high-level feature sets (protocols, tokens, swaps) to their specific backend handlers.
 */
export const sdkAppRouter = router({
  debug: {
    ping: pingHandler,
  },
  protocols: {
    getPosition: getPosition,
    getLendingPool: getLendingPool,
    getLendingPoolInfo: getLendingPoolInfo,
    getYieldPoolInfo: getYieldPoolInfo,
    getYieldPosition: getYieldPosition,
    getStakingPoolInfo: getStakingPoolInfo,
    getStakingPosition: getStakingPosition,
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
  portfolio: {
    getWalletHoldings: getWalletHoldings,
    getUserPortfolio: getUserPortfolio,
  },
  simulator: simulatorRouter,
})

export type SDKAppRouter = typeof sdkAppRouter
