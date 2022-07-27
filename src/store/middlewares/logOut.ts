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

export const logOut = (): AppThunkType => async dispatch => {
    try {
        dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
        await authAPI.delete();
        dispatch(setIsUserAuthAC(false));
        dispatch(
            setUsersAC({
                email: '',
                error: '',
                avatar: '',
                _id: '',
                name: '',
                isAdmin: false,
                rememberMe: false,
                verified: false,
                publicCardPacksCount: 0,
            }),
        );
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
