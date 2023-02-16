import { ColorFormats } from '../shared';

import { IS } from '../is';
import { RE } from '../re';

const getHSL = (color: string): number[] =>
    color
        .replace('hsl(', '')
        .replace(')', '')
        .replace(/%/g, '')
        .split(',')
        .map((v) => +v);

const getRGB = (color: string): number[] =>
    color
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

    toHEX: (color: string): string | null => {
        const format: ColorFormats | null = COLOR.getFormat(color);
        if (format === null) return null;

        color = color.trim().replace(/ /g, '');
        switch (format) {
            case 'HEX':
                return color;
            case 'HSL':
                const [h, s, l] = getHSL(color);
                return hslToHex(h, s, l);
            case 'RGB':
                const rgb = getRGB(color);
                return '#' + rgb.map((c) => c.toString(16).padStart(2, '0')).join('');
        }
    },
};
