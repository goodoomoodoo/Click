export const SWITCH_COLOR_STATE = 'SWITCH_COLOR_STATE';

/**
 * This action returns the state of which color should be changed
 * @param {} color color of the state to be changed
 */
export const toggleColor = ( color ) => ({
    type: SWITCH_COLOR_STATE,
    payload: color
})