/* eslint-disable react-hooks/rules-of-hooks */

/**
  @flow
 * @format
 */

import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { context } from '../../store';

export default function(Component) {
  return function insideSafeAreaView(props) {
    const {
      state: { highContrast },
    } = useContext(context);

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
