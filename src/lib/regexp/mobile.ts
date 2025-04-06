import { reFind, reGet, regexpMobile, reReplace, reVerify } from '../shared';

export const MOBILE = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpMobile, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpMobile, text),

    find: (text: string): string[] => reFind(regexpMobile, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpMobile, text, replaceWith),
};
