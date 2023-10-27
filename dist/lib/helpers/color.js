"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR = void 0;
const is_1 = require("../is");
const re_1 = require("../re");
const shared_1 = require("../shared");
function getFormat(color) {
    return !is_1.IS.STRING.color(color)
        ? null
        : re_1.RE.HEX_COLOR.verify(color)
            ? 'HEX'
            : re_1.RE.HSL_COLOR.verify(color)
                ? 'HSL'
                : re_1.RE.RGB_COLOR.verify(color)
                    ? 'RGB'
                    : null;
}
function getGradient(from, to, count, format) {
    if (!is_1.IS.STRING.color(from))
        throw TypeError('From: argument must be a color');
    if (!is_1.IS.STRING.color(to))
        throw TypeError('To: argument must be a color');
    if (count <= 2)
        throw new Error('Count must be bigger than 2');
    const [r1, g1, b1] = (0, shared_1.parseRGB)(toRGB(from) || '');
    const [r2, g2, b2] = (0, shared_1.parseRGB)(toRGB(to) || '');
    const rChange = (r2 - r1) / (count - 1);
    const gChange = (g2 - g1) / (count - 1);
    const bChange = (b2 - b1) / (count - 1);
    format = (format || getFormat(from));
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
                return toHEX(rgb) || rgb;
            case 'HSL':
                return toHSL(rgb) || rgb;
            case 'RGB':
                return toRGB(rgb) || rgb;
        }
    });
}
function getShade(color, count, format) {
    if (!is_1.IS.STRING.color(color))
        throw TypeError('Color: argument must be a color');
    if (count <= 4)
        throw new Error('Count must be bigger than 4');
    count = Math.ceil(count / 2);
    format = (format || getFormat(color));
    return [...getGradient('#000', color, count, format), ...getGradient(color, '#FFF', count, format).slice(1)];
}
function toHEX(color) {
    const format = getFormat(color);
    if (format === null)
        return null;
    switch (format) {
        case 'HEX':
            return color;
        case 'HSL':
            const [h, s, l] = (0, shared_1.parseHSL)(color);
            return (0, shared_1.hslToHex)(h, s, l);
        case 'RGB':
            const rgb = (0, shared_1.parseRGB)(color);
            return '#' + rgb.map((c) => c.toString(16).padStart(2, '0')).join('');
    }
}
function toHSL(color) {
    const format = getFormat(color);
    if (format === null)
        return null;
    switch (format) {
        case 'HEX':
            const [h, e, x] = (0, shared_1.parseHex)(color);
            return (0, shared_1.rgbToHsl)(h, e, x);
        case 'HSL':
            return color;
        case 'RGB':
            const [r, g, b] = (0, shared_1.parseRGB)(color);
            return (0, shared_1.rgbToHsl)(r, g, b);
    }
}
function toRGB(color) {
    const format = getFormat(color);
    if (format === null)
        return null;
    switch (format) {
        case 'HEX':
            const hex = (0, shared_1.parseHex)(color);
            return 'rgb(' + hex.map((c) => c.toString()).join(', ') + ')';
        case 'HSL':
            const [h, s, l] = (0, shared_1.parseHSL)(color);
            return toRGB((0, shared_1.hslToHex)(h, s, l));
        case 'RGB':
            return color;
    }
}
exports.COLOR = {
    getFormat: getFormat,
    getGradient: getGradient,
    getShade: getShade,
    toHEX: toHEX,
    toHSL: toHSL,
    toRGB: toRGB,
};
//# sourceMappingURL=color.js.map