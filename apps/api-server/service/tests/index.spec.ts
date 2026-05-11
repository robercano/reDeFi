import { describe, it, expect } from 'vitest'
import { sdkAppRouter } from '../src/index'

describe('index', () => {
  it('should export sdkAppRouter', () => {
    expect(sdkAppRouter).toBeDefined()
  })
})
