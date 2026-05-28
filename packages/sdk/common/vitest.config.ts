import { defineConfig, mergeConfig } from 'vitest/config'
import { baseConfig } from '@thesolidchain/config-vitest/vitest.base'

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      coverage: {
        thresholds: {
          lines: 80,
          functions: 79,
          branches: 80,
          statements: 80,
        },
      },
    },
  }),
)
