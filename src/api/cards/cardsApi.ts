import { instance } from 'api/config';
import { GetCurrentCardRequestType, GetCurrentCardResponseType } from 'api/types';
import { GetCardType } from 'api/types/cards/GetCardType/GetCardType';

export const cardsApi = {
    getCard: ({
        cardsPack_id,
        cardAnswer = 'english',
        min,
        max,
        sortCards = '0grade',
        page = 1,
        pageCount,
    }: GetCurrentCardRequestType) => {
        return instance.get<GetCurrentCardResponseType>('cards/card', {
            params: {
                cardsPack_id,
                cardAnswer,
                min,
                max,
                sortCards,
                page,
                pageCount,
            },
        });
    },
    createCard: (card: GetCardType) => {
        return instance.post('cards/card', card);
    },
    deleteCard: (id: string) => {
        return instance.delete('cards/card', {
            params: { id },
        });
    },
    updateCard: (card: GetCardType) => {
        return instance.put('cards/card', card);
    },
};
