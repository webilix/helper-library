"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BANK = void 0;
const is_1 = require("../is");
const shared_1 = require("../shared");
exports.BANK = {
    findCard: (card) => {
        if (!is_1.IS.string(card) ||
            card.length < 6 ||
            card.length > 16 ||
            (card.length === 16 && !is_1.IS.STRING.bankCard(card)))
            return null;
        const check = card.substring(0, 6);
        const bank = shared_1.bankList.find((l) => (typeof l.card === 'string' ? [l.card] : l.card).includes(check));
        return bank ? { id: bank.id, title: bank.title } : null;
    },
    getList: () => shared_1.bankList.map((l) => ({ id: l.id, title: l.title })),
};
//# sourceMappingURL=bank.js.map