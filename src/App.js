/**
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import useStyles from './AppStyles';

export default function(): React$Node {
  const [count, setCount] = useState(0);
  const [highContrast, setHighContrast] = useState(false);

  return (
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
  );
}
