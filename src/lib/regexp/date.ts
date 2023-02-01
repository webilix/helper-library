import { reFind, reGet, regexpDate, reReplace, reVerify } from '../shared';

export const DATE = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpDate, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpDate, text),

    find: (text: string): string[] => reFind(regexpDate, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpDate, text, replaceWith),
};
