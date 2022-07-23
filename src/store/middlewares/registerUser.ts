import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { RegisterUserErrorType } from 'api/types';
import { AppThunkType } from 'store/types';

export const registerUser = (): AppThunkType => async () => {
    const email = 'qwer';
    const pass = '123456789';

    let response;

    try {
        response = await authAPI.register(email, pass);
    } catch (err) {
        const error = err as AxiosError | RegisterUserErrorType;

        if (axios.isAxiosError(error)) {
            console.warn(error.message);
        } else {
            console.warn(error.error);
        }
    }

    return response;
};
