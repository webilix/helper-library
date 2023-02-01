import { reFind, reGet, regexpIP4, reReplace, reVerify } from '../shared';

export const IP4 = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpIP4, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpIP4, text),

    find: (text: string): string[] => reFind(regexpIP4, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpIP4, text, replaceWith),
};
