const { compilerOptions } = require('./tsconfig.test')
const sharedConfig = require('@thesolidchain/config-jest/jest.base')

require('@dotenvx/dotenvx').config({ path: ['../../.env', '../.env'], override: true })

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...sharedConfig(compilerOptions),
  roots: ['<rootDir>/src', '<rootDir>/e2e'],
}
