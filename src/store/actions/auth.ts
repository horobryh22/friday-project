import { SET_ERROR, SET_IS_USER_AUTH } from './constants';
import { SetAuthErrorType, SetIsUserAuth } from './types';

import { Nullable } from 'types';

export const setAuthErrorAC = (error: Nullable<string>): SetAuthErrorType => {
    return {
        type: SET_ERROR,
        payload: { error },
    } as const;
};

export const setIsUserAuthAC = (isUserAuth: boolean): SetIsUserAuth => {
    return {
        type: SET_IS_USER_AUTH,
        payload: { isUserAuth },
    } as const;
};
