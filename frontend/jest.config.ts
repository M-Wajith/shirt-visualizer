import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Add ts-jest to transform TypeScript files
  },
  testEnvironment: 'jest-environment-jsdom',  // Ensure the environment is set correctly
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',  // Reference to your tsconfig.json file
    },
  },
};

export default config;
