/* eslint-disable react-hooks/rules-of-hooks */

/**
  @flow
 * @format
 */

import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { context } from '../../store';

type InjectedProps = {| styles: { outerView: { ...Iterable<any> } } |};

export default function<Config, Instance>(
  Component: React$AbstractComponent<Config, Instance>,
): React$StatelessFunctionalComponent<{| ...Config, ...InjectedProps |}> {
  return function insideSafeAreaView(props: {| ...Config, ...InjectedProps |}) {
    const {
      state: { highContrast },
    }: { state: { highContrast: boolean } } = useContext(context);

    return (
      <>
        <StatusBar barStyle={highContrast ? 'light-content' : 'dark-content'} />
        <SafeAreaView
          style={props.styles.outerView}
          forceInset={{ top: 'always', bottom: 'always' }}>
          <Component {...props} />
        </SafeAreaView>
      </>
    );
  };
}
