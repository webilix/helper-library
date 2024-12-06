export type ColorFormats = 'HEX' | 'HSL' | 'RGB';
export declare const parseHex: (color: string) => number[];
export declare const parseHSL: (color: string) => number[];
export declare const parseRGB: (color: string) => number[];
export declare const hslToHex: (h: number, s: number, l: number) => string;
export declare const rgbToHsl: (r: number, g: number, b: number) => string;
//# sourceMappingURL=color.d.ts.map