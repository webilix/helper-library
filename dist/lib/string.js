"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRING = void 0;
const validator_library_1 = require("@webilix/validator-library");
exports.STRING = {
    escapeHTML: (str) => {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    },
    getBankCardView: (bankCard, join = '-') => validator_library_1.Validator.VALUE.isString(bankCard) && validator_library_1.Validator.STRING.isBankCard(bankCard)
        ? [
            bankCard.substring(0, 4),
            bankCard.substring(4, 8),
            bankCard.substring(8, 12),
            bankCard.substring(12, 16),
        ].join(join)
        : '',
    getFileName: (name, ext, seperator = '-') => {
        const fileNameChars = 'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیabcdefghijklmnopqrstuvwxyz۰۱۲۳۴۵۶۷۸۹0123456789.-_'.split('');
        let file = name
            .split('')
            .map((c) => (fileNameChars.includes(c.toLocaleLowerCase()) ? c : seperator))
            .join('');
        while (file.indexOf(`${seperator}${seperator}`) !== -1)
            file = file.replace(`${seperator}${seperator}`, seperator);
        return `${file}.${ext}`;
    },
    getMobileView: (mobile, join = '-') => validator_library_1.Validator.VALUE.isString(mobile) && validator_library_1.Validator.STRING.isMobile(mobile)
        ? [mobile.substring(0, 4), mobile.substring(4, 7), mobile.substring(7, 11)].join(join)
        : '',
    getRandom: (length, type = 'alphanumeric') => {
        let chars;
        switch (type) {
            case 'numeric':
                chars = '0123456789';
                break;
            case 'alphabetic':
                chars = 'abcdefghijklmnopqrstuvwxyz';
                break;
            case 'alphanumeric':
            default:
                chars = '0123456789abcdefghijklmnopqrstuvwxyz';
                break;
        }
        return [...Array(length)].map(() => chars[(Math.random() * chars.length) | 0]).join('');
    },
    hasPersian: (text) => {
        const chars = 'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ'.split('');
        for (let i = 0; i < text.length; i++)
            if (chars.includes(text.substring(i, i + 1)))
                return true;
        return false;
    },
};
//# sourceMappingURL=string.js.map