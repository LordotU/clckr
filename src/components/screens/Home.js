/**
 * @format
 * @flow
 */

import React, { useContext, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { context } from '../../store';
import { switchContrast as setHighContrast } from '../../store/actions';

const InfoIconDark = require('../../../assets/images/icon-info-dark.png');
const InfoIconLight = require('../../../assets/images/icon-info-light.png');

export default function({ navigation, styles }): React$Node {
  const [count, setCount] = useState(0);

  const {
    state: { highContrast },
    dispatch,
  } = useContext(context);

  const incrementCounter = () => setCount(count + 1);
  const resetCounter = () => setCount(0);
  const switchContrast = () => dispatch(setHighContrast(!highContrast));

  return (
    <>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Show info"
        style={styles.infoButton}
        onPress={() => navigation.navigate('Info')}>
        <Image
          source={highContrast ? InfoIconLight : InfoIconDark}
          style={styles.infoIcon}
        />
      </TouchableOpacity>

      <TouchableWithoutFeedback
        accessible={true}
        accessibilityLabel="Increment counter"
        onPress={incrementCounter}>
        <View style={styles.innerView}>
          <Text style={styles.clickerCount} testID="counterText">
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
    </>
  );
}
