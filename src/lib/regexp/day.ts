import { reFind, reGet, regexpDay, reReplace, reVerify } from '../shared';

export const DAY = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpDay, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpDay, text),

    find: (text: string): string[] => reFind(regexpDay, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpDay, text, replaceWith),
};
