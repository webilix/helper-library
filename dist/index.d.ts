export declare const Helper: {
    IS: {
        ARRAY: {
            in: (values: any[], arr: any[]) => boolean;
            unique: (arr: any[], value?: ((v: any) => any) | undefined) => boolean;
        };
        STRING: {
            bankCard: (value: any) => boolean;
            color: (value: any) => boolean;
            date: (value: any) => boolean;
            domain: (value: any) => boolean;
            email: (value: any) => boolean;
            hexColor: (value: any) => boolean;
            ip4: (value: any) => boolean;
            jsonDate: (value: any) => boolean;
            mobile: (value: any) => boolean;
            nationalCode: (value: any) => boolean;
            number: (value: any) => boolean;
            numeric: (value: any) => boolean;
            objectId: (value: any) => boolean;
            time: (value: any) => boolean;
            url: (value: any) => boolean;
        };
        array: (value: any) => boolean;
        boolean: (value: any) => boolean;
        date: (value: any) => boolean;
        empty: (value: any) => boolean;
        null: (value: any) => boolean;
        number: (value: any) => boolean;
        object: (value: any) => boolean;
        plate: {
            (value: string[]): boolean;
            (value: string): boolean;
            (value: string, join: string): boolean;
        };
        string: (value: any) => boolean;
    };
    RE: {
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
        HSL_COLOR: {
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
        RGB_COLOR: {
            get: (fullLine?: boolean, flags?: string | undefined) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
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
    BANK: {
        findCard: (card: string) => import("./lib/shared").IBank | null;
        getList: () => import("./lib/shared").IBank[];
    };
    COLOR: {
        getFormat: (color: string) => import("./lib/shared").ColorFormats | null;
        getGradient: (from: string, to: string, count: number, format?: import("./lib/shared").ColorFormats | undefined) => string[];
        getShade: (color: string, count: number, format?: import("./lib/shared").ColorFormats | undefined) => string[];
        toHEX: (color: string) => string | null;
        toHSL: (color: string) => string | null;
        toRGB: (color: string) => string | null;
    };
    DATE: {
        getDuration: (from: Date, to: Date) => string;
        getSeconds: (from: Date, to: Date) => number;
        jalaliPeriod: (from: Date, to: Date, timezone?: string) => string;
        toString: (date: Date) => string;
    };
    NUMBER: {
        format: (num: number, locale?: "EN" | "FA") => string;
        toEN: (num: string | number) => string;
        toFA: (num: string | number) => string;
        toFileSize: (size: number, english?: boolean) => string;
    };
    PASSWORD: {
        generate: (length: number, exclude?: {
            number?: boolean | undefined;
            lower?: boolean | undefined;
            upper?: boolean | undefined;
            special?: boolean | undefined;
        } | undefined) => string;
        getStrength: (password: string) => number;
    };
    PLATE: {
        letters: string[];
        getPlate: {
            (plate: string[]): (string | null)[];
            (plate: string): (string | null)[];
            (plate: string, join: string): (string | null)[];
        };
        toString: (plate: string[], join?: string) => string | null;
    };
    STRING: {
        changeNumbers: (str: string, changeTo?: "EN" | "FA") => string;
        escapeHTML: (str: string) => string;
        getBankCardView: (bankCard: string, join?: string) => string;
        getFileName: (name: string, ext: string, seperator?: string) => string;
        getMobileView: (mobile: string, join?: string) => string;
        getRandom: (length: number, type?: "numeric" | "alphabetic" | "alphanumeric") => string;
        hasPersian: (text: string) => boolean;
        toFileSize: (size: string) => number;
    };
    TIME: {
        getDuration: (second: number) => string;
        toString: (date: Date) => string;
    };
};
export { IBank, ColorFormats } from './lib/shared';
//# sourceMappingURL=index.d.ts.map