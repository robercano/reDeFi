import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['json-summary', 'text'],
      reportsDirectory: './coverage',
    },
    globals: true,
    environment: 'node',
    testTimeout: 30000,
  },
})
