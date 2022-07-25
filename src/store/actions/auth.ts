import { SET_ERROR, SET_IS_USER_AUTH } from './constants';

import { Nullable } from 'types';

export const setAuthErrorAC = (error: Nullable<string>): any => {
    return {
        type: SET_ERROR,
        payload: { error },
    } as const;
};

export const setIsUserAuthAC = (isUserAuth: boolean): any => {
    return {
        type: SET_IS_USER_AUTH,
        payload: { isUserAuth },
    } as const;
};
