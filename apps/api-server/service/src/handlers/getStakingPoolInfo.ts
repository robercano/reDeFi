import { isStakingPoolId } from '@thesolidchain/sdk-common'
import { publicProcedure } from '../SDKTRPC'
import { z } from 'zod'

export const getStakingPoolInfo = publicProcedure.input(z.any()).query(async (opts) => {
  if (!isStakingPoolId(opts.input)) {
    throw new Error('Invalid staking pool id')
  }

  return opts.ctx.protocolManager.stake.getStakingPoolInfo(opts.input)
})
