"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_1 = require("../lib/unit");
test(`UNIT: AREA`, () => {
    expect(unit_1.UNIT.AREA.list.length).toBe(8);
    expect(unit_1.UNIT.AREA.options.length).toBe(8);
    expect(unit_1.UNIT.AREA.convert(10, 'FT')).toBe(0.929);
    expect(unit_1.UNIT.AREA.convert(10, 'FT', 5)).toBe(0.92903);
});
test(`UNIT: LENGTH`, () => {
    expect(unit_1.UNIT.LENGTH.list.length).toBe(8);
    expect(unit_1.UNIT.LENGTH.options.length).toBe(8);
    expect(unit_1.UNIT.LENGTH.convert(10, 'FT')).toBe(3.048);
    expect(unit_1.UNIT.LENGTH.convert(10, 'FT', 5)).toBe(3.048);
});
test(`UNIT: VOLUME`, () => {
    expect(unit_1.UNIT.VOLUME.list.length).toBe(4);
    expect(unit_1.UNIT.VOLUME.options.length).toBe(4);
    expect(unit_1.UNIT.VOLUME.convert(10, 'GL')).toBe(37.854);
    expect(unit_1.UNIT.VOLUME.convert(10, 'GL', 5)).toBe(37.85412);
});
test(`UNIT: WEIGHT`, () => {
    expect(unit_1.UNIT.WEIGHT.list.length).toBe(5);
    expect(unit_1.UNIT.WEIGHT.options.length).toBe(5);
    expect(unit_1.UNIT.WEIGHT.convert(10, 'OZ')).toBe(0.283);
    expect(unit_1.UNIT.WEIGHT.convert(10, 'OZ', 5)).toBe(0.2835);
});
//# sourceMappingURL=unit.test.js.map