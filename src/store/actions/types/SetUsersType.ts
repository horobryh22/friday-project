import { AuthUserDataType } from 'api/types/auth/AuthUserDataType/AuthUserDataType';
import { ME_AUTH } from 'store/actions/constants';

export type setUsersACType = {
    type: typeof ME_AUTH;
    payload: {
        data: AuthUserDataType;
    };
};
