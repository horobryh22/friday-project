import { MeDataType } from 'store/reducers/types/MeDataType';
import { Nullable } from 'types';

export type AuthStateType = {
    goToLogin: boolean;
    isEmailSent: boolean;
    info: Nullable<string>;
    error: Nullable<string>;
    isUserAuth: boolean;
    authUserData: MeDataType;
};
