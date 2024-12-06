"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexpRGBColor = exports.regexpHSLColor = exports.regexpHexColor = exports.regexpIP4 = exports.regexpUrl = exports.regexpDomain = exports.regexpPassword = exports.regexpUsername = exports.regexpNumeric = exports.regexpMobile = exports.regexpEmail = exports.regexpJsonDate = exports.regexpTime = exports.regexpDate = exports.reReplace = exports.reFind = exports.reVerify = exports.reGet = void 0;
//#region REGULAR EXPRESSION METHODS
const reGet = (pattern, fullLine = true, flags) => fullLine ? new RegExp(`^${pattern}$`, flags) : new RegExp(pattern, flags);
exports.reGet = reGet;
const reVerify = (pattern, text, flags) => (0, exports.reGet)(pattern, true, flags).test(text);
exports.reVerify = reVerify;
const reFind = (pattern, text, flags) => text.match((0, exports.reGet)(pattern, false, flags || 'g')) || [];
exports.reFind = reFind;
const reReplace = (pattern, text, replaceWith = '', flags) => text.replace((0, exports.reGet)(pattern, false, flags || 'g'), replaceWith);
exports.reReplace = reReplace;
//#endregion
//#region REGULAR EXPRESSIONS
exports.regexpDate = `[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])`;
exports.regexpTime = `([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]`;
exports.regexpJsonDate = exports.regexpDate + `T` + exports.regexpTime + `.[0-9][0-9][0-9]Z`;
exports.regexpEmail = `(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))` +
    `@` +
    `((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))`;
exports.regexpMobile = `09([0-9]{9}|[0-9]{2}[- ]{1}[0-9]{3}[- ]{1}[0-9]{4})`;
const regexpNumeric = (minLength, maxLength) => {
    if (minLength !== undefined && minLength <= 0)
        throw new Error('minLength must be bigger than zero');
    if (maxLength !== undefined && maxLength <= 0)
        throw new Error('maxLength must be bigger than zero');
    if (minLength === undefined)
        return `[0-9]{1,}`;
    if (maxLength === undefined)
        return `[0-9]{${minLength},}`;
    if (maxLength !== undefined && minLength > maxLength)
        throw new Error('maxLength must be equal or bigger than minLength');
    return `[0-9]{${minLength}${minLength === maxLength ? '' : `,${maxLength}`}}`;
};
exports.regexpNumeric = regexpNumeric;
const regexpUsername = (length = 3, useDash = true, useDot = true, startWithChar = true, endWithChar = true) => {
    if (length < 3)
        throw new Error('length must be equal or bigger than 3');
    const middleLength = length - (startWithChar ? 1 : 0) - (endWithChar ? 1 : 0);
    const middle = `[a-z0-9${useDash ? '-' : ''}${useDot ? '.' : ''}]{${middleLength},}`;
    return `${startWithChar ? '[a-z]{1}' : ''}${middle}${endWithChar ? '[a-z]{1}' : ''}`;
};
exports.regexpUsername = regexpUsername;
const regexpPassword = (length = 8, forceLowerCase = true, forceUpperCase = true, forceNumber = true) => {
    const lCase = forceLowerCase ? '(?=.*[a-z])' : '';
    const uCase = forceUpperCase ? '(?=.*[A-Z])' : '';
    const number = forceNumber ? '(?=.*[0-9])' : '';
    return `${lCase}${uCase}${number}.{${length},}`;
};
exports.regexpPassword = regexpPassword;
exports.regexpDomain = `(([a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z0-9])\\.)*` +
    `([a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z0-9]){1}(\\.[a-zA-Z]{2,})+`;
const regexpUrl = (full = false) => full
    ? `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9]{2,}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=,]*)`
    : `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9]{2,}\\b[/]{0,1}`;
exports.regexpUrl = regexpUrl;
exports.regexpIP4 = `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`;
exports.regexpHexColor = `#([0-9a-fA-F]{3}){1,2}`;
exports.regexpHSLColor = `hsl\\(` +
    `[ ]{0,}(0|360|35\\d|3[0-4]\\d|[12]\\d\\d|0?\\d?\\d)[ ]{0,},` +
    `[ ]{0,}(0|100|\\d{1,2})%[ ]{0,},` +
    `[ ]{0,}(0|100|\\d{1,2})%[ ]{0,}` +
    `\\)`;
exports.regexpRGBColor = `rgb\\(` +
    `[ ]{0,}(0|255|25[0-4]|2[0-4]\\d|1\\d\\d|0?\\d?\\d)[ ]{0,},` +
    `[ ]{0,}(0|255|25[0-4]|2[0-4]\\d|1\\d\\d|0?\\d?\\d)[ ]{0,},` +
    `[ ]{0,}(0|255|25[0-4]|2[0-4]\\d|1\\d\\d|0?\\d?\\d)[ ]{0,}` +
    `\\)`;
//#endregion
//# sourceMappingURL=regex.js.map