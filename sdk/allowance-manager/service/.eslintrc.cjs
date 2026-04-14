/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['jest.config.js'],
  extends: ['@thesolidchain/eslint-config/library.cjs'],
  parser: '@typescript-eslint/parser',
}
