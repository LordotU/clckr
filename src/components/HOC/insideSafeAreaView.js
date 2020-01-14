/* eslint-disable react-hooks/rules-of-hooks */

/**
  @flow
 * @format
 */

import React, { useContext } from 'react';
import { Platform, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { context } from '../../store';

type InjectedProps = {| styles: { outerView: { ...Iterable<any> } } |};

function getBarProps (highContrast) {
  switch (Platform.OS) {
    case 'android':
      return {
        backgroundColor: highContrast ? 'black' : 'white',
        barStyle: highContrast ? 'light-content' : 'dark-content',
      };
    case 'ios':
      return {
        barStyle: highContrast ? 'light-content' : 'dark-content',
      };
    default:
      return {};
  }
}

export default function<Config, Instance>(
  Component: React$AbstractComponent<Config, Instance>,
): React$StatelessFunctionalComponent<{| ...Config, ...InjectedProps |}> {
  return function insideSafeAreaView(props: {| ...Config, ...InjectedProps |}) {
    const {
      state: { highContrast },
    }: { state: { highContrast: boolean } } = useContext(context);

    return (
      <>
        <StatusBar {...getBarProps(highContrast)} />
        <SafeAreaView
          style={props.styles.outerView}
          forceInset={{ top: 'always', bottom: 'always' }}>
          <Component {...props} />
        </SafeAreaView>
      </>
    );
  };
}
