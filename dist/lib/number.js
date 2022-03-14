"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NUMBER = void 0;
exports.NUMBER = {
    toFA: (num) => {
        let fa = typeof num === 'string' ? num : num.toString();
        '۰۱۲۳۴۵۶۷۸۹'.split('').forEach((n, index) => {
            fa = fa.replace(new RegExp(index.toString(), 'g'), n);
        });
        return fa;
    },
    toEN: (num) => {
        let en = typeof num === 'string' ? num : num.toString();
        '۰۱۲۳۴۵۶۷۸۹'.split('').forEach((n, index) => {
            en = en.replace(new RegExp(n, 'g'), index.toString());
        });
        return en;
    },
    format: (num, locale = 'FA') => {
        const minus = num < 0;
        const [n, p] = Math.abs(num).toString().split('.');
        const parts = n.padStart(Math.ceil(n.length / 3) * 3, '0').match(/.{1,3}/g) || [];
        const format = parts.map((n) => (+n).toString()).join(',');
        return (`${minus ? '-' : ''}` +
            (locale === 'FA' ? exports.NUMBER.toFA(format) : format) +
            (p ? '.' + (locale === 'FA' ? exports.NUMBER.toFA(p) : p) : ''));
    },
};
//# sourceMappingURL=number.js.map