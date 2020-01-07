/**
 * @format
 * @flow
 */

import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const FONT_SIZE_100 = 240;
const FONT_SIZE_100_DISPLAY_HEIGHT = 1242;

const defaults = {
  outerView: {
    flex: 1,
  },
  infoButton: {
    padding: 8,
    position: 'absolute',
    right: 24,
    top: 48,
    zIndex: 1,
  },
  infoIcon: {
    height: 32,
    width: 32,
  },
  innerView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  clickerCount: {
    fontFamily: 'WorkSans-Thin',
    fontSize: RFValue(FONT_SIZE_100, FONT_SIZE_100_DISPLAY_HEIGHT),
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    width: '100%',
  },
  buttonInner: {
    borderColor: 'black',
    borderWidth: 0.5,
    color: 'black',
    fontFamily: 'WorkSans-Thin',
    fontSize: 24,
    padding: 8,
    textAlign: 'center',
    width: '100%',
  },
};

const contrast = {
  ...defaults,
  outerView: {
    ...defaults.outerView,
    backgroundColor: 'black',
  },
  clickerCount: {
    ...defaults.clickerCount,
    color: 'white',
  },
  buttonInner: {
    ...defaults.buttonInner,
    backgroundColor: 'black',
    borderColor: 'white',
    color: 'white',
  },
};

const stylesDefaults = StyleSheet.create(defaults);

const stylesContrast = StyleSheet.create(contrast);

export default function(useContrast: boolean) {
  return useContrast ? stylesContrast : stylesDefaults;
}
