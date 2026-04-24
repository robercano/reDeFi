import { Holding, IUser, CommonTokenSymbols, FiatCurrency, FiatCurrencyAmount } from '@thesolidchain/sdk-common'
import { SDKAppContext } from '../context/SDKContext'

export async function fetchWalletHoldings(ctx: SDKAppContext, user: IUser): Promise<Holding[]> {
  const holdings: Holding[] = []
  
  for (const symbol of Object.values(CommonTokenSymbols)) {
     try {
         console.log(`[Portfolio] Fetching balance for ${symbol}...`)
         const balance = await ctx.tokensManager.getTokenBalanceBySymbol({
             chainInfo: user.chainInfo,
             symbol,
             walletAddress: user.wallet.address,
         })

         if (balance) {
             console.log(`[Portfolio] Balance for ${symbol}: ${balance.amount}`)
         }
         
         if (balance && !balance.isZero()) {
             let fiatValue = FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '0' })
             try {
                 const spotPrice = await ctx.oracleManager.getSpotPrice({
                     baseToken: balance.token
                 })
                 fiatValue = balance.multiply(spotPrice.price) as FiatCurrencyAmount
             } catch (pricingError) {
                 console.warn(`[Portfolio] Failed to fetch spot price for ${symbol}:`, pricingError)
                 // Ignore pricing error for single token, it might just not exist in Oracle
             }
             
             holdings.push(Holding.createFrom({
                 amount: balance,
                 fiatValue
             }))
         }
     } catch (err) {
         console.warn(`[Portfolio] Failed to fetch token balance for ${symbol}:`, err)
         // Token might not exist on this chain, just skip
     }
  }
  
  console.log(`[Portfolio] Total holdings found: ${holdings.length}`)
  return holdings
}
