"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NUMBER = void 0;
const is_1 = require("../is");
const shared_1 = require("../shared");
function format(num, locale = 'FA') {
    const minus = num < 0;
    const [n, p] = Math.abs(num).toString().split('.');
    const parts = n.padStart(Math.ceil(n.length / 3) * 3, '0').match(/.{1,3}/g) || [];
    const format = parts
        .map((n, index) => (+n).toString().padStart(index === 0 ? 1 : 3, '0'))
        .join(locale === 'EN' ? ',' : '،');
    return (`${minus ? '-' : ''}` +
        (locale === 'FA' ? toFA(format) : format) +
        (p ? '.' + (locale === 'FA' ? toFA(p) : p) : ''));
}
function getTitle(num) {
    if (!is_1.IS.number(num))
        return '';
    if (num === 0)
        return 'صفر';
    const join = (arr, join) => arr.filter((a) => a !== '').join(join);
    const title = (num, index) => {
        const twoDigit = (num) => {
            if (num === 0)
                return '';
            if (num < 20)
                return shared_1.numberTitles[0][num];
            return join([shared_1.numberTitles[1][Math.floor(num / 10) - 1], shared_1.numberTitles[0][num % 10]], ' و ');
        };
        const title = num < 20 ? twoDigit(num) : join([shared_1.numberTitles[2][Math.floor(num / 100)], twoDigit(num % 100)], ' و ');
        const unit = shared_1.numberTitles[3][index] || '';
        return title ? `${title} ${unit}`.trim() : '';
    };
    let [int, dec] = num
        .toString()
        .split('.')
        .map((v, index) => (index === 0 ? v : v.substring(0, 3)));
    // INTEGER
    if (int.length > 18)
        return '';
    const parts = [];
    while (int.length !== 0) {
        parts.push(int.substring(int.length - 3));
        int = int.substring(0, int.length - 3);
    }
    const integer = join(parts.map((p, index) => title(+p, index)).reverse(), ' و ');
    // DECIMAL
    dec = dec || '';
    while (dec.substring(dec.length - 1) === '0')
        dec = dec.substring(0, dec.length - 1);
    const decimal = !dec ? '' : title(+dec, 0) + ' ' + shared_1.numberTitles[4][dec.length];
    return join([integer, integer && decimal ? 'ممیز' : '', decimal], ' ');
}
function toEN(num) {
    let en = typeof num === 'string' ? num : num.toString();
    '۰۱۲۳۴۵۶۷۸۹'.split('').forEach((n, index) => {
        en = en.replace(new RegExp(n, 'g'), index.toString());
    });
    return en;
}
function toFA(num) {
    let fa = typeof num === 'string' ? num : num.toString();
    '۰۱۲۳۴۵۶۷۸۹'.split('').forEach((n, index) => {
        fa = fa.replace(new RegExp(index.toString(), 'g'), n);
    });
    return fa;
}
function toFileSize(size, locale = 'FA') {
    if (!is_1.IS.number(size) || size < 0)
        return '';
    const titles = [
        ['B', 'بایت'],
        ['KB', 'کیلوبایت'],
        ['MB', 'مگابایت'],
        ['GB', 'گیگابایت'],
        ['TB', 'ترابایت'],
    ];
    let index = 0;
    while (index < 4 && size >= 1000) {
        index++;
        size /= 1024;
    }
    const value = format(size % 1 === 0 ? size : +size.toFixed(2), locale).replace(/,/g, locale === 'EN' ? ',' : '،');
    const title = titles[index][locale === 'EN' ? 0 : 1];
    return `${value} ${title}`;
}
exports.NUMBER = {
    format,
    getTitle,
    toEN,
    toFA,
    toFileSize,
};
//# sourceMappingURL=number.js.map