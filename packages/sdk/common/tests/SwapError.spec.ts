import { describe, expect, it } from 'vitest'
import { SwapError } from '../src/swap/implementation/SwapError'
import { SDKErrorType } from '../src/common/enums/SDKErrorType'
import { SwapErrorType } from '../src/swap/enums/SwapErrorType'

describe('SwapError', () => {
  it('should create a SwapError instance', () => {
    const error = SwapError.createFrom({
      message: 'Insufficient liquidity',
      subtype: SwapErrorType.InsufficientLiquidity,
      apiQuery: 'https://api.1inch.io/v5.0/1/swap',
      statusCode: 400
    })

    expect(error.type).toBe(SDKErrorType.SwapError)
    expect(error.message).toBe('Insufficient liquidity')
    expect(error.subtype).toBe(SwapErrorType.InsufficientLiquidity)
    expect(error.apiQuery).toBe('https://api.1inch.io/v5.0/1/swap')
    expect(error.statusCode).toBe(400)
  })
})
