import { IS } from '../is';
import { Normalizer, NormalizerMap } from '../shared';

function normalize(text: string): string;
function normalize(text: string, ignore: Normalizer): string;
function normalize(text: string, ignore: Normalizer[]): string;
function normalize(text: string, ignore?: Normalizer | Normalizer[]): string {
    const update = (text: string, map: { [key: string]: string }): string => {
        Object.keys(map).forEach((key: string) => {
            const search: string[] = map[key].split(' ').filter((s: string) => s !== '');

            const regex: RegExp = new RegExp(`(${search.join('|')})`, 'gi');
            text = text.replace(regex, key);
        });

        return text;
    };

    const ignoreList: Normalizer[] = !ignore ? [] : typeof ignore === 'string' ? [ignore] : ignore;

    // MAPS
    if (!ignoreList.includes('PERSIAN')) text = update(text, NormalizerMap.persian);
    if (!ignoreList.includes('ENGLISH')) text = update(text, NormalizerMap.english);
    if (!ignoreList.includes('ARABIC')) text = update(text, NormalizerMap.arabic);
    if (!ignoreList.includes('NUMBER')) text = update(text, NormalizerMap.number);

    // WHITESPACE
    if (!ignoreList.includes('WHITE-SPACE')) while (text.indexOf('  ') !== -1) text = text.replace(/  /g, ' ');

    // TRIM
    if (!ignoreList.includes('TRIM')) text = text.trim();

    return text;
}

function changeNumbers(str: string): string;
function changeNumbers(str: string, locale: 'EN' | 'FA'): string;
function changeNumbers(str: string, locale: 'EN' | 'FA' = 'FA'): string {
    const fa: string[] = '۰۱۲۳۴۵۶۷۸۹'.split('');
    const en: string[] = '0123456789'.split('');

    const from: string[] = locale === 'FA' ? en : fa;
    const to: string[] = locale === 'FA' ? fa : en;
    from.forEach((c: string, i: number) => (str = str.replace(new RegExp(c, 'g'), to[i])));
    return str;
}

function escapeHTML(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function getBankCardView(bankCard: string): string;
function getBankCardView(bankCard: string, join: string): string;
function getBankCardView(bankCard: string, join: string = '-'): string {
    return IS.string(bankCard) && IS.STRING.bankCard(bankCard)
        ? [
              bankCard.substring(0, 4),
              bankCard.substring(4, 8),
              bankCard.substring(8, 12),
              bankCard.substring(12, 16),
          ].join(join)
        : '';
}

function getFileName(name: string, ext: string): string;
function getFileName(name: string, ext: string, join: string): string;
function getFileName(name: string, ext: string, join: string = '-'): string {
    const fileNameChars: string[] =
        'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیabcdefghijklmnopqrstuvwxyz۰۱۲۳۴۵۶۷۸۹0123456789.-_'.split('');
    let file: string = name
        .split('')
        .map((c: string) => (fileNameChars.includes(c.toLocaleLowerCase()) ? c : join))
        .join('');
    while (file.indexOf(`${join}${join}`) !== -1) file = file.replace(`${join}${join}`, join);

    return `${file}.${ext}`;
}

function getMobileView(mobile: string): string;
function getMobileView(mobile: string, join: string): string;
function getMobileView(mobile: string, join: string = '-'): string {
    return IS.string(mobile) && IS.STRING.mobile(mobile)
        ? [mobile.substring(0, 4), mobile.substring(4, 7), mobile.substring(7, 11)].join(join)
        : '';
}

function getRandom(length: number): string;
function getRandom(length: number, type: 'numeric' | 'alphabetic' | 'alphanumeric'): string;
function getRandom(length: number, type: 'numeric' | 'alphabetic' | 'alphanumeric' = 'alphanumeric'): string {
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
}

function hasPersian(text: string): boolean {
    const chars: string[] = ('۰۱۲۳۴۵۶۷۸۹' + 'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی' + 'ئ').split('');
    for (let i = 0; i < text.length; i++) if (chars.includes(text.substring(i, i + 1))) return true;

    return false;
}

function toFileSize(size: string): number {
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
}

export const STRING = {
    normalize,
    changeNumbers,
    escapeHTML,
    getBankCardView,
    getFileName,
    getMobileView,
    getRandom,
    hasPersian,
    toFileSize,
};
