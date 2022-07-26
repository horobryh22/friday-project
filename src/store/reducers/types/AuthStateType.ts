import { Nullable } from 'types';

export type AuthStateType = {
    info: Nullable<string>;
    error: Nullable<string>;
    isUserAuth: boolean;
};
