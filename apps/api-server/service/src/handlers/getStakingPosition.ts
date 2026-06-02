import { isStakingPositionId } from '@thesolidchain/sdk-common'
import { publicProcedure } from '../SDKTRPC'
import { z } from 'zod'

export const getStakingPosition = publicProcedure.input(z.any()).query(async (opts) => {
  if (!isStakingPositionId(opts.input)) {
    throw new Error('Invalid staking position id')
  }

  return opts.ctx.protocolManager.stake.getStakingPosition(opts.input)
})
