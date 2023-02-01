"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("../../lib/helpers/bank");
test('BANK: findCard', () => {
    var _a, _b;
    expect((_a = bank_1.BANK.findCard('502229')) === null || _a === void 0 ? void 0 : _a.id).toBe('PG');
    expect((_b = bank_1.BANK.findCard('5022290000000000')) === null || _b === void 0 ? void 0 : _b.id).toBe('PG');
    for (let digit = 1; digit < 10; digit++) {
        const card = `502229000000000${digit}`;
        expect(bank_1.BANK.findCard(card)).toBe(null);
    }
});
test('BANK: getList', () => {
    expect(bank_1.BANK.getList().length).toBe(35);
    const list = bank_1.BANK.getList()
        .map((b) => b.id)
        .filter((id, index, arr) => arr.indexOf(id) === index);
    expect(bank_1.BANK.getList().length === list.length).toBe(true);
});
//# sourceMappingURL=bank.test.js.map