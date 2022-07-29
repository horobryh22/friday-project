import axios from 'axios';

import { AddedUserType, RegisterUserErrorType, UserDataType } from 'api';
import { UpDateTypes } from 'api/types/upDateTypes';
import { SignInValuesType } from 'pages';
import { MeDataType } from 'store/reducers/types/MeDataType';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
});

export const authAPI = {
    login: (data: SignInValuesType) => {
        return instance.post<MeDataType>(`auth/login`, data);
    },
    setNewPassword: (password: string, resetPasswordToken: string) => {
        return instance.post<{ info: string }>(`auth/set-new-password`, {
            password,
            resetPasswordToken,
        });
    },
    forgot: (email: string) => {
        return axios.post(
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
    register: ({ email, password }: UserDataType) => {
        return instance.post<AddedUserType | RegisterUserErrorType>('auth/register', {
            email,
            password,
        });
    },
    me: () => {
        return instance.post<MeDataType>('auth/me');
    },
    delete: () => {
        return instance.delete('auth/me');
    },
    put: ({ name, avatar }: UpDateTypes) => {
        return instance.put<{ updatedUser: MeDataType }>('auth/me', { name, avatar });
    },
};
