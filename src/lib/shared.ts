//#region BANK HELPER
export const bankList: { id: string; title: string; card: string | string[] }[] = [
    { id: 'EN', title: 'بانک اقتصاد نوین', card: '627412' },
    { id: 'AN', title: 'بانک انصار', card: '627381' },
    { id: 'IZ', title: 'بانک ایران زمین', card: '505785' },
    { id: 'PS', title: 'بانک پارسیان', card: ['622106', '639194', '627884'] },
    { id: 'PG', title: 'بانک پاسارگاد', card: ['639347', '502229'] },
    { id: 'AY', title: 'بانک آینده', card: '636214' },
    { id: 'TJ', title: 'بانک تجارت', card: ['627353', '585983'] },
    { id: 'TT', title: 'بانک توسعه تعاون', card: '502908' },
    { id: 'ED', title: 'بانک توسعه صادرات ایران', card: ['627648', '207177'] },
    { id: 'HK', title: 'بانک حکمت ایرانیان', card: '636949' },
    { id: 'DY', title: 'بانک دی', card: '502938' },
    { id: 'RF', title: 'بانک رفاه کارگران', card: '589463' },
    { id: 'SM', title: 'بانک سامان', card: '621986' },
    { id: 'SP', title: 'بانک سپه', card: '589210' },
    { id: 'SY', title: 'بانک سرمایه', card: '639607' },
    { id: 'SN', title: 'بانک سینا', card: '639346' },
    { id: 'SH', title: 'بانک شهر', card: ['502806', '504706'] },
    { id: 'SD', title: 'بانک صادرات ایران', card: '603769' },
    { id: 'IM', title: 'بانک صنعت و معدن', card: '627961' },
    { id: 'QM', title: 'بانک قرض الحسنه مهر ایران', card: '606373' },
    { id: 'GH', title: 'بانک قوامین', card: '639599' },
    { id: 'KF', title: 'بانک کارآفرین', card: ['627488', '502910'] },
    { id: 'KS', title: 'بانک کشاورزی', card: ['603770', '639217'] },
    { id: 'GD', title: 'بانک گردشگری', card: '505416' },
    { id: 'MK', title: 'بانک مرکزی', card: '636795' },
    { id: 'MS', title: 'بانک مسکن', card: '628023' },
    { id: 'MT', title: 'بانک ملت', card: ['610433', '991975'] },
    { id: 'ML', title: 'بانک ملی', card: '603799' },
    { id: 'MH', title: 'بانک مهر اقتصاد', card: '639370' },
    { id: 'PT', title: 'پست بانک ایران', card: '627760' },
    { id: 'TS', title: 'موسسه اعتباری توسعه', card: '628157' },
    { id: 'KR', title: 'موسسه اعتباری کوثر', card: '505801' },
    { id: 'EM', title: 'مؤسسه اعتباری ملل (عسکریه سابق)', card: '606256' },
    { id: 'RS', title: 'بانک قرض الحسنه رسالت', card: '504172' },
    { id: 'KH', title: 'بانک خاورمیانه', card: '505809' },
];

export interface IBank {
    id: string;
    title: string;
}
//#endregion

//#region PLATE HELPER
export const plateLetters: string[] = 'ابپتثجدزژسشصطعفقکگلمنوهی'.split('');
//#endregion

//#region REGULAR EXPRESSION METHODS
export const reGet = (pattern: string, fullLine: boolean = true, flags?: string): RegExp =>
    fullLine ? new RegExp(`^${pattern}$`, flags) : new RegExp(pattern, flags);

export const reVerify = (pattern: string, text: string, flags?: string): boolean =>
    reGet(pattern, true, flags).test(text);

export const reFind = (pattern: string, text: string, flags?: string): string[] =>
    text.match(reGet(pattern, false, flags || 'g')) || [];

export const reReplace = (pattern: string, text: string, replaceWith: string = '', flags?: string): string =>
    text.replace(reGet(pattern, false, flags || 'g'), replaceWith);
//#endregion

//#region REGULAR EXPRESSIONS
export const regexpDate: string = `[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])`;

export const regexpTime: string = `([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]`;

export const regexpJsonDate: string = regexpDate + `T` + regexpTime + `.[0-9][0-9][0-9]Z`;

export const regexpEmail: string =
    `(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))` +
    `@` +
    `((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))`;

export const regexpMobile: string = `09([0-9]{9}|[0-9]{2}[- ]{1}[0-9]{3}[- ]{1}[0-9]{4})`;

export const regexpNumeric = (minLength?: number, maxLength?: number): string => {
    if (minLength !== undefined && minLength <= 0) throw new Error('minLength must be bigger than zero');
    if (maxLength !== undefined && maxLength <= 0) throw new Error('maxLength must be bigger than zero');

    if (minLength === undefined) return `[0-9]{1,}`;
    if (maxLength === undefined) return `[0-9]{${minLength},}`;

    if (maxLength !== undefined && minLength > maxLength)
        throw new Error('maxLength must be equal or bigger than minLength');
    return `[0-9]{${minLength}${minLength === maxLength ? '' : `,${maxLength}`}}`;
};

export const regexpUsername = (
    length: number = 3,
    useDash: boolean = true,
    useDot: boolean = true,
    startWithChar: boolean = true,
    endWithChar: boolean = true,
): string => {
    if (length < 3) throw new Error('length must be equal or bigger than 3');
    const middleLength: number = length - (startWithChar ? 1 : 0) - (endWithChar ? 1 : 0);
    const middle: string = `[a-z0-9${useDash ? '-' : ''}${useDot ? '.' : ''}]{${middleLength},}`;
    return `${startWithChar ? '[a-z]{1}' : ''}${middle}${endWithChar ? '[a-z]{1}' : ''}`;
};

export const regexpPassword = (
    length: number = 8,
    forceLowerCase: boolean = true,
    forceUpperCase: boolean = true,
    forceNumber: boolean = true,
): string => {
    const lCase: string = forceLowerCase ? '(?=.*[a-z])' : '';
    const uCase: string = forceUpperCase ? '(?=.*[A-Z])' : '';
    const number: string = forceNumber ? '(?=.*[0-9])' : '';
    return `${lCase}${uCase}${number}.{${length},}`;
};

export const regexpDomain: string =
    `(([a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z0-9])\\.)*` +
    `([a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z0-9]){1}(\\.[a-zA-Z]{2,})+`;

export const regexpUrl = (full: boolean = false): string =>
    full
        ? `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9]{2,}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=,]*)`
        : `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9]{2,}\\b[/]{0,1}`;

export const regexpIP4: string =
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`;

export const regexpHexColor: string = `#([0-9a-fA-F]{3}){1,2}`;
//#endregion
