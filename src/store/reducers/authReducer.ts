import { AuthStateType } from './types';

import { AuthActionsType } from 'store/actions';
import { SET_ERROR, SET_IS_USER_AUTH } from 'store/actions/constants';

const initialState: AuthStateType = {
    error: null,
    isUserAuth: false,
};

export const authReducer = (
    state = initialState,
    action: AuthActionsType,
): AuthStateType => {
    switch (action.type) {
        case SET_IS_USER_AUTH:
            return { ...state, isUserAuth: action.payload.isUserAuth };
        case SET_ERROR:
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
};
