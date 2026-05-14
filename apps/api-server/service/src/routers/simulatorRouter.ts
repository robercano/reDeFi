import { isLendingPoolId, isTokenAmount } from '@thesolidchain/sdk-common'
import { publicProcedure, router } from '../SDKTRPC'
import { z } from 'zod'

export const simulatorRouter = router({
  lend: router({
    simulateSupply: publicProcedure.input(z.any()).query(async (opts) => {
      const { poolId, amount } = opts.input
      if (!isLendingPoolId(poolId) || !isTokenAmount(amount)) {
        throw new Error('Invalid input for simulateSupply')
      }
      return opts.ctx.simulatorManager.lend.simulateSupply({ poolId, amount })
    }),
    simulateBorrow: publicProcedure.input(z.any()).query(async (opts) => {
      const { poolId, amount } = opts.input
      if (!isLendingPoolId(poolId) || !isTokenAmount(amount)) {
        throw new Error('Invalid input for simulateBorrow')
      }
      return opts.ctx.simulatorManager.lend.simulateBorrow({ poolId, amount })
    }),
  }),
})
