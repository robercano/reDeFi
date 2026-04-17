const { compilerOptions } = require('./tsconfig.test')
const sharedConfig = require('@thesolidchain/config-jest/jest.base')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...sharedConfig(compilerOptions),
}
