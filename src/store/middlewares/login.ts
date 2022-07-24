import { authAPI } from 'api';
import { AppThunkType } from 'store/types';

export const login =
    (email: string, password: string, rememberMe: boolean): AppThunkType =>
    (): void => {
        try {
            const response = authAPI.login(email, password, rememberMe);

            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };
