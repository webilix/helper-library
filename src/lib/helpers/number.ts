import { IS } from '../is';

export const NUMBER = {
    format: (num: number, locale: 'EN' | 'FA' = 'FA'): string => {
        const minus: boolean = num < 0;
        const [n, p] = Math.abs(num).toString().split('.');

        const parts: string[] = n.padStart(Math.ceil(n.length / 3) * 3, '0').match(/.{1,3}/g) || [];
        const format: string = parts.map((n, index) => (+n).toString().padStart(index === 0 ? 1 : 3, '0')).join(',');

        return (
            `${minus ? '-' : ''}` +
            (locale === 'FA' ? NUMBER.toFA(format) : format) +
            (p ? '.' + (locale === 'FA' ? NUMBER.toFA(p) : p) : '')
        );
    },

    toEN: (num: number | string): string => {
        let en: string = typeof num === 'string' ? num : num.toString();
        '۰۱۲۳۴۵۶۷۸۹'.split('').forEach((n, index: number) => {
            en = en.replace(new RegExp(n, 'g'), index.toString());
        });

        return en;
    },

    toFA: (num: number | string): string => {
        let fa: string = typeof num === 'string' ? num : num.toString();
        '۰۱۲۳۴۵۶۷۸۹'.split('').forEach((n, index: number) => {
            fa = fa.replace(new RegExp(index.toString(), 'g'), n);
        });

        return fa;
    },

    toFileSize: (size: number, english: boolean = false): string => {
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

        const value: string = NUMBER.format(
            size % 1 === 0 ? +size.toString() : +size.toFixed(2),
            english ? 'EN' : 'FA',
        ).replace(/,/g, english ? ',' : '،');
        return `${value} ${titles[index][english ? 0 : 1]}`;
    },
};
