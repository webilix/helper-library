"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRING = void 0;
const is_1 = require("../is");
function changeNumbers(str, locale = 'FA') {
    const fa = '۰۱۲۳۴۵۶۷۸۹'.split('');
    const en = '0123456789'.split('');
    const from = locale === 'FA' ? en : fa;
    const to = locale === 'FA' ? fa : en;
    from.forEach((c, i) => (str = str.replace(new RegExp(c, 'g'), to[i])));
    return str;
}
function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
function getBankCardView(bankCard, join = '-') {
    return is_1.IS.string(bankCard) && is_1.IS.STRING.bankCard(bankCard)
        ? [
            bankCard.substring(0, 4),
            bankCard.substring(4, 8),
            bankCard.substring(8, 12),
            bankCard.substring(12, 16),
        ].join(join)
        : '';
}
function getFileName(name, ext, join = '-') {
    const fileNameChars = 'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیabcdefghijklmnopqrstuvwxyz۰۱۲۳۴۵۶۷۸۹0123456789.-_'.split('');
    let file = name
        .split('')
        .map((c) => (fileNameChars.includes(c.toLocaleLowerCase()) ? c : join))
        .join('');
    while (file.indexOf(`${join}${join}`) !== -1)
        file = file.replace(`${join}${join}`, join);
    return `${file}.${ext}`;
}
function getMobileView(mobile, join = '-') {
    return is_1.IS.string(mobile) && is_1.IS.STRING.mobile(mobile)
        ? [mobile.substring(0, 4), mobile.substring(4, 7), mobile.substring(7, 11)].join(join)
        : '';
}
function getRandom(length, type = 'alphanumeric') {
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
}
function hasPersian(text) {
    const chars = ('۰۱۲۳۴۵۶۷۸۹' + 'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی' + 'ئ').split('');
    for (let i = 0; i < text.length; i++)
        if (chars.includes(text.substring(i, i + 1)))
            return true;
    return false;
}
function toFileSize(size) {
    if (is_1.IS.empty(size) || !is_1.IS.string(size))
        return 0;
    size = size.toUpperCase();
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    for (let u = units.length - 1; u >= 0; u--) {
        const unit = units[u];
        if (size.substring(size.length - unit.length) === unit) {
            const value = size.substring(0, size.length - unit.length);
            return value === '' || value.substring(value.length - 1) === '.' || isNaN(+value) || +value < 0
                ? 0
                : +value * Math.pow(1024, u);
        }
    }
    return 0;
}
exports.STRING = {
    changeNumbers: changeNumbers,
    escapeHTML: escapeHTML,
    getBankCardView: getBankCardView,
    getFileName: getFileName,
    getMobileView: getMobileView,
    getRandom: getRandom,
    hasPersian: hasPersian,
    toFileSize: toFileSize,
};
//# sourceMappingURL=string.js.map