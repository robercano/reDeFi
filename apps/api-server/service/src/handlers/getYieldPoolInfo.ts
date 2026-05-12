import { isYieldPoolId } from '@thesolidchain/sdk-common'
import { publicProcedure } from '../SDKTRPC'
import { z } from 'zod'

export const getYieldPoolInfo = publicProcedure.input(z.any()).query(async (opts) => {
  if (!isYieldPoolId(opts.input)) {
    throw new Error('Invalid yield pool id')
  }

  return opts.ctx.protocolManager.yield.getYieldPoolInfo(opts.input)
})
