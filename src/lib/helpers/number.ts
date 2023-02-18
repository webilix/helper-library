import { IS } from '../is';
import { NumberTitles } from '../shared';

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

    getTitle: (num: number): string => {
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
