import { isLendingPoolId, isLendingPositionId, isTokenAmount, isYieldPoolId, isYieldPositionId } from '@thesolidchain/sdk-common'
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
    simulateWithdraw: publicProcedure.input(z.any()).query(async (opts) => {
      const { positionId, amount } = opts.input
      if (!isLendingPositionId(positionId) || !isTokenAmount(amount)) {
        throw new Error('Invalid input for simulateWithdraw')
      }
      return opts.ctx.simulatorManager.lend.simulateWithdraw({ positionId, amount })
    }),
    simulateRepay: publicProcedure.input(z.any()).query(async (opts) => {
      const { positionId, amount } = opts.input
      if (!isLendingPositionId(positionId) || !isTokenAmount(amount)) {
        throw new Error('Invalid input for simulateRepay')
      }
      return opts.ctx.simulatorManager.lend.simulateRepay({ positionId, amount })
    }),
  }),
  swap: router({
    simulateSwap: publicProcedure.input(z.any()).query(async (opts) => {
      const params = opts.input
      return opts.ctx.simulatorManager.swap.simulateSwap(params)
    }),
  }),
  yield: router({
    simulateDeposit: publicProcedure.input(z.any()).query(async (opts) => {
      const { poolId, amount } = opts.input
      if (!isYieldPoolId(poolId) || !isTokenAmount(amount)) {
        throw new Error('Invalid input for simulateDeposit')
      }
      return opts.ctx.simulatorManager.yield.simulateDeposit({ poolId, amount })
    }),
    simulateWithdraw: publicProcedure.input(z.any()).query(async (opts) => {
      const { positionId, amount } = opts.input
      if (!isYieldPositionId(positionId) || !isTokenAmount(amount)) {
        throw new Error('Invalid input for simulateWithdraw')
      }
      return opts.ctx.simulatorManager.yield.simulateWithdraw({ positionId, amount })
    }),
  }),
})
