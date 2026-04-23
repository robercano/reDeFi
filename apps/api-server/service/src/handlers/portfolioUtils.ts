import { Holding, IUser, CommonTokenSymbols, FiatCurrency, FiatCurrencyAmount } from '@thesolidchain/sdk-common'
import { SDKAppContext } from '../context/SDKContext'

export async function fetchWalletHoldings(ctx: SDKAppContext, user: IUser): Promise<Holding[]> {
  const holdings: Holding[] = []
  
  for (const symbol of Object.values(CommonTokenSymbols)) {
     try {
         const balance = await ctx.tokensManager.getTokenBalanceBySymbol({
             chainInfo: user.chainInfo,
             symbol,
             walletAddress: user.wallet.address,
         })

         if (balance && !balance.isZero()) {
             let fiatValue = FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '0' })
             try {
                 const spotPrice = await ctx.oracleManager.getSpotPrice({
                     baseToken: balance.token
                 })
                 fiatValue = balance.multiply(spotPrice.price) as FiatCurrencyAmount
             } catch {
                 // Ignore pricing error for single token, it might just not exist in Oracle
             }
             
             holdings.push(Holding.createFrom({
                 amount: balance,
                 fiatValue
             }))
         }
     } catch {
         // Token might not exist on this chain, just skip
     }
  }
  
  return holdings
}
