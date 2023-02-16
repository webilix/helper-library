"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR = void 0;
const is_1 = require("../is");
const re_1 = require("../re");
const getHSL = (color) => color
    .replace('hsl(', '')
    .replace(')', '')
    .replace(/%/g, '')
    .split(',')
    .map((v) => +v);
const getRGB = (color) => color
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
    toHEX: (color) => {
        const format = exports.COLOR.getFormat(color);
        if (format === null)
            return null;
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
//# sourceMappingURL=color.js.map