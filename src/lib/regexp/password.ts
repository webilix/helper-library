import { reGet, regexpPassword, reVerify } from '../shared';

export const PASSWORD = {
    get: (
        length: number = 8,
        forceLowerCase: boolean = true,
        forceUpperCase: boolean = true,
        forceNumber: boolean = true,
        fullLine: boolean = true,
        flags?: string,
    ): RegExp => reGet(regexpPassword(length, forceLowerCase, forceUpperCase, forceNumber), fullLine, flags),

    verify: (
        text: string,
        length: number = 8,
        forceLowerCase: boolean = true,
        forceUpperCase: boolean = true,
        forceNumber: boolean = true,
    ): boolean => reVerify(regexpPassword(length, forceLowerCase, forceUpperCase, forceNumber), text),
};
