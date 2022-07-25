import { setAuthErrorAC } from 'store/actions';
import { setIsUserAuthAC } from 'store/actions/auth';

export type AuthActionsType =
    | ReturnType<typeof setAuthErrorAC>
    | ReturnType<typeof setIsUserAuthAC>;
