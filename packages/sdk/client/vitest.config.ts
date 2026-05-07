import { defineConfig, mergeConfig } from 'vitest/config'
import { baseConfig } from '@thesolidchain/config-vitest/vitest.base'

export default mergeConfig(baseConfig, defineConfig({
  test: {
    coverage: {
      exclude: [
        'scripts/**',
        'src/index.ts',
        'src/reexports.ts'
      ]
    }
  }
}))
