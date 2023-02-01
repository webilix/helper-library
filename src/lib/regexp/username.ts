import { reGet, regexpUsername, reVerify } from '../shared';

export const USERNAME = {
    get: (
        length: number = 3,
        useDash: boolean = true,
        useDot: boolean = true,
        startWithChar: boolean = true,
        endWithChar: boolean = true,
        fullLine: boolean = true,
        flags?: string,
    ): RegExp => reGet(regexpUsername(length, useDash, useDot, startWithChar, endWithChar), fullLine, flags),

    verify: (
        text: string,
        length: number = 3,
        useDash: boolean = true,
        useDot: boolean = true,
        startWithChar: boolean = true,
        endWithChar: boolean = true,
    ): boolean => reVerify(regexpUsername(length, useDash, useDot, startWithChar, endWithChar), text),
};
