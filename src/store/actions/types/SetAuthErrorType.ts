import { SET_ERROR } from 'store/actions/constants';
import { Nullable } from 'types';

export type SetAuthErrorType = {
    type: typeof SET_ERROR;
    payload: { error: Nullable<string> };
};
