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

  const incrementCounter = () => setCount(count + 1);
  const resetCounter = () => setCount(0);
  const switchContrast = () => setHighContrast(!highContrast);

  const styles = useStyles(highContrast);

  return (
    <>
      <StatusBar barStyle={highContrast ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={styles.outerView}>
        <TouchableWithoutFeedback
          accessible={true}
          accessibilityLabel="Increment counter"
          onPress={incrementCounter}>
          <View style={styles.innerView}>
            <Text style={styles.clickerCount} testID="counter">
              {count}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Reset counter"
          style={styles.button}
          onPress={resetCounter}>
          <Text style={styles.buttonInner}>Reset counter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Switch contrast"
          style={styles.button}
          onPress={switchContrast}>
          <Text style={styles.buttonInner}>Switch contrast</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
