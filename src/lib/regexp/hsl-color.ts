import { reFind, reGet, regexpHSLColor, reReplace, reVerify } from '../shared';

export const HSL_COLOR = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpHSLColor, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpHSLColor, text),

    find: (text: string): string[] => reFind(regexpHSLColor, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpHSLColor, text, replaceWith),
};
