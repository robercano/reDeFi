import { z } from 'zod'
import { isUser, IUser } from '@thesolidchain/sdk-common'
import { publicProcedure } from '../SDKTRPC'

export const getUserPortfolio = publicProcedure
  .input(
    z.object({
      user: z.custom<IUser>(isUser),
    }),
  )
  .query(async (opts) => {
    return await opts.ctx.portfolioManager.getUserPortfolio({ user: opts.input.user })
  })
