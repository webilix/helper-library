export type ColorFormats = 'HEX' | 'HSL' | 'RGB';

export const parseHex = (color: string): number[] => {
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

export const parseHSL = (color: string): number[] =>
    color
        .trim()
        .replace(/ /g, '')
        .replace('hsl(', '')
        .replace(')', '')
        .replace(/%/g, '')
        .split(',')
        .map((v) => +v);

export const parseRGB = (color: string): number[] =>
    color
        .trim()
        .replace(/ /g, '')
        .replace('rgb(', '')
        .replace(')', '')
        .split(',')
        .map((v) => +v);

export const hslToHex = (h: number, s: number, l: number): string => {
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

export const rgbToHsl = (r: number, g: number, b: number): string => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h: number = (max + min) / 2;
    let s: number = (max + min) / 2;
    let l: number = (max + min) / 2;
    if (max == min) h = s = 0;
    else {
        var d = max - min;
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

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
};
