/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@thesolidchain/eslint-config/library.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  ignorePatterns: [
    'vitest.config.ts',
    'vitest.config.js',
    'vitest.config.d.ts',
    'dist/',
    'coverage/',
    '.eslintrc.cjs',
  ],
}
