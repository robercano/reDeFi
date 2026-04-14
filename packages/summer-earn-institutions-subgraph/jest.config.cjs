const { compilerOptions } = require('./tsconfig.test')
const sharedConfig = require('@thesolidchain/jest-config/jest.base')

require('dotenv').config({ path: '../../.env' })

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...sharedConfig(compilerOptions),
  moduleNameMapper: {
    '^@thesolidchain/serverless-shared$': '<rootDir>/../../packages/serverless-shared/src/index.ts',
    '^@thesolidchain/(.*)$': '<rootDir>/../../packages/$1/src/index.ts',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules', 'node_modules/(?!(@thesolidchain)/)'],
}


