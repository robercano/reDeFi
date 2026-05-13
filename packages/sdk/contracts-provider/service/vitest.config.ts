import { defineConfig, mergeConfig } from 'vitest/config'
import { baseConfig } from '@thesolidchain/config-vitest/vitest.base'

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      coverage: {
        exclude: ['src/generated/**'],
      },
    },
  }),
)
