import { z } from 'zod'
import { isUser, IUser, UserPortfolio, FiatCurrency, FiatCurrencyAmount } from '@thesolidchain/sdk-common'
import { publicProcedure } from '../SDKTRPC'
import { fetchWalletHoldings } from './portfolioUtils'

export const getUserPortfolio = publicProcedure
  .input(
    z.object({
      user: z.custom<IUser>(isUser),
    }),
  )
  .query(async (opts) => {
    const walletHoldings = await fetchWalletHoldings(opts.ctx, opts.input.user)
    
    // Sum fiat value
    let totalFiatValue = FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '0' })
    for (const holding of walletHoldings) {
        if (totalFiatValue.fiat === holding.fiatValue.fiat) {
            totalFiatValue = totalFiatValue.add(holding.fiatValue) as FiatCurrencyAmount
        }
    }

    return UserPortfolio.createFrom({
        user: opts.input.user,
        walletHoldings,
        totalFiatValue
    })
  })
