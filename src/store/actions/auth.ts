import { SET_ERROR } from './constants';

import { Nullable } from 'types';

export const setAuthErrorAC = (error: Nullable<string>): any => {
    return {
        type: SET_ERROR,
        payload: { error },
    } as const;
};
