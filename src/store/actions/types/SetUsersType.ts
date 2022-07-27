import { ME_AUTH } from 'store/actions/constants';
import { MeDataType } from 'store/reducers/types/MeDataType';

export type setUsersACType = {
    type: typeof ME_AUTH;
    payload: {
        data: MeDataType;
    };
};
