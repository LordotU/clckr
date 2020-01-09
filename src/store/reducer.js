/**
 * @format
 * @flow
 */

import { createContext } from 'react';
import { actionTypes } from './actions';
import type { Action } from './actions';

export const defaultState = {
  highContrast: false,
};

export const context = createContext<Object>(defaultState);

export const reducer = (
  state: typeof defaultState,
  { type, payload }: Action,
) => {
  switch (type) {
    case actionTypes.SWITCH_CONTRAST:
      return { ...state, highContrast: payload };
    default:
      return state;
  }
};
