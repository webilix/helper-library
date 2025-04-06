import { reFind, reGet, regexpHexColor, reReplace, reVerify } from '../shared';

export const HEX_COLOR = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpHexColor, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpHexColor, text),

    find: (text: string): string[] => reFind(regexpHexColor, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpHexColor, text, replaceWith),
};
