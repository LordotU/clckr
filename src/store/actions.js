/**
 * @format
 * @flow
 */

type ExtractReturn<Fn> = $Call<<T>((...Iterable<any>) => T) => T, Fn>;

export const actionTypes = { SWITCH_CONTRAST: 'SWITCH_CONTRAST' };

export const switchContrast = (highContrast: boolean) => ({
  type: actionTypes.SWITCH_CONTRAST,
  payload: highContrast,
});

export type Action = ExtractReturn<typeof switchContrast>;
