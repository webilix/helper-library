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

export const regexpHSLColor: string =
    `hsl\\(` +
    `[ ]{0,}(0|360|35\\d|3[0-4]\\d|[12]\\d\\d|0?\\d?\\d)[ ]{0,},` +
    `[ ]{0,}(0|100|\\d{1,2})%[ ]{0,},` +
    `[ ]{0,}(0|100|\\d{1,2})%[ ]{0,}` +
    `\\)`;

export const regexpRGBColor: string =
    `rgb\\(` +
    `[ ]{0,}(0|255|25[0-4]|2[0-4]\\d|1\\d\\d|0?\\d?\\d)[ ]{0,},` +
    `[ ]{0,}(0|255|25[0-4]|2[0-4]\\d|1\\d\\d|0?\\d?\\d)[ ]{0,},` +
    `[ ]{0,}(0|255|25[0-4]|2[0-4]\\d|1\\d\\d|0?\\d?\\d)[ ]{0,}` +
    `\\)`;
//#endregion
