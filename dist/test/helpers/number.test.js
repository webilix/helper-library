"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("../../lib/helpers/number");
test('NUMBER: format', () => {
    expect(number_1.NUMBER.format(1234567890)).toBe('۱,۲۳۴,۵۶۷,۸۹۰');
    expect(number_1.NUMBER.format(1234567890, 'EN')).toBe('1,234,567,890');
    expect(number_1.NUMBER.format(-1234567.89)).toBe('-۱,۲۳۴,۵۶۷.۸۹');
    expect(number_1.NUMBER.format(-1234567.89, 'EN')).toBe('-1,234,567.89');
});
test('NUMBER: toEN', () => {
    expect(number_1.NUMBER.toEN('۰۱۲۳۴۵۶۷۸۹')).toBe('0123456789');
    expect(number_1.NUMBER.toEN('string: ۱۱۱')).toBe('string: 111');
});
test('NUMBER: toFA', () => {
    expect(number_1.NUMBER.toFA(1234567890)).toBe('۱۲۳۴۵۶۷۸۹۰');
    expect(number_1.NUMBER.toFA('string: 111')).toBe('string: ۱۱۱');
});
test('NUMBER: toFileSize', () => {
    const tests = [
        [-1, '', ''],
        [0, '۰ بایت', '0 B'],
        [100, '۱۰۰ بایت', '100 B'],
        [20000, '۱۹.۵۳ کیلوبایت', '19.53 KB'],
        [30000000, '۲۸.۶۱ مگابایت', '28.61 MB'],
        [40000000000, '۳۷.۲۵ گیگابایت', '37.25 GB'],
        [50000000000000, '۴۵.۴۷ ترابایت', '45.47 TB'],
        [2000000000000000, '۱،۸۱۸.۹۹ ترابایت', '1,818.99 TB'],
    ];
    tests.forEach(([n, fa, en]) => {
        expect(number_1.NUMBER.toFileSize(n)).toBe(fa);
        expect(number_1.NUMBER.toFileSize(n, true)).toBe(en);
    });
});
//# sourceMappingURL=number.test.js.map