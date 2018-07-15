module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,mjs}'],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  testPathIgnorePatterns: ['/node_modules', '<rootDir>/db'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
};
