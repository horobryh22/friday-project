import { authAPI } from 'api';
import { SignInValuesType } from 'pages';
import { AppThunkType } from 'store/types';

export const login =
    (data: SignInValuesType): AppThunkType =>
    async () => {
        try {
            const response = await authAPI.login(data);

            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };
