// jest.config.js
const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  automock: false,
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  rootDir: './',
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['node_modules'],
  coverageDirectory: './coverage',
  moduleNameMapper: {
    "^@amq": '<rootDir>/main.d.ts',
    '^@lib/(.*)': '<rootDir>/src/lib/$1',
    '^@config/(.*)': '<rootDir>/src/config/$1',
    '^@styles/(.*)': '<rootDir>/src/styles/$1',
    '^@common/(.*)': '<rootDir>/src/common/$1',
    '^@constants/(.*)': '<rootDir>/src/constants/$1',
    '^@constants': '<rootDir>/src/constants',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@icons/(.*)': '<rootDir>/src/components/icons/$1',
    '^@icons': '<rootDir>/src/components/icons',
    '^@atoms/(.*)': '<rootDir>/src/components/atoms/$1',
    '^@molecules/(.*)': '<rootDir>/src/components/molecules/$1',
    '^@organisms/(.*)': '<rootDir>/src/components/organisms/$1',
    '^@functional/(.*)': '<rootDir>/src/components/functional/$1',
    '^@middlewares/(.*)': '<rootDir>/src/middlewares/$1',
    '^@modules/(.*)': '<rootDir>/src/modules/$1',
    '^@pages/(.*)': '<rootDir>/src/pages/$1',
    '^@factories/(.*)': '<rootDir>/src/factories/$1',
    '^@models/(.*)': '<rootDir>/src/models/$1',
    '^@services/(.*)': '<rootDir>/src/services/$1',
    '^uuid$': require.resolve('uuid'),
    '^@stitches-definitions': '<rootDir>/src/styles/stitches.config.ts',
  },
  preset: 'ts-jest/presets/js-with-babel',
  transform: {
    // enable transformation of TypeScript files
    '^.+\\.[jt]sx?$': 'babel-jest',
    // enable transformation of ECMAScript Modules
    '^.+\\.mjs$': 'babel-jest',
  },
};

module.exports = createJestConfig(customJestConfig);
