"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR = void 0;
const is_1 = require("../is");
const re_1 = require("../re");
const parseHex = (color) => {
    const r = color.length === 4
        ? parseInt(color.substring(1, 2) + color.substring(1, 2), 16)
        : parseInt(color.substring(1, 3), 16);
    const g = color.length === 4
        ? parseInt(color.substring(2, 3) + color.substring(2, 3), 16)
        : parseInt(color.substring(3, 5), 16);
    const b = color.length === 4
        ? parseInt(color.substring(3, 4) + color.substring(3, 4), 16)
        : parseInt(color.substring(5, 7), 16);
    return [r, g, b];
};
const parseHSL = (color) => color
    .trim()
    .replace(/ /g, '')
    .replace('hsl(', '')
    .replace(')', '')
    .replace(/%/g, '')
    .split(',')
    .map((v) => +v);
const parseRGB = (color) => color
    .trim()
    .replace(/ /g, '')
    .replace('rgb(', '')
    .replace(')', '')
    .split(',')
    .map((v) => +v);
const hslToHex = (h, s, l) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const convert = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, '0');
    };
    return `#${convert(0)}${convert(8)}${convert(4)}`;
};
const rgbToHsl = (r, g, b) => {
    (r /= 255), (g /= 255), (b /= 255);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = (max + min) / 2;
    let s = (max + min) / 2;
    let l = (max + min) / 2;
    if (max == min)
        h = s = 0;
    else {
        const d = max - min;
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
exports.COLOR = {
    getFormat: (color) => !is_1.IS.STRING.color(color)
        ? null
        : re_1.RE.HEX_COLOR.verify(color)
            ? 'HEX'
            : re_1.RE.HSL_COLOR.verify(color)
                ? 'HSL'
                : re_1.RE.RGB_COLOR.verify(color)
                    ? 'RGB'
                    : null,
    getGradient: (from, to, count, format) => {
        if (!is_1.IS.STRING.color(from))
            throw TypeError('From: argument must be a color');
        if (!is_1.IS.STRING.color(to))
            throw TypeError('To: argument must be a color');
        const [r1, g1, b1] = parseRGB(exports.COLOR.toRGB(from) || '');
        const [r2, g2, b2] = parseRGB(exports.COLOR.toRGB(to) || '');
        const rChange = (r2 - r1) / (count - 1);
        const gChange = (g2 - g1) / (count - 1);
        const bChange = (b2 - b1) / (count - 1);
        format = (format || exports.COLOR.getFormat(from));
        return [...Array(count).keys()].map((index) => {
            const r = Math.floor(r1 + index * rChange)
                .toString(16)
                .padStart(2, '0');
            const g = Math.floor(g1 + index * gChange)
                .toString(16)
                .padStart(2, '0');
            const b = Math.floor(b1 + index * bChange)
                .toString(16)
                .padStart(2, '0');
            const rgb = `#${r}${g}${b}`;
            switch (format) {
                case 'HEX':
                    return exports.COLOR.toHEX(rgb) || rgb;
                case 'HSL':
                    return exports.COLOR.toHSL(rgb) || rgb;
                case 'RGB':
                    return exports.COLOR.toRGB(rgb) || rgb;
            }
        });
    },
    toHEX: (color) => {
        const format = exports.COLOR.getFormat(color);
        if (format === null)
            return null;
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
    toHSL: (color) => {
        const format = exports.COLOR.getFormat(color);
        if (format === null)
            return null;
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
    toRGB: (color) => {
        const format = exports.COLOR.getFormat(color);
        if (format === null)
            return null;
        switch (format) {
            case 'HEX':
                const hex = parseHex(color);
                return 'rgb(' + hex.map((c) => c.toString()).join(', ') + ')';
            case 'HSL':
                const [h, s, l] = parseHSL(color);
                return exports.COLOR.toRGB(hslToHex(h, s, l));
            case 'RGB':
                return color;
        }
    },
};
//# sourceMappingURL=color.js.map