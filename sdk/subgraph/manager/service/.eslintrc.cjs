/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['jest.config.js', 'generated'],
  extends: ['@thesolidchain/eslint-config/library.cjs'],
}
