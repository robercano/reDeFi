import { z } from 'zod'
import { isUser, IUser } from '@thesolidchain/sdk-common'
import { publicProcedure } from '../SDKTRPC'
import { fetchWalletHoldings } from './portfolioUtils'

export const getWalletHoldings = publicProcedure
  .input(
    z.object({
      user: z.custom<IUser>(isUser),
    }),
  )
  .query(async (opts) => {
    return fetchWalletHoldings(opts.ctx, opts.input.user)
  })
