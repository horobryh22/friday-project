import { setAuthErrorAC } from 'store/actions';
import { setAuthInfoAC, setIsUserAuthAC } from 'store/actions/auth';

export type AuthActionsType =
    | ReturnType<typeof setAuthErrorAC>
    | ReturnType<typeof setIsUserAuthAC>
    | ReturnType<typeof setAuthInfoAC>;
