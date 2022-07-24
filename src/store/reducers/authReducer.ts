import { AuthStateType } from './types';

import { AuthActionsType } from 'store/actions';
import { SET_ERROR } from 'store/actions/constants';

const initialState: AuthStateType = {
    error: null,
};

export const authReducer = (
    state = initialState,
    action: AuthActionsType,
): AuthStateType => {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
};
