import { REQUEST_STATUS } from 'enums';
import { MeDataType } from 'store/reducers/types/MeDataType';
import { selectAuthError } from 'store/selectors/selectAuthError/selectAuthError';
import { selectAuthInfo } from 'store/selectors/selectAuthInfo/selectAuthInfo';
import { selectGoToLogin } from 'store/selectors/selectGoToLogin/selectGoToLogin';
import { selectIsEmailSent } from 'store/selectors/selectISEmailSent/selectIsEmailSent';
import { AppRootState } from 'store/types';

let state: AppRootState;

beforeEach(() => {
    state = {
        app: {
            status: REQUEST_STATUS.IDLE,
            isInitialized: false,
            error: null,
        },
        auth: {
            error: 'some error',
            info: null,
            isUserAuth: false,
            goToLogin: false,
            isEmailSent: false,
            authUserData: {} as MeDataType,
        },
    };
});

describe('select', () => {
    test('AuthError', () => {
        const error = selectAuthError(state);

        expect(error).toBe('some error');
    });

    test('AuthInfo', () => {
        const info = selectAuthInfo(state);

        expect(info).toBeNull();
    });

    test('GoToLogin', () => {
        const goToLogin = selectGoToLogin(state);

        expect(goToLogin).toBeFalsy();
    });

    test('IsEmailSent', () => {
        const isEmailSent = selectIsEmailSent(state);

        expect(isEmailSent).toBeFalsy();
    });
});

export {};
