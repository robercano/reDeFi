import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignore: ['**/*.test.ts', '**/*.spec.ts', '**/client.ts', '.eslintrc.cjs', './dist/**/*'],
  ignoreDependencies: ['@thesolidchain/*'],
}

export default config
