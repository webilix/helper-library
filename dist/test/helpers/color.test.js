"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("../../lib/helpers/color");
test('COLOR: getFormat', () => {
    expect(color_1.COLOR.getFormat('')).toBe(null);
    expect(color_1.COLOR.getFormat('#000')).toBe('HEX');
    expect(color_1.COLOR.getFormat('hsl(0,0%,0%)')).toBe('HSL');
    expect(color_1.COLOR.getFormat('rgb(0,0,0)')).toBe('RGB');
});
//# sourceMappingURL=color.test.js.map