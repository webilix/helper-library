import { reFind, reGet, regexpJsonDate, reReplace, reVerify } from '../shared';

export const JSON_DATE = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpJsonDate, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpJsonDate, text),

    find: (text: string): string[] => reFind(regexpJsonDate, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpJsonDate, text, replaceWith),
};
