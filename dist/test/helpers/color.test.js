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
//# sourceMappingURL=color.test.js.map