/**
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import useStyles from './AppStyles';

export default function(): React$Node {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [count, setCount] = useState(0);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <>
      <StatusBar barStyle={highContrast ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={useStyles(highContrast).outerView}>
        <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
          <View style={useStyles(highContrast).innerView}>
            <Text style={useStyles(highContrast).clickerCount}>{count}</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          style={useStyles(highContrast).button}
          onPress={() => setCount(0)}>
          <Text style={useStyles(highContrast).buttonInner}>Reset counter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={useStyles(highContrast).button}
          onPress={() => setHighContrast(!highContrast)}>
          <Text style={useStyles(highContrast).buttonInner}>Switch contrast</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
