import { AuthStateType } from './types';

import { AuthActionsType } from 'store/actions';
import { SET_AUTH_ERROR, SET_AUTH_INFO, SET_IS_USER_AUTH } from 'store/actions/constants';

const initialState: AuthStateType = {
    info: null,
    error: null,
    isUserAuth: false,
};

export const authReducer = (
    state = initialState,
    action: AuthActionsType,
): AuthStateType => {
    switch (action.type) {
        case SET_AUTH_INFO:
            return { ...state, info: action.payload.info };
        case SET_IS_USER_AUTH:
            return { ...state, isUserAuth: action.payload.isUserAuth };
        case SET_AUTH_ERROR:
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
};
