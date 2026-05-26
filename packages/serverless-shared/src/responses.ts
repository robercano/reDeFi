import type { APIGatewayProxyResultV2 } from 'aws-lambda'
import type { DefaultErrorResponse } from './helper-types'
import { serialize } from './serialize'

/**
 * Serializes an object to JSON, specifically handling BigInt serialization.
 *
 * @param obj - The object to be serialized
 * @returns A JSON string representation of the object
 */
export function createOkBody(obj: Record<string, unknown>): string | undefined {
  return serialize(obj)
}

export function createErrorBody(message: string): string | undefined {
  const errorObject: DefaultErrorResponse = { message }
  return serialize(errorObject)
}

export function createHeaders(): Record<string, string | number | boolean> {
  return {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
  }
}

/**
 * Constructs a 200 OK API Gateway Proxy Result.
 *
 * @param params.body - The response body object
 * @returns An `APIGatewayProxyResultV2` object with 200 status code
 */
// eslint-disable-next-line
export function ResponseOk<T extends Record<string, any>>({
  body,
}: {
  body: T
}): APIGatewayProxyResultV2 {
  return {
    statusCode: 200,
    headers: createHeaders(),
    body: createOkBody(body),
  }
}

export function ResponseBadRequest(message: string | object): APIGatewayProxyResultV2 {
  return {
    statusCode: 400,
    headers: createHeaders(),
    body: typeof message === 'object' ? serialize(message) : createErrorBody(message),
  }
}

export function ResponseNotFound(): APIGatewayProxyResultV2 {
  return {
    statusCode: 404,
    headers: createHeaders(),
  }
}

export function ResponseInternalServerError(
  message: string = 'Internal server error',
): APIGatewayProxyResultV2 {
  return {
    statusCode: 500,
    headers: createHeaders(),
    body: createErrorBody(message),
  }
}

export function ResponseForbidden(message: string = 'Forbidden'): APIGatewayProxyResultV2 {
  return {
    statusCode: 403,
    headers: createHeaders(),
    body: createErrorBody(message),
  }
}
