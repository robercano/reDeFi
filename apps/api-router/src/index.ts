import { createSDKContext, sdkAppRouter } from '@thesolidchain/api-server'
import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda'

export const baseHandler = awsLambdaRequestHandler({
  router: sdkAppRouter,
  createContext: createSDKContext,
})

export const handler = baseHandler
