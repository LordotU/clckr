/**
 * @format
 * @flow
 */

import { createContext } from 'react';
import { actionTypes } from './actions';
import type { Action } from './actions';

export type DefaultStateType = {
  highContrast: boolean,
};

export const defaultState: DefaultStateType = {
  highContrast: false,
};

export const context = createContext<DefaultStateType>(defaultState);

export const reducer = (state: DefaultStateType, { type, payload }: Action) => {
  switch (type) {
    case actionTypes.SWITCH_CONTRAST:
      return { ...state, highContrast: payload };
    default:
      return state;
  }
};
