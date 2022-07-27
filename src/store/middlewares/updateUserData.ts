import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { UpDateTypes } from 'api/types/upDateTypes';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, setAuthErrorAC, setUsersAC } from 'store/actions';
import { AppThunkType } from 'store/types';

export const updateUserData =
    ({ name, avatar }: UpDateTypes): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
            const data = await authAPI.put({ name, avatar });

            dispatch(setUsersAC(data.data.updatedUser));
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
