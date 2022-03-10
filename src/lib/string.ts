export const STRING = {
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

    escapeHTML: (str: string): string => {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    },

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
};
