import axios from 'axios';

import {
    AuthUserDataType,
    RegisterUserErrorType,
    UpdateUserDataType,
    RegisterUserDataType,
} from 'api/types';
import { SignInValuesType } from 'pages';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
});

export const authAPI = {
    login: (data: SignInValuesType) => {
        return instance.post<AuthUserDataType>(`auth/login`, data);
    },
    setNewPassword: (password: string, resetPasswordToken: string) => {
        return instance.post<{ info: string; error: string }>(`auth/set-new-password`, {
            password,
            resetPasswordToken,
        });
    },
    forgot: (email: string) => {
        return axios.post<{ info: string; error: string }>(
            'https://neko-back.herokuapp.com/2.0/auth/forgot',
            {
                email,
                from: 'test-front-admin <hvi17@yandex.ru>',
                message: `<div style='background-color: lime; padding: 15px'>
                          password recovery link: <a href='http://localhost:3000/password_recovery/$token$'>link</a>
                      </div>`,
            },
            { withCredentials: true },
        );
    },
    register: (data: RegisterUserDataType) => {
        return instance.post<{ addedUser: AuthUserDataType } | RegisterUserErrorType>(
            'auth/register',
            data,
        );
    },
    me: () => {
        return instance.post<AuthUserDataType>('auth/me');
    },
    logout: () => {
        return instance.delete<{ info: string; error: string }>('auth/me');
    },
    updateUserData: (userData: UpdateUserDataType) => {
        return instance.put<{ updatedUser: AuthUserDataType; error: string }>(
            'auth/me',
            userData,
        );
    },
};
