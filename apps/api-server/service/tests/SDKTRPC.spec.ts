import { describe, it, expect } from 'vitest'
import { router, createCallerFactory } from '../src/SDKTRPC'

describe('SDKTRPC', () => {
  it('should export router and createCallerFactory', () => {
    expect(router).toBeDefined()
    expect(createCallerFactory).toBeDefined()
  })
})
