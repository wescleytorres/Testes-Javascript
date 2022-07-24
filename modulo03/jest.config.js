module.exports = {
  // verbose: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/package.json'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.js',
    '<rootDir>/src/pages/**/*.js',
    '<rootDir>/src/hooks/**/*.js',
    '<rootDir>/src/store/**/*.js',
  ],
};
