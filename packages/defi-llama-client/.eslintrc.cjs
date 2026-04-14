/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['src/generated/**'],
  extends: ['@thesolidchain/eslint-config/library.cjs'],
  parser: '@typescript-eslint/parser',
}
