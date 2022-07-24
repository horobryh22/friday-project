import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { SignInValuesType } from 'pages';
import { setAuthErrorAC } from 'store/actions';
import { AppThunkType } from 'store/types';

export const login =
    (data: SignInValuesType): AppThunkType =>
    async dispatch => {
        try {
            const response = await authAPI.login(data);

            console.log(response);
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
        }
    };
