import { ColorFormats } from '../shared';
declare function getFormat(color: string): ColorFormats | null;
declare function getGradient(from: string, to: string, count: number): string[];
declare function getGradient(from: string, to: string, count: number, format: ColorFormats): string[];
declare function getShade(color: string, count: number): string[];
declare function getShade(color: string, count: number, format: ColorFormats): string[];
declare function toHEX(color: string): string | null;
declare function toHSL(color: string): string | null;
declare function toRGB(color: string): string | null;
export declare const COLOR: {
    getFormat: typeof getFormat;
    getGradient: typeof getGradient;
    getShade: typeof getShade;
    toHEX: typeof toHEX;
    toHSL: typeof toHSL;
    toRGB: typeof toRGB;
};
export {};
//# sourceMappingURL=color.d.ts.map