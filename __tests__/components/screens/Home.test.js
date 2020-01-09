/**
 * @format
 */

import React from 'react';
import { Image } from 'react-native';
import { cleanup, fireEvent, render } from 'react-native-testing-library';

import Home from '../../../src/components/screens/Home';
import withStyles from '../../../src/components/HOC/withStyles';
import { StateProvider } from '../../../src/store';

const HomeWithStyles = withStyles(Home);

const getHomeScreen = () => (
  <StateProvider>
    <HomeWithStyles />
  </StateProvider>
);

afterEach(cleanup);

it('renders correctly', () => {
  const snapshot = render(getHomeScreen()).toJSON();
  expect(snapshot).toMatchSnapshot();
});

it('home screen works correctly', () => {
  const screen = render(getHomeScreen());

  const infoImage = screen.getByType(Image);
  expect(infoImage.props.source.testUri).toMatch('icon-info-dark');

  const counterText = screen.getByTestId('counterText');
  expect(counterText.props.style.color).toBe('black');

  const counterBtn = screen.getByA11yLabel('Increment counter');
  fireEvent.press(counterBtn);
  fireEvent.press(counterBtn);
  expect(counterText.props.children).toBe(2);

  const resetBtn = screen.getByA11yLabel('Reset counter');
  fireEvent.press(resetBtn);
  expect(counterText.props.children).toBe(0);

  const contrastBtn = screen.getByA11yLabel('Switch contrast');
  fireEvent.press(contrastBtn);
  expect(counterText.props.style.color).toBe('white');
  expect(infoImage.props.source.testUri).toMatch('icon-info-light');
  fireEvent.press(contrastBtn);
  expect(counterText.props.style.color).toBe('black');
  expect(infoImage.props.source.testUri).toMatch('icon-info-dark');
});
