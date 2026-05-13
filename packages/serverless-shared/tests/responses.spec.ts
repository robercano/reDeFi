import { describe, it, expect } from 'vitest'
import {
  createOkBody,
  createErrorBody,
  createHeaders,
  ResponseOk,
  ResponseBadRequest,
  ResponseNotFound,
  ResponseInternalServerError,
  ResponseForbidden,
} from '../src/responses'

describe('responses', () => {
  it('should createOkBody', () => {
    expect(createOkBody({ a: 1 })).toBe('{"a":1}')
  })

  it('should createErrorBody', () => {
    expect(createErrorBody('error')).toBe('{"message":"error"}')
  })

  it('should createHeaders', () => {
    expect(createHeaders()).toEqual({
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    })
  })

  it('should ResponseOk', () => {
    expect(ResponseOk({ body: { a: 1 } })).toEqual({
      statusCode: 200,
      headers: createHeaders(),
      body: '{"a":1}',
    })
  })

  it('should ResponseBadRequest with string', () => {
    expect(ResponseBadRequest('bad')).toEqual({
      statusCode: 400,
      headers: createHeaders(),
      body: '{"message":"bad"}',
    })
  })

  it('should ResponseBadRequest with object', () => {
    expect(ResponseBadRequest({ custom: 'error' })).toEqual({
      statusCode: 400,
      headers: createHeaders(),
      body: '{"custom":"error"}',
    })
  })

  it('should ResponseNotFound', () => {
    expect(ResponseNotFound()).toEqual({
      statusCode: 404,
      headers: createHeaders(),
    })
  })

  it('should ResponseInternalServerError', () => {
    expect(ResponseInternalServerError()).toEqual({
      statusCode: 500,
      headers: createHeaders(),
      body: '{"message":"Internal server error"}',
    })
    expect(ResponseInternalServerError('custom')).toEqual({
      statusCode: 500,
      headers: createHeaders(),
      body: '{"message":"custom"}',
    })
  })

  it('should ResponseForbidden', () => {
    expect(ResponseForbidden()).toEqual({
      statusCode: 403,
      headers: createHeaders(),
      body: '{"message":"Forbidden"}',
    })
    expect(ResponseForbidden('custom')).toEqual({
      statusCode: 403,
      headers: createHeaders(),
      body: '{"message":"custom"}',
    })
  })
})
