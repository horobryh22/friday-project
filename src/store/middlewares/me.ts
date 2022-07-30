import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, setIsUserAuthAC, setUsersAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const me = (): AppThunkType => async dispatch => {
    try {
        dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
        const data = await authAPI.me();

        dispatch(setUsersAC(data.data));
        dispatch(setIsUserAuthAC(true));
    } catch (e) {
        errorHandler(e as Error | AxiosError, dispatch);
    } finally {
        dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
    }
};
