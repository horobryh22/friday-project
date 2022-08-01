import { instance } from 'api/config';
import {
    GetCardsResponseType,
    SearchParamsType,
    AddCardsPackType,
    CardType,
    UpdateCardsPackType,
    GetCurrentCardRequestType,
    GetCurrentCardResponseType,
} from 'api/types';
import { GetCardType } from 'api/types/cards/GetCardType/GetCardType';

export const packsAPI = {
    fetchPacks: ({
        packName,
        min,
        max,
        sortPacks,
        page,
        pageCount,
        user_id,
    }: SearchParamsType) => {
        return instance.get<GetCardsResponseType>('cards/pack', {
            params: {
                packName,
                min,
                max,
                sortPacks,
                page,
                pageCount,
                user_id,
            },
        });
    },
    addCardsPack: (pack: AddCardsPackType) => {
        return instance.post<{ newCardsPack: CardType }>('cards/pack', pack);
    },
    removeCardsPack: (packId: string) => {
        return instance.delete<{ deletedCardsPack: CardType }>('cards/pack', {
            params: {
                id: packId,
            },
        });
    },
    updateCardsPack: (pack: UpdateCardsPackType) => {
        return instance.put<{ updatedCardsPack: CardType }>('cards/pack', pack);
    },
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
