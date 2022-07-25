import { AppStateType } from './types';

import { REQUEST_STATUS } from 'enums';
import { SET_APP_STATUS } from 'store/actions/constants';
import { AppActionsType } from 'store/actions/types';

const initialState: AppStateType = {
    isInitialized: false,
    error: null,
    status: REQUEST_STATUS.IDLE,
};

export const appReducer = (
    state = initialState,
    action: AppActionsType,
): AppStateType => {
    switch (action.type) {
        case SET_APP_STATUS:
            return { ...state, status: action.payload.status };
        default:
            return state;
    }
};
