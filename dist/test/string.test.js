"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("../lib/string");
test('STRING: getRandom', () => {
    expect(string_1.STRING.getRandom(12).length).toBe(12);
    expect(string_1.STRING.getRandom(12, 'numeric').length).toBe(12);
    expect(string_1.STRING.getRandom(12, 'alphabetic').length).toBe(12);
    expect(string_1.STRING.getRandom(12, 'alphanumeric').length).toBe(12);
});
test('STRING: escapeHTML', () => {
    expect(string_1.STRING.escapeHTML(`'' <> <> && ""`)).toBe('&#039;&#039; &lt;&gt; &lt;&gt; &amp;&amp; &quot;&quot;');
});
test('STRING: getFileName', () => {
    expect(string_1.STRING.getFileName(`name`, 'ext')).toBe('name.ext');
    expect(string_1.STRING.getFileName(`نام فایل`, 'ext')).toBe('نام-فایل.ext');
    expect(string_1.STRING.getFileName(`نام     فایل`, 'ext')).toBe('نام-فایل.ext');
    expect(string_1.STRING.getFileName(`نام‌فایل`, 'ext', '.')).toBe('نام.فایل.ext');
    expect(string_1.STRING.getFileName(`نام     فایل`, 'ext', '.')).toBe('نام.فایل.ext');
});
//# sourceMappingURL=string.test.js.map