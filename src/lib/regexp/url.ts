import { reFind, reGet, regexpUrl, reReplace, reVerify } from '../shared';

export const URL = {
    get: (full: boolean = false, fullLine: boolean = true, flags?: string): RegExp =>
        reGet(regexpUrl(full), fullLine, flags),

    verify: (text: string, full: boolean = false): boolean => reVerify(regexpUrl(full), text),

    find: (text: string, full: boolean = false): string[] => reFind(regexpUrl(full), text),

    replace: (text: string, replaceWith: string = '', full: boolean = false): string =>
        reReplace(regexpUrl(full), text, replaceWith),
};
