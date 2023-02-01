import { reFind, reGet, regexpTime, reReplace, reVerify } from '../shared';

export const TIME = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpTime, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpTime, text),

    find: (text: string): string[] => reFind(regexpTime, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpTime, text, replaceWith),
};
