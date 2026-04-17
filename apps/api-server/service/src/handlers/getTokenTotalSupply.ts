import { IToken, ITokenAmount, TokenDataSchema } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { publicProcedure } from '../SDKTRPC'

export const getTokenTotalSupply = publicProcedure
  .input(
    z.object({
      token: z.any(),
    }),
  )
  .query(async (opts): Promise<ITokenAmount> => {
    const zodReturn = TokenDataSchema.safeParse(opts.input.token)

    if (!zodReturn.success) {
      throw new Error(
        'Invalid token object: ' + zodReturn.error.errors.map((e) => e.message).join(', '),
      )
    }
    return opts.ctx.tokensManager.getTokenTotalSupply({
      token: opts.input.token as IToken,
    })
  })
