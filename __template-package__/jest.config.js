const { compilerOptions } = require('./tsconfig.test')
const sharedConfig = require('@thesolidchain/config-jest/jest.base')
require('dotenv').config({ path: '../.env' })

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...sharedConfig(compilerOptions),
  roots: ['<rootDir>/src', '<rootDir>/tests', '<rootDir>/e2e'],
}
