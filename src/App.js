/**
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from 'react-native-splash-screen';

import { StateProvider } from './store';
import Home from './components/screens/Home';
import Info from './components/screens/Info';
import insideSafeAreaView from './components/HOC/insideSafeAreaView';
import withStyles from './components/HOC/withStyles';

const AppNavigator = createStackNavigator(
  {
    Home: withStyles(insideSafeAreaView(Home)),
    Info: withStyles(insideSafeAreaView(Info)),
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
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <StateProvider>
      <SafeAreaProvider
        initialSafeAreaInsets={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <App />
      </SafeAreaProvider>
    </StateProvider>
  );
};
