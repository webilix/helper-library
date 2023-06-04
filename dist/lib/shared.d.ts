export declare const bankList: {
    id: string;
    title: string;
    card: string | string[];
}[];
export interface IBank {
    id: string;
    title: string;
}
export type ColorFormats = 'HEX' | 'HSL' | 'RGB';
export declare const parseHex: (color: string) => number[];
export declare const parseHSL: (color: string) => number[];
export declare const parseRGB: (color: string) => number[];
export declare const hslToHex: (h: number, s: number, l: number) => string;
export declare const rgbToHsl: (r: number, g: number, b: number) => string;
export interface IGeoLocation {
    latitude: number;
    longitude: number;
}
export declare const NumberTitles: string[][];
export declare const PasswordChars: {
    number: string;
    lower: string;
    upper: string;
    special: string;
};
export declare const plateLetters: string[];
export declare const reGet: (pattern: string, fullLine?: boolean, flags?: string) => RegExp;
export declare const reVerify: (pattern: string, text: string, flags?: string) => boolean;
export declare const reFind: (pattern: string, text: string, flags?: string) => string[];
export declare const reReplace: (pattern: string, text: string, replaceWith?: string, flags?: string) => string;
export declare const regexpDate: string;
export declare const regexpTime: string;
export declare const regexpJsonDate: string;
export declare const regexpEmail: string;
export declare const regexpMobile: string;
export declare const regexpNumeric: (minLength?: number, maxLength?: number) => string;
export declare const regexpUsername: (length?: number, useDash?: boolean, useDot?: boolean, startWithChar?: boolean, endWithChar?: boolean) => string;
export declare const regexpPassword: (length?: number, forceLowerCase?: boolean, forceUpperCase?: boolean, forceNumber?: boolean) => string;
export declare const regexpDomain: string;
export declare const regexpUrl: (full?: boolean) => string;
export declare const regexpIP4: string;
export declare const regexpHexColor: string;
export declare const regexpHSLColor: string;
export declare const regexpRGBColor: string;
//# sourceMappingURL=shared.d.ts.map