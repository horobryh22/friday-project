import { AuthUserDataType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import {
    selectAppStatus,
    selectAuthError,
    selectAuthInfo,
    selectAuthUserId,
    selectCardPacks,
    selectGoToLogin,
    selectIsEmailSent,
    selectIsInitialized,
    selectIsUserAuth,
    selectPackName,
    selectPacksTotalCount,
    selectPage,
    selectPageCount,
    selectSortPacks,
} from 'store/selectors';
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
            authUserData: {
                _id: 'test id',
            } as AuthUserDataType,
        },
        packs: {
            cardPacks: [],
            searchParams: {
                packName: 'Some pack name',
                min: 1,
                max: 4,
                sortPacks: '1updated',
                page: 1,
                pageCount: 4,
                user_id: '',
            },
            cardPacksTotalCount: 100,
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

    test('AppStatus', () => {
        const status = selectAppStatus(state);

        expect(status).toBe(REQUEST_STATUS.IDLE);
    });

    test('isUserAuth', () => {
        const isUserAuth = selectIsUserAuth(state);

        expect(isUserAuth).toBeFalsy();
    });

    test('isInitialized', () => {
        const isInitialized = selectIsInitialized(state);

        expect(isInitialized).toBeFalsy();
    });

    test('cardPacks', () => {
        const cardPacks = selectCardPacks(state);

        expect(cardPacks).toEqual([]);
    });

    test('authUserId', () => {
        const authUserId = selectAuthUserId(state);

        expect(authUserId).toBe('test id');
    });

    test('page', () => {
        const page = selectPage(state);

        expect(page).toBe(1);
    });

    test('pageCount', () => {
        const pageCount = selectPageCount(state);

        // eslint-disable-next-line no-magic-numbers
        expect(pageCount).toBe(4);
    });

    test('packsTotalCount', () => {
        const packsTotalCount = selectPacksTotalCount(state);

        // eslint-disable-next-line no-magic-numbers
        expect(packsTotalCount).toBe(100);
    });

    test('sortPacks', () => {
        const sortPacks = selectSortPacks(state);

        expect(sortPacks).toBe('1updated');
    });

    test('packName', () => {
        const packName = selectPackName(state);

        // eslint-disable-next-line no-magic-numbers
        expect(packName).toBe('Some pack name');
    });
});

export {};
