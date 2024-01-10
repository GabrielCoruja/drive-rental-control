module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  coveragePathIgnorePatterns: ["<rootDir>/src/tests/mocks/"],
  testRegex: './*\\.test\\.ts$',
  testTimeout: 20000,
  maxWorkers: 1,
};
