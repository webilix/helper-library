import { ColorFormats } from '../shared';

import { IS } from '../is';
import { RE } from '../re';

const parseHex = (color: string): number[] => {
    const r =
        color.length === 4
            ? parseInt(color.substring(1, 2) + color.substring(1, 2), 16)
            : parseInt(color.substring(1, 3), 16);
    const g =
        color.length === 4
            ? parseInt(color.substring(2, 3) + color.substring(2, 3), 16)
            : parseInt(color.substring(3, 5), 16);
    const b =
        color.length === 4
            ? parseInt(color.substring(3, 4) + color.substring(3, 4), 16)
            : parseInt(color.substring(5, 7), 16);

    return [r, g, b];
};

const parseHSL = (color: string): number[] =>
    color
        .trim()
        .replace(/ /g, '')
        .replace('hsl(', '')
        .replace(')', '')
        .replace(/%/g, '')
        .split(',')
        .map((v) => +v);

const parseRGB = (color: string): number[] =>
    color
        .trim()
        .replace(/ /g, '')
        .replace('rgb(', '')
        .replace(')', '')
        .split(',')
        .map((v) => +v);

const hslToHex = (h: number, s: number, l: number): string => {
    l /= 100;
    const a: number = (s * Math.min(l, 1 - l)) / 100;
    const convert = (n: number): string => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, '0');
    };

    return `#${convert(0)}${convert(8)}${convert(4)}`;
};

const rgbToHsl = (r: number, g: number, b: number): string => {
    (r /= 255), (g /= 255), (b /= 255);
    const max: number = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h = (max + min) / 2;
    let s = (max + min) / 2;
    let l = (max + min) / 2;

    if (max == min) h = s = 0;
    else {
        const d: number = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return `hsl(${Math.floor(h * 360)}, ${Math.floor(s * 100)}%, ${Math.floor(l * 100)}%)`;
};

export const COLOR = {
    getFormat: (color: string): ColorFormats | null =>
        !IS.STRING.color(color)
            ? null
            : RE.HEX_COLOR.verify(color)
            ? 'HEX'
            : RE.HSL_COLOR.verify(color)
            ? 'HSL'
            : RE.RGB_COLOR.verify(color)
            ? 'RGB'
            : null,

    getGradient: (from: string, to: string, count: number, format?: ColorFormats): string[] => {
        if (!IS.STRING.color(from)) throw TypeError('From: argument must be a color');
        if (!IS.STRING.color(to)) throw TypeError('To: argument must be a color');
        if (count <= 2) throw new Error('Count must be bigger than 2');

        const [r1, g1, b1] = parseRGB(COLOR.toRGB(from) || '');
        const [r2, g2, b2] = parseRGB(COLOR.toRGB(to) || '');

        const rChange: number = (r2 - r1) / (count - 1);
        const gChange: number = (g2 - g1) / (count - 1);
        const bChange: number = (b2 - b1) / (count - 1);

        format = (format || COLOR.getFormat(from)) as ColorFormats;
        return [...Array(count).keys()].map((index: number) => {
            const r: string = Math.floor(r1 + index * rChange)
                .toString(16)
                .padStart(2, '0');
            const g: string = Math.floor(g1 + index * gChange)
                .toString(16)
                .padStart(2, '0');
            const b: string = Math.floor(b1 + index * bChange)
                .toString(16)
                .padStart(2, '0');

            const rgb = `#${r}${g}${b}`;
            switch (format as ColorFormats) {
                case 'HEX':
                    return COLOR.toHEX(rgb) || rgb;
                case 'HSL':
                    return COLOR.toHSL(rgb) || rgb;
                case 'RGB':
                    return COLOR.toRGB(rgb) || rgb;
            }
        });
    },

    getShade: (color: string, count: number, format?: ColorFormats): string[] => {
        if (!IS.STRING.color(color)) throw TypeError('Color: argument must be a color');
        if (count <= 4) throw new Error('Count must be bigger than 4');

        count = Math.ceil(count / 2);
        format = (format || COLOR.getFormat(color)) as ColorFormats;
        return [
            ...COLOR.getGradient('#000', color, count, format),
            ...COLOR.getGradient(color, '#FFF', count, format).slice(1),
        ];
    },

    toHEX: (color: string): string | null => {
        const format: ColorFormats | null = COLOR.getFormat(color);
        if (format === null) return null;

        switch (format) {
            case 'HEX':
                return color;
            case 'HSL':
                const [h, s, l] = parseHSL(color);
                return hslToHex(h, s, l);
            case 'RGB':
                const rgb = parseRGB(color);
                return '#' + rgb.map((c) => c.toString(16).padStart(2, '0')).join('');
        }
    },

    toHSL: (color: string): string | null => {
        const format: ColorFormats | null = COLOR.getFormat(color);
        if (format === null) return null;

        switch (format) {
            case 'HEX':
                const [h, e, x] = parseHex(color);
                return rgbToHsl(h, e, x);
            case 'HSL':
                return color;
            case 'RGB':
                const [r, g, b] = parseRGB(color);
                return rgbToHsl(r, g, b);
        }
    },

    toRGB: (color: string): string | null => {
        const format: ColorFormats | null = COLOR.getFormat(color);
        if (format === null) return null;

        switch (format) {
            case 'HEX':
                const hex = parseHex(color);
                return 'rgb(' + hex.map((c) => c.toString()).join(', ') + ')';
            case 'HSL':
                const [h, s, l] = parseHSL(color);
                return COLOR.toRGB(hslToHex(h, s, l));
            case 'RGB':
                return color;
        }
    },
};
