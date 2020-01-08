/**
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { StateProvider } from './store';
import Home from './components/screens/Home';
import Info from './components/screens/Info';

const AppNavigator = createStackNavigator(
  {
    Home,
    Info,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <StateProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </StateProvider>
  );
};
