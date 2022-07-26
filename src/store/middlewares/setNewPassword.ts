import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC } from 'store/actions/app';
import { setAuthErrorAC, setAuthInfoAC } from 'store/actions/auth';
import { AppThunkType } from 'store/types';

export const setNewPassword =
    (password: string, resetPasswordToken: string): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
            const response = await authAPI.setNewPassword(password, resetPasswordToken);

            dispatch(setAuthInfoAC(response.data.info));
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
