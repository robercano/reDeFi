const { pathsToModuleNameMapper } = require('ts-jest')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  silent: true,
  maxWorkers: 1,
  testTimeout: 10000,
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-expect-message'],
  testPathIgnorePatterns: ['dist', 'node_modules'],
  moduleNameMapper: pathsToModuleNameMapper({
    '@thesolidchain/serverless-shared': ['<rootDir>/../../packages/serverless-shared/src/index.ts'],
    '@thesolidchain/serverless-shared/*': ['<rootDir>/../../packages/serverless-shared/src/*'],
    '@thesolidchain/triggers-shared': ['<rootDir>/../../packages/triggers-shared/src/index.ts'],
  }),
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
}
