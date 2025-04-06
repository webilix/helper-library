import { reFind, reGet, regexpEmail, reReplace, reVerify } from '../shared';

export const EMAIL = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpEmail, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpEmail, text),

    find: (text: string): string[] => reFind(regexpEmail, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpEmail, text, replaceWith),
};
