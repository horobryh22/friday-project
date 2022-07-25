import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { RegisterUserErrorType, UserDataType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setAuthErrorAC } from 'store/actions';
import { setAppStatusAC } from 'store/actions/app';
import { AppThunkType } from 'store/types';

export const registerUser =
    ({ email, password }: UserDataType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
            await authAPI.register({ email, password });
        } catch (err) {
            const error = err as AxiosError | RegisterUserErrorType;

            if (axios.isAxiosError(error)) {
                dispatch(setAuthErrorAC(error.message));
            } else {
                dispatch(setAuthErrorAC(error.error));
            }
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
