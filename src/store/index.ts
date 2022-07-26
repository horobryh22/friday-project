export { store } from './store';
export type {
    AppRootActionsType,
    AppThunkType,
    AppRootState,
    AppDispatch,
} from './types';
export { login, registerUser, forgot, setNewPassword } from './middlewares';
export {
    selectAuthError,
    selectAuthInfo,
    selectIsEmailSent,
    selectGoToLogin,
} from './selectors';
