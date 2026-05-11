import { describe, it, expect } from 'vitest'
import { sdkAppRouter } from '../src/SDKAppRouter'

describe('SDKAppRouter', () => {
  it('should be a valid tRPC router', () => {
    expect(sdkAppRouter._def.router).toBe(true)
    expect(sdkAppRouter._def.procedures).toBeDefined()
  })
})
