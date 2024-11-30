module.exports = {
  // The test environment that will be used for testing
  testEnvironment: "node",
  preset: 'ts-jest',
  bail: false,
  maxWorkers: 1,
  transformIgnorePatterns: ['^.+\\.js$'],
  //testMatch: ['**/eth/v4/simple_swap.v4.test.ts','**/eth/v5/swap_on_zero_v4.test.ts','**/eth/v5/multi_swap.test.ts'],
};
