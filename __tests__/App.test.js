/**
 * @format
 */

import React from 'react';
import { cleanup, render } from 'react-native-testing-library';
import App from '../src/App';

afterEach(cleanup);

it('renders correctly', () => {
  const snapshot = render(<App />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
