/**
 * @format
 */

module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: [
    '__snapshots__',
    '__mocks__',
    '<rootDir>/node_modules/',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|react-navigation|@react-navigation)',
  ],
};
