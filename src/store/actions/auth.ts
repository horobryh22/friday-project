import { SET_AUTH_ERROR, SET_AUTH_INFO, SET_IS_USER_AUTH } from './constants';
import { SetAuthErrorType, SetAuthInfoType, SetIsUserAuth } from './types';

import { Nullable } from 'types';

export const setAuthErrorAC = (error: Nullable<string>): SetAuthErrorType => {
    return {
        type: SET_AUTH_ERROR,
        payload: { error },
    } as const;
};

export const setIsUserAuthAC = (isUserAuth: boolean): SetIsUserAuth => {
    return {
        type: SET_IS_USER_AUTH,
        payload: { isUserAuth },
    } as const;
};

export const setAuthInfoAC = (info: Nullable<string>): SetAuthInfoType => {
    return {
        type: SET_AUTH_INFO,
        payload: { info },
    } as const;
};
