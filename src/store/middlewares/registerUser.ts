import { authAPI } from 'api';
import { AppThunkType } from 'store/types';

export const registerUser = (): AppThunkType => async () => {
    const email = 'qwer';
    const pass = '123456789';

    try {
        await authAPI.register(email, pass);
    } catch (err) {
        return err;
    }
};
