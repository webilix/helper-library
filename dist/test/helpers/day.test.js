"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day_1 = require("../../lib/helpers/day");
test('DAY: toTitle', () => {
    expect(day_1.DAY.toTitle('01-01')).toBe('1 فروردین');
    expect(day_1.DAY.toTitle('12-30')).toBe('30 اسفند');
});
test('DAY: toTitle (THROW)', () => {
    expect(() => day_1.DAY.toTitle('00-01')).toThrow('Value is not a valid jalali day');
});
//# sourceMappingURL=day.test.js.map