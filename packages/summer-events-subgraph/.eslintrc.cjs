/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['src/types/graphql/**'],
  extends: ['@thesolidchain/eslint-config/library.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
}
