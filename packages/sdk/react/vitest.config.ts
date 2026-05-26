import { defineConfig, mergeConfig } from 'vitest/config'
import { baseConfig } from '@thesolidchain/config-vitest/vitest.base'

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      coverage: {
        thresholds: {
          lines: 80,
          functions: 80,
          branches: 80,
          statements: 80,
        },
      },
    },
  }),
)
