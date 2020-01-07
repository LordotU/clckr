/**
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { cleanup, fireEvent, render } from 'react-native-testing-library';
import App from '../src/App';

afterEach(cleanup);

it('renders correctly', () => {
  const snapshot = render(<App />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

it('counter increment works correctly', () => {
  const view = render(<App />);

  const statusBar = view.getByType(StatusBar);
  expect(statusBar.props.barStyle).toBe('dark-content');

  const counterBtn = view.getByA11yLabel('Increment counter');
  const counterText = view.getByTestId('counter');
  fireEvent.press(counterBtn);
  fireEvent.press(counterBtn);
  expect(counterText.props.children).toBe(2);

  const resetBtn = view.getByA11yLabel('Reset counter');
  fireEvent.press(resetBtn);
  expect(counterText.props.children).toBe(0);

  const contrastBtn = view.getByA11yLabel('Switch contrast');
  fireEvent.press(contrastBtn);
  expect(statusBar.props.barStyle).toBe('light-content');
  fireEvent.press(contrastBtn);
  expect(statusBar.props.barStyle).toBe('dark-content');
});
