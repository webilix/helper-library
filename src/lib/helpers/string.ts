import { IS } from '../is';

export const STRING = {
    changeNumbers: (str: string, changeTo: 'EN' | 'FA' = 'FA'): string => {
        const fa: string[] = '۰۱۲۳۴۵۶۷۸۹'.split('');
        const en: string[] = '0123456789'.split('');

        const from: string[] = changeTo === 'FA' ? en : fa;
        const to: string[] = changeTo === 'FA' ? fa : en;
        from.forEach((c: string, i: number) => (str = str.replace(new RegExp(c, 'g'), to[i])));
        return str;
    },

    escapeHTML: (str: string): string => {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    },

    getBankCardView: (bankCard: string, join: string = '-'): string =>
        IS.string(bankCard) && IS.STRING.bankCard(bankCard)
            ? [
                  bankCard.substring(0, 4),
                  bankCard.substring(4, 8),
                  bankCard.substring(8, 12),
                  bankCard.substring(12, 16),
              ].join(join)
            : '',

    getFileName: (name: string, ext: string, seperator: string = '-'): string => {
        const fileNameChars: string[] =
            'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیabcdefghijklmnopqrstuvwxyz۰۱۲۳۴۵۶۷۸۹0123456789.-_'.split('');
        let file: string = name
            .split('')
            .map((c: string) => (fileNameChars.includes(c.toLocaleLowerCase()) ? c : seperator))
            .join('');
        while (file.indexOf(`${seperator}${seperator}`) !== -1)
            file = file.replace(`${seperator}${seperator}`, seperator);

        return `${file}.${ext}`;
    },

    getMobileView: (mobile: string, join: string = '-'): string =>
        IS.string(mobile) && IS.STRING.mobile(mobile)
            ? [mobile.substring(0, 4), mobile.substring(4, 7), mobile.substring(7, 11)].join(join)
            : '',

    getRandom: (length: number, type: 'numeric' | 'alphabetic' | 'alphanumeric' = 'alphanumeric'): string => {
        let chars: string;
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

    hasPersian: (text: string): boolean => {
        const chars: string[] = ('۰۱۲۳۴۵۶۷۸۹' + 'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی' + 'ئ').split('');
        for (let i = 0; i < text.length; i++) if (chars.includes(text.substring(i, i + 1))) return true;

        return false;
    },

    toFileSize: (size: string): number => {
        if (IS.empty(size) || !IS.string(size)) return 0;

        size = size.toUpperCase();
        const units: string[] = ['B', 'KB', 'MB', 'GB', 'TB'];
        for (let u = units.length - 1; u >= 0; u--) {
            const unit: string = units[u];
            if (size.substring(size.length - unit.length) === unit) {
                const value: string = size.substring(0, size.length - unit.length);
                return value === '' || value.substring(value.length - 1) === '.' || isNaN(+value) || +value < 0
                    ? 0
                    : +value * 1024 ** u;
            }
        }

        return 0;
    },
};
