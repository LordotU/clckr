/**
 * @format
 */

module.exports = {
  preset: 'react-native',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: [
    '__snapshots__',
    '__mocks__',
    '<rootDir>/node_modules/',
  ],
};
