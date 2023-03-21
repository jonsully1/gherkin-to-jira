module.exports = {
  // eslint-disable-next-line global-require
  ...require('../../../../jestBaseConfig')(),
  setupFilesAfterEnv: ['<rootDir>__tests__/support/jest/setup/unit.js'],
  testEnvironment: 'node',
  testTimeout: 500,
  testMatch: ['<rootDir>__tests__/unit/**/**.unit.spec.js'],
};
