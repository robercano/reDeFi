import { describe, expect, it } from 'vitest'
import { SDKError } from '../src/common/implementation/SDKError'
import { SDKErrorType } from '../src/common/enums/SDKErrorType'

describe('SDKError', () => {
  it('should create an SDKError instance', () => {
    const error = SDKError.createFrom({
      type: SDKErrorType.Core,
      reason: 'Missing parameter',
      message: 'Parameter X is required',
    })

    expect(error).toBeInstanceOf(Error)
    expect(error.type).toBe(SDKErrorType.Core)
    expect(error.reason).toBe('Missing parameter')
    expect(error.message).toBe('Parameter X is required')
  })
})
