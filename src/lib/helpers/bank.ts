import { IS } from '../is';
import { bankList, IBank } from '../shared';

function findCard(card: string): IBank | null {
    if (!IS.string(card) || card.length < 6 || card.length > 16 || (card.length === 16 && !IS.STRING.bankCard(card)))
        return null;

    const check: string = card.substring(0, 6);
    const bank = bankList.find((l) => (typeof l.card === 'string' ? [l.card] : l.card).includes(check));
    return bank ? { id: bank.id, title: bank.title } : null;
}

function getList(): IBank[] {
    return bankList.map((l) => ({ id: l.id, title: l.title }));
}

export const BANK = {
    findCard: findCard,
    getList: getList,
};
