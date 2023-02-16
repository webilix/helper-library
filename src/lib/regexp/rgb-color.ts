import { reFind, reGet, regexpRGBColor, reReplace, reVerify } from '../shared';

export const RGB_COLOR = {
    get: (fullLine: boolean = true, flags?: string): RegExp => reGet(regexpRGBColor, fullLine, flags),

    verify: (text: string): boolean => reVerify(regexpRGBColor, text),

    find: (text: string): string[] => reFind(regexpRGBColor, text),

    replace: (text: string, replaceWith: string = ''): string => reReplace(regexpRGBColor, text, replaceWith),
};
