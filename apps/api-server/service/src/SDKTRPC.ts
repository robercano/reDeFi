import { SerializationService } from '@thesolidchain/sdk-common'
import { initTRPC } from '@trpc/server'
import { SDKAppContext } from './context/SDKContext'

/**
 * @name t
 * @description The initialized tRPC instance with the required context and SuperJSON transformer
 *              for accurate type preservation across the network boundary.
 */
export const t = initTRPC.context<SDKAppContext>().create({
  transformer: SerializationService.getTransformer(),
})

/**
 * @name router
 * @description Alias to the tRPC router constructor
 */
export const router = t.router

/**
 * @name createCallerFactory
 * @description Alias to the tRPC caller factory creation function
 */
export const createCallerFactory = t.createCallerFactory

/**
 * @name publicProcedure
 * @description Base tRPC procedure with built-in logging and timing middleware.
 *              It injects logging around execution if SDK_LOGGING_ENABLED is true.
 */
export const publicProcedure = t.procedure.use(async (opts) => {
  const { ctx, path } = opts
  const isLoggingEnabled = process.env.SDK_LOGGING_ENABLED === 'true'
  const start = isLoggingEnabled ? performance.now() : 0

  if (isLoggingEnabled) {
    console.log(`[CALL] Procedure: ${path} (${ctx.callKey})`)
  }

  const result = await opts.next()

  if (isLoggingEnabled) {
    try {
      const end = performance.now()
      console.log(
        `[RESULT] Procedure: ${path} (${ctx.callKey}) took ${end - start} milliseconds. Data: ${JSON.stringify((result as { data: unknown })?.data)}`,
      )
    } catch {
      const end = performance.now()
      console.log(
        `[RESULT] Procedure: ${path} (${ctx.callKey}): Cannot serialize data. Took ${end - start} milliseconds.`,
      )
    }
  }

  return result
})
