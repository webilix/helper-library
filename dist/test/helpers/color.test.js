"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("../../lib/helpers/color");
test('COLOR: getFormat', () => {
    expect(color_1.COLOR.getFormat('')).toBe(null);
    expect(color_1.COLOR.getFormat('#000')).toBe('HEX');
    expect(color_1.COLOR.getFormat('hsl(0,0%,0%)')).toBe('HSL');
    expect(color_1.COLOR.getFormat('rgb(0,0,0)')).toBe('RGB');
});
test('COLOR: toHEX', () => {
    const hex = '#7c8b74';
    const hsl = 'hsl(99, 9%, 50%)';
    const rgb = 'rgb(124, 139, 116)';
    expect(color_1.COLOR.toHEX('')).toBe(null);
    expect(color_1.COLOR.toHEX(hex)).toBe(hex);
    expect(color_1.COLOR.toHEX(hsl)).toBe(hex);
    expect(color_1.COLOR.toHEX(rgb)).toBe(hex);
});
test('COLOR: toHSL', () => {
    const hex = '#7c8b74';
    const hsl = 'hsl(99, 9%, 50%)';
    const rgb = 'rgb(124, 139, 116)';
    expect(color_1.COLOR.toHSL('')).toBe(null);
    expect(color_1.COLOR.toHSL(hex)).toBe(hsl);
    expect(color_1.COLOR.toHSL(hsl)).toBe(hsl);
    expect(color_1.COLOR.toHSL(rgb)).toBe(hsl);
});
test('COLOR: toRGB', () => {
    const hex = '#7c8b74';
    const hsl = 'hsl(99, 9%, 50%)';
    const rgb = 'rgb(124, 139, 116)';
    expect(color_1.COLOR.toRGB('')).toBe(null);
    expect(color_1.COLOR.toRGB(hex)).toBe(rgb);
    expect(color_1.COLOR.toRGB(hsl)).toBe(rgb);
    expect(color_1.COLOR.toRGB(rgb)).toBe(rgb);
});
test('COLOR: getGradient', () => {
    const gradient = color_1.COLOR.getGradient('rgb(0,0,0)', 'hsl(360, 100%, 100%)', 5, 'HEX');
    const result = ['#000000', '#3f3f3f', '#7f7f7f', '#bfbfbf', '#ffffff'];
    expect(gradient.join('-')).toBe(result.join('-'));
    const rgb = color_1.COLOR.getGradient('rgb(0,0,0)', 'hsl(360, 100%, 100%)', 5, 'RGB');
    for (let c = 0; c < rgb.length; c++)
        expect(rgb[c]).toBe(color_1.COLOR.toRGB(result[c]));
    const hsl = color_1.COLOR.getGradient('rgb(0,0,0)', 'hsl(360, 100%, 100%)', 5, 'HSL');
    for (let c = 0; c < rgb.length; c++)
        expect(hsl[c]).toBe(color_1.COLOR.toHSL(result[c]));
});
//# sourceMappingURL=color.test.js.map