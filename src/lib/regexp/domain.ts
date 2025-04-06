import { reFind, reGet, regexpDomain, reReplace, reVerify } from '../shared';

export const DOMAIN = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpDomain, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpDomain, text),

    find: (text: string): string[] => reFind(regexpDomain, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpDomain, text, replaceWith),
};
