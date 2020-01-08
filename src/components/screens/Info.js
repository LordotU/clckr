/**
 * @format
 * @flow
 */

import React, { useContext } from 'react';
import {
  Image,
  Linking,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { context } from '../../store';
import useStyles from '../../Styles';
import { version as appVersion } from '../../../package.json';

const BackIconDark = require('../../../assets/images/icon-back-dark.png');
const BackIconLight = require('../../../assets/images/icon-back-light.png');

const INFO_URL = 'https://oleg.levsh.in';

export default ({ navigation }) => {
  const {
    state: { highContrast },
  } = useContext(context);

  const goBack = () => navigation.goBack();
  const openUrl = () => Linking.openURL(INFO_URL);

  const styles = useStyles(highContrast);

  return (
    <>
      <StatusBar barStyle={highContrast ? 'light-content' : 'dark-content'} />
      <SafeAreaView
        style={styles.outerView}
        forceInset={{ top: 'always', bottom: 'always' }}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Show home"
          style={styles.infoButton}
          onPress={goBack}>
          <Image
            source={highContrast ? BackIconLight : BackIconDark}
            style={styles.infoIcon}
          />
        </TouchableOpacity>
        <View style={styles.info}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={`Open ${INFO_URL}`}
            style={styles.outerInfoLink}
            onPress={openUrl}>
            <Text style={styles.infoLink}>{INFO_URL}</Text>
          </TouchableOpacity>
          <Text style={styles.infoVersion}>v{appVersion}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
