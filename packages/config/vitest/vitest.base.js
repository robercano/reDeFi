const { defineConfig } = require('vitest/config');
const tsconfigPaths = require('vite-tsconfig-paths');

exports.baseConfig = defineConfig({
  plugins: [tsconfigPaths.default ? tsconfigPaths.default() : tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json-summary', 'lcov'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    passWithNoTests: true,
  },
});
