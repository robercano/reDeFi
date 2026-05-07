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
    },
    passWithNoTests: true,
  },
});
