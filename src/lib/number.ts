export const NUMBER = {
    format: (num: number, locale: 'FA' | 'EN' = 'FA'): string => {
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
};
