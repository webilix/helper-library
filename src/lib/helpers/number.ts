import { IS } from '../is';
import { NumberTitles } from '../shared';

function format(num: number): string;
function format(num: number, locale: 'EN' | 'FA'): string;
function format(num: number, locale: 'EN' | 'FA' = 'FA'): string {
    const minus: boolean = num < 0;
    const [n, p] = Math.abs(num).toString().split('.');

    const parts: string[] = n.padStart(Math.ceil(n.length / 3) * 3, '0').match(/.{1,3}/g) || [];
    const format: string = parts
        .map((n, index) => (+n).toString().padStart(index === 0 ? 1 : 3, '0'))
        .join(locale === 'EN' ? ',' : '،');

    return (
        `${minus ? '-' : ''}` +
        (locale === 'FA' ? toFA(format) : format) +
        (p ? '.' + (locale === 'FA' ? toFA(p) : p) : '')
    );
}

function getTitle(num: number): string {
    if (!IS.number(num)) return '';
    if (num === 0) return 'صفر';

    const join = (arr: string[], join: string): string => arr.filter((a) => a !== '').join(join);

    const title = (num: number, index: number): string => {
        const twoDigit = (num: number): string => {
            if (num === 0) return '';

            if (num < 20) return NumberTitles[0][num];
            return join([NumberTitles[1][Math.floor(num / 10) - 1], NumberTitles[0][num % 10]], ' و ');
        };

        const title: string =
            num < 20 ? twoDigit(num) : join([NumberTitles[2][Math.floor(num / 100)], twoDigit(num % 100)], ' و ');
        const unit: string = NumberTitles[3][index] || '';

        return title ? `${title} ${unit}`.trim() : '';
    };

    let [int, dec] = num
        .toString()
        .split('.')
        .map((v, index) => (index === 0 ? v : v.substring(0, 3)));

    // INTEGER
    if (int.length > 18) return '';
    const parts: string[] = [];
    while (int.length !== 0) {
        parts.push(int.substring(int.length - 3));
        int = int.substring(0, int.length - 3);
    }
    const integer = join(parts.map((p: string, index) => title(+p, index)).reverse(), ' و ');

    // DECIMAL
    dec = dec || '';
    while (dec.substring(dec.length - 1) === '0') dec = dec.substring(0, dec.length - 1);
    const decimal: string = !dec ? '' : title(+dec, 0) + ' ' + NumberTitles[4][dec.length];

    return join([integer, integer && decimal ? 'ممیز' : '', decimal], ' ');
}

function toEN(num: number): string;
function toEN(num: string): string;
function toEN(num: number | string): string {
    let en: string = typeof num === 'string' ? num : num.toString();
    '۰۱۲۳۴۵۶۷۸۹'.split('').forEach((n, index: number) => {
        en = en.replace(new RegExp(n, 'g'), index.toString());
    });

    return en;
}

function toFA(num: number): string;
function toFA(num: string): string;
function toFA(num: number | string): string {
    let fa: string = typeof num === 'string' ? num : num.toString();
    '۰۱۲۳۴۵۶۷۸۹'.split('').forEach((n, index: number) => {
        fa = fa.replace(new RegExp(index.toString(), 'g'), n);
    });

    return fa;
}

function toFileSize(size: number): string;
function toFileSize(size: number, locale: 'EN' | 'FA'): string;
function toFileSize(size: number, locale: 'EN' | 'FA' = 'FA'): string {
    if (!IS.number(size) || size < 0) return '';

    const titles: [string, string][] = [
        ['B', 'بایت'],
        ['KB', 'کیلوبایت'],
        ['MB', 'مگابایت'],
        ['GB', 'گیگابایت'],
        ['TB', 'ترابایت'],
    ];

    let index: number = 0;
    while (index < 4 && size >= 1000) {
        index++;
        size /= 1024;
    }

    const value: string = format(size % 1 === 0 ? size : +size.toFixed(2), locale).replace(
        /,/g,
        locale === 'EN' ? ',' : '،',
    );
    const title: string = titles[index][locale === 'EN' ? 0 : 1];
    return `${value} ${title}`;
}

export const NUMBER = {
    format: format,
    getTitle: getTitle,
    toEN: toEN,
    toFA: toFA,
    toFileSize: toFileSize,
};
