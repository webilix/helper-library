export declare const RE: {
    DATE: {
        get: (fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string) => boolean;
        find: (text: string) => string[];
        replace: (text: string, replaceWith?: string) => string;
    };
    DOMAIN: {
        get: (fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string) => boolean;
        find: (text: string) => string[];
        replace: (text: string, replaceWith?: string) => string;
    };
    EMAIL: {
        get: (fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string) => boolean;
        find: (text: string) => string[];
        replace: (text: string, replaceWith?: string) => string;
    };
    HEX_COLOR: {
        get: (fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string) => boolean;
        find: (text: string) => string[];
        replace: (text: string, replaceWith?: string) => string;
    };
    IP4: {
        get: (fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string) => boolean;
        find: (text: string) => string[];
        replace: (text: string, replaceWith?: string) => string;
    };
    JSON_DATE: {
        get: (fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string) => boolean;
        find: (text: string) => string[];
        replace: (text: string, replaceWith?: string) => string;
    };
    MOBILE: {
        get: (fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string) => boolean;
        find: (text: string) => string[];
        replace: (text: string, replaceWith?: string) => string;
    };
    NUMERIC: {
        get: (minLength?: number | undefined, maxLength?: number | undefined, fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string, minLength?: number | undefined, maxLength?: number | undefined) => boolean;
        find: (text: string, minLength?: number | undefined, maxLength?: number | undefined) => string[];
        replace: (text: string, replaceWith?: string, minLength?: number | undefined, maxLength?: number | undefined) => string;
    };
    PASSWORD: {
        get: (length?: number, forceLowerCase?: boolean, forceUpperCase?: boolean, forceNumber?: boolean, fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string, length?: number, forceLowerCase?: boolean, forceUpperCase?: boolean, forceNumber?: boolean) => boolean;
    };
    TIME: {
        get: (fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string) => boolean;
        find: (text: string) => string[];
        replace: (text: string, replaceWith?: string) => string;
    };
    URL: {
        get: (full?: boolean, fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string, full?: boolean) => boolean;
        find: (text: string, full?: boolean) => string[];
        replace: (text: string, replaceWith?: string, full?: boolean) => string;
    };
    USERNAME: {
        get: (length?: number, useDash?: boolean, useDot?: boolean, startWithChar?: boolean, endWithChar?: boolean, fullLine?: boolean, flags?: string | undefined) => RegExp;
        verify: (text: string, length?: number, useDash?: boolean, useDot?: boolean, startWithChar?: boolean, endWithChar?: boolean) => boolean;
    };
};
//# sourceMappingURL=re.d.ts.map