import { reFind, reGet, regexpNumeric, reReplace, reVerify } from '../shared';

export const NUMERIC = {
    get: (minLength?: number, maxLength?: number, fullLine: boolean = true, flags?: string): RegExp =>
        reGet(regexpNumeric(minLength, maxLength), fullLine, flags),

    verify: (text: string, minLength?: number, maxLength?: number): boolean =>
        reVerify(regexpNumeric(minLength, maxLength), text),

    find: (text: string, minLength?: number, maxLength?: number): string[] =>
        reFind(regexpNumeric(minLength, maxLength), text),

    replace: (text: string, replaceWith: string = '', minLength?: number, maxLength?: number): string =>
        reReplace(regexpNumeric(minLength, maxLength), text, replaceWith),
};
