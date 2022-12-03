"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("../lib/string");
test('STRING: escapeHTML', () => {
    expect(string_1.STRING.escapeHTML(`'' <> <> && ""`)).toBe('&#039;&#039; &lt;&gt; &lt;&gt; &amp;&amp; &quot;&quot;');
});
test('STRING: getBankCardView', () => {
    expect(string_1.STRING.getBankCardView(`1234123412341234`)).toBe('');
    expect(string_1.STRING.getBankCardView(`1234123412341238`)).toBe('1234-1234-1234-1238');
    expect(string_1.STRING.getBankCardView(`1234123412341238`, '.')).toBe('1234.1234.1234.1238');
});
test('STRING: getFileName', () => {
    expect(string_1.STRING.getFileName(`name`, 'ext')).toBe('name.ext');
    expect(string_1.STRING.getFileName(`نام فایل`, 'ext')).toBe('نام-فایل.ext');
    expect(string_1.STRING.getFileName(`نام     فایل`, 'ext')).toBe('نام-فایل.ext');
    expect(string_1.STRING.getFileName(`نام‌فایل`, 'ext', '.')).toBe('نام.فایل.ext');
    expect(string_1.STRING.getFileName(`نام     فایل`, 'ext', '.')).toBe('نام.فایل.ext');
});
test('STRING: getMobileView', () => {
    expect(string_1.STRING.getMobileView(`9123456789`)).toBe('');
    expect(string_1.STRING.getMobileView(`09123456789`)).toBe('0912-345-6789');
    expect(string_1.STRING.getMobileView(`09123456789`, '.')).toBe('0912.345.6789');
});
test('STRING: getRandom', () => {
    expect(string_1.STRING.getRandom(12).length).toBe(12);
    expect(string_1.STRING.getRandom(12, 'numeric').length).toBe(12);
    expect(string_1.STRING.getRandom(12, 'alphabetic').length).toBe(12);
    expect(string_1.STRING.getRandom(12, 'alphanumeric').length).toBe(12);
});
//# sourceMappingURL=string.test.js.map