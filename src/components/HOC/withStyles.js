/* eslint-disable react-hooks/rules-of-hooks */

/**
  @flow
 * @format
 */

import React, { useContext } from 'react';

import { context } from '../../store';
import useStyles from '../../Styles';

export default function(Component) {
  return function withStyles(props) {
    const {
      state: { highContrast },
    } = useContext(context);

    const styles = useStyles(highContrast);

    return <Component styles={styles} {...props} />;
  };
}
