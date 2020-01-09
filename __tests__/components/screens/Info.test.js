/**
 * @format
 */

import React from 'react';
import { cleanup, render } from 'react-native-testing-library';

import Info from '../../../src/components/screens/Info';
import withStyles from '../../../src/components/HOC/withStyles';
import { StateProvider } from '../../../src/store';

const InfoWithStyles = withStyles(Info);

const getInfoScreen = () => (
  <StateProvider>
    <InfoWithStyles />
  </StateProvider>
);

afterEach(cleanup);

it('renders correctly', () => {
  const snapshot = render(getInfoScreen()).toJSON();
  expect(snapshot).toMatchSnapshot();
});
