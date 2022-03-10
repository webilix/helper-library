"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("../lib/number");
test('NUMBER: toFA', () => {
    expect(number_1.NUMBER.toFA(1234567890)).toBe('۱۲۳۴۵۶۷۸۹۰');
    expect(number_1.NUMBER.toFA('string: 111')).toBe('string: ۱۱۱');
});
test('NUMBER: format', () => {
    expect(number_1.NUMBER.format(1234567890)).toBe('۱,۲۳۴,۵۶۷,۸۹۰');
    expect(number_1.NUMBER.format(1234567890, 'EN')).toBe('1,234,567,890');
    expect(number_1.NUMBER.format(-1234567.89)).toBe('-۱,۲۳۴,۵۶۷.۸۹');
    expect(number_1.NUMBER.format(-1234567.89, 'EN')).toBe('-1,234,567.89');
});
//# sourceMappingURL=number.test.js.map