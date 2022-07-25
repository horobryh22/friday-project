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
    register: ({ email, password }: UserDataType) => {
        return instance.post<AddedUserType | RegisterUserErrorType>('auth/register', {
            email,
            password,
        });
    },
};
