import { SET_APP_STATUS } from './constants';
import { SetAppStatusType } from './types';

import { REQUEST_STATUS } from 'enums';

export const setAppStatusAC = (status: REQUEST_STATUS): SetAppStatusType => {
    return {
        type: SET_APP_STATUS,
        payload: { status },
    } as const;
};
