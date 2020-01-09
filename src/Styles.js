/**
 * @format
 * @flow
 */

import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const FONT_SIZE_100_DISPLAY_HEIGHT = 1242;

const defaults = {
  outerView: {
    flex: 1,
  },
  infoButton: {
    padding: 8,
    position: 'absolute',
    right: 24,
    top: 40,
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
    color: 'black',
    fontFamily: 'WorkSans-Thin',
    fontSize: RFValue(240, FONT_SIZE_100_DISPLAY_HEIGHT),
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
  info: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  outerInfoLink: {
    padding: 8,
  },
  infoLink: {
    fontFamily: 'WorkSans-Thin',
    fontSize: RFValue(48, FONT_SIZE_100_DISPLAY_HEIGHT),
    textDecorationLine: 'underline',
  },
  infoVersion: {
    fontFamily: 'WorkSans-Thin',
    fontSize: RFValue(40, FONT_SIZE_100_DISPLAY_HEIGHT),
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
  infoLink: {
    ...defaults.infoLink,
    color: 'white',
  },
  infoVersion: {
    ...defaults.infoVersion,
    color: 'white',
  },
};

const stylesDefaults = StyleSheet.create(defaults);

const stylesContrast = StyleSheet.create(contrast);

export default function(useContrast: boolean = false) {
  return useContrast ? stylesContrast : stylesDefaults;
}
