// jest.config.ts

module.exports = {
  preset: 'ts-jest', // Use ts-jest preset for TypeScript
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.(test|spec).ts'], // Define test path patterns
  coverageDirectory: 'coverage', // Directory for coverage reports
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Collect coverage from all TypeScript files
    '!src/**/*.d.ts', // Exclude declaration files
  ],
  setupFiles: ['<rootDir>/setup.ts'], // Path for module setup
};