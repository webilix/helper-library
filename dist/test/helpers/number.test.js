"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("../../lib/helpers/number");
test('NUMBER: format', () => {
    expect(number_1.NUMBER.format(1234567890)).toBe('۱,۲۳۴,۵۶۷,۸۹۰');
    expect(number_1.NUMBER.format(1234567890, 'EN')).toBe('1,234,567,890');
    expect(number_1.NUMBER.format(-1234567.89)).toBe('-۱,۲۳۴,۵۶۷.۸۹');
    expect(number_1.NUMBER.format(-1234567.89, 'EN')).toBe('-1,234,567.89');
});
test('NUMBER: getTitle', () => {
    expect(number_1.NUMBER.getTitle(123456789)).toBe('صد و بیست و سه میلیون و چهارصد و پنجاه و شش هزار و هفتصد و هشتاد و نه');
    expect(number_1.NUMBER.getTitle(0)).toBe('صفر');
    expect(number_1.NUMBER.getTitle(1)).toBe('یک');
    expect(number_1.NUMBER.getTitle(0.1)).toBe('یک دهم');
    expect(number_1.NUMBER.getTitle(0.1001)).toBe('یک دهم');
    expect(number_1.NUMBER.getTitle(0.01)).toBe('یک صدم');
    expect(number_1.NUMBER.getTitle(0.0101)).toBe('یک صدم');
    expect(number_1.NUMBER.getTitle(0.001)).toBe('یک هزارم');
    expect(number_1.NUMBER.getTitle(0.0011)).toBe('یک هزارم');
    expect(number_1.NUMBER.getTitle(1000)).toBe('یک هزار');
    expect(number_1.NUMBER.getTitle(1000000)).toBe('یک میلیون');
    expect(number_1.NUMBER.getTitle(1000000000)).toBe('یک میلیارد');
    expect(number_1.NUMBER.getTitle(1000000000000)).toBe('یک تریلیون');
    expect(number_1.NUMBER.getTitle(1200000000000)).toBe('یک تریلیون و دویست میلیارد');
    expect(number_1.NUMBER.getTitle(1200300000000)).toBe('یک تریلیون و دویست میلیارد و سیصد میلیون');
    expect(number_1.NUMBER.getTitle(1200300400000)).toBe('یک تریلیون و دویست میلیارد و سیصد میلیون و چهارصد هزار');
    expect(number_1.NUMBER.getTitle(1200300400500)).toBe('یک تریلیون و دویست میلیارد و سیصد میلیون و چهارصد هزار و پانصد');
    expect(number_1.NUMBER.getTitle(1020030040050)).toBe('یک تریلیون و بیست میلیارد و سی میلیون و چهل هزار و پنجاه');
    expect(number_1.NUMBER.getTitle(1002003004005)).toBe('یک تریلیون و دو میلیارد و سه میلیون و چهار هزار و پنچ');
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