import { AxiosError } from 'axios';

import { cardsApi } from 'api/cards/cardsApi';
import { GetCurrentCardRequestType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const fetchCards =
    ({ cardsPack_id }: GetCurrentCardRequestType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

            const data = await cardsApi.getCard({ cardsPack_id });

            console.log(data);
        } catch (error) {
            errorHandler(error as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
