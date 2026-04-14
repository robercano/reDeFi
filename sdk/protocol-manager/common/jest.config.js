const { compilerOptions } = require('./tsconfig.test')
const sharedConfig = require('@thesolidchain/jest-config/jest.base')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...sharedConfig(compilerOptions),
  silent: false,
}
