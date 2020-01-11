/* eslint-disable react-hooks/rules-of-hooks */

/**
 * @flow
 * @format
 */

import React, { useContext } from 'react';

import { context } from '../../store';
import useStyles from '../../Styles';

export default function<Config, Instance>(
  Component: React$AbstractComponent<Config, Instance>,
): React$StatelessFunctionalComponent<Config> {
  return function withStyles(props: Config) {
    const {
      state: { highContrast },
    }: { state: { highContrast: boolean } } = useContext(context);

    const styles = useStyles(highContrast);

    return <Component styles={styles} {...props} />;
  };
}
