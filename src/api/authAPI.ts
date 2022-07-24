import axios from 'axios';

import {
    RegisterUserErrorType,
    AddedUserType,
    UserDataType,
    LoginErrorType,
    LoginResponseType,
    InvalidValueErrorType,
} from 'api';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
});
export const authAPI = {
    login: async (email: string, password: string, rememberMe: boolean) => {
        return instance.post<LoginErrorType | LoginResponseType | InvalidValueErrorType>(
            `auth/login`,
            { email, password, rememberMe },
        );
    },
    register: ({ email, password }: UserDataType) => {
        return instance.post<AddedUserType | RegisterUserErrorType>('auth/register', {
            email,
            password,
        });
    },
};
