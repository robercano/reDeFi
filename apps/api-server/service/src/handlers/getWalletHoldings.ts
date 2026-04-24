import { z } from 'zod'
import { isUser, IUser } from '@thesolidchain/sdk-common'
import { publicProcedure } from '../SDKTRPC'

export const getWalletHoldings = publicProcedure
  .input(
    z.object({
      user: z.custom<IUser>(isUser),
    }),
  )
  .query(async (opts) => {
    return await opts.ctx.portfolioManager.getWalletHoldings({ user: opts.input.user })
  })
