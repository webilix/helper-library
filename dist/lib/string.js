"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRING = void 0;
exports.STRING = {
    random: (length, type = 'alphanumeric') => {
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
    escapeHTML: (str) => {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    },
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
};
//# sourceMappingURL=string.js.map