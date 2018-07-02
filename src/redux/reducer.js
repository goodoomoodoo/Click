import { SWITCH_COLOR_STATE } from './action';

export const rootReducer = ( state = {}, action ) => {
    switch( action.type )
    {
        // creates a new state and change the targeted color's state
        case SWITCH_COLOR_STATE:
            let newState = {
                onRed: false,
                onBlue: false,
                onGreen: false,
                onYellow: false
            };

            newState[ action.payload ] = true;
            return newState;
        // the initial dispatch
        default:
            return state;
    }
}