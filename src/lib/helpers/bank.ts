import { IS } from '../is';
import { bankList, IBank } from '../shared';

export const BANK = {
    findCard: (card: string): IBank | null => {
        if (
            !IS.string(card) ||
            card.length < 6 ||
            card.length > 16 ||
            (card.length === 16 && !IS.STRING.bankCard(card))
        )
            return null;

        const check: string = card.substring(0, 6);
        const bank = bankList.find((l) => (typeof l.card === 'string' ? [l.card] : l.card).includes(check));
        return bank ? { id: bank.id, title: bank.title } : null;
    },

    getList: (): IBank[] => bankList.map((l) => ({ id: l.id, title: l.title })),
};
