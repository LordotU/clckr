/**
 * @format
 * @flow
 */

import React, { useReducer } from 'react';
import { context, defaultState, reducer } from './reducer';

const { Provider }: { Provider: Object } = context;

const StateProvider = ({ children }: { children: React$Node }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { context, StateProvider };
