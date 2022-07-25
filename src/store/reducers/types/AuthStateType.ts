import { Nullable } from 'types';

export type AuthStateType = {
    error: Nullable<string>;
    isUserAuth: boolean;
};
