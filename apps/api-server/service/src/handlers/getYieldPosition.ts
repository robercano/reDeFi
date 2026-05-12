import { isYieldPositionId } from '@thesolidchain/sdk-common'
import { publicProcedure } from '../SDKTRPC'
import { z } from 'zod'

export const getYieldPosition = publicProcedure.input(z.any()).query(async (opts) => {
  if (!isYieldPositionId(opts.input)) {
    throw new Error('Invalid yield position id')
  }

  return opts.ctx.protocolManager.yield.getYieldPosition(opts.input)
})
