import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import {
    setAppStatusAC,
    setAuthErrorAC,
    setIsUserAuthAC,
    setUsersAC,
} from 'store/actions';
import { AppThunkType } from 'store/types';

export const me = (): AppThunkType => async dispatch => {
    try {
        dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
        const data = await authAPI.me();

        dispatch(setUsersAC(data.data));
        dispatch(setIsUserAuthAC(true));
    } catch (e) {
        const err = e as Error | AxiosError;

        if (axios.isAxiosError(err)) {
            const error = err.response?.data
                ? (err.response.data as { error: string }).error
                : err.message;

            dispatch(setAuthErrorAC(error));
        } else {
            dispatch(setAuthErrorAC('Some error'));
        }
    } finally {
        dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
    }
};