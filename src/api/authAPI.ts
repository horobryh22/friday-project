import axios from 'axios';

import {
    AddedUserType,
    LoginResponseType,
    RegisterUserErrorType,
    UserDataType,
} from 'api';
import { SignInValuesType } from 'pages';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
});
export const authAPI = {
    login: (data: SignInValuesType) => {
        return instance.post<LoginResponseType>(`auth/login`, data);
    },
    forgot: (email: string) => {
        return instance.post('auth/forgot', {
            email,
            from: 'test-front-admin <hvi17@yandex.ru>',
            message: `<div style="background-color: lime; padding: 15px">
                          password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>link</a>
                      </div>`,
        });
    },
    register: ({ email, password }: UserDataType) => {
        return instance.post<AddedUserType | RegisterUserErrorType>('auth/register', {
            email,
            password,
        });
    },
};
