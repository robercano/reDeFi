/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['jest.config.js', 'tests'],
  extends: ['@thesolidchain/eslint-config/function.cjs'],
  parser: '@typescript-eslint/parser',
}
