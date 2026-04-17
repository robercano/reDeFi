import type {
  APIGatewayRequestAuthorizerEventV2,
  APIGatewaySimpleAuthorizerResult,
} from 'aws-lambda'

export const handler = async (
  event: APIGatewayRequestAuthorizerEventV2,
): Promise<APIGatewaySimpleAuthorizerResult> => {
  const authHeader = event.headers?.authorization || event.headers?.['x-api-key']
  const validKey = process.env.SDK_API_KEY

  if (!validKey) {
    console.error('SDK_API_KEY environment variable is not set.')
    return { isAuthorized: false }
  }

  // Strip "Bearer " prefix if present
  let parsedKey = authHeader
  if (authHeader?.toLowerCase().startsWith('bearer ')) {
    parsedKey = authHeader.substring(7)
  }

  // In the future this will query Redis or DynamoDB to dynamically validate
  const isAuthorized = parsedKey === validKey

  if (!isAuthorized) {
    console.warn('Unauthorized request key attempted:', parsedKey)
  }

  return {
    isAuthorized,
  }
}
