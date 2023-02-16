import { ColorFormats } from '../shared';
export declare const COLOR: {
    getFormat: (color: string) => ColorFormats | null;
    getGradient: (from: string, to: string, count: number, format?: ColorFormats) => string[];
    getShade: (color: string, count: number, format?: ColorFormats) => string[];
    toHEX: (color: string) => string | null;
    toHSL: (color: string) => string | null;
    toRGB: (color: string) => string | null;
};
//# sourceMappingURL=color.d.ts.map