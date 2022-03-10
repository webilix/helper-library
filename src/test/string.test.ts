import { STRING } from '../lib/string';

test('STRING: getRandom', () => {
    expect(STRING.getRandom(12).length).toBe(12);
    expect(STRING.getRandom(12, 'numeric').length).toBe(12);
    expect(STRING.getRandom(12, 'alphabetic').length).toBe(12);
    expect(STRING.getRandom(12, 'alphanumeric').length).toBe(12);
});

test('STRING: escapeHTML', () => {
    expect(STRING.escapeHTML(`'' <> <> && ""`)).toBe('&#039;&#039; &lt;&gt; &lt;&gt; &amp;&amp; &quot;&quot;');
});

test('STRING: getFileName', () => {
    expect(STRING.getFileName(`name`, 'ext')).toBe('name.ext');
    expect(STRING.getFileName(`نام فایل`, 'ext')).toBe('نام-فایل.ext');
    expect(STRING.getFileName(`نام     فایل`, 'ext')).toBe('نام-فایل.ext');
    expect(STRING.getFileName(`نام‌فایل`, 'ext', '.')).toBe('نام.فایل.ext');
    expect(STRING.getFileName(`نام     فایل`, 'ext', '.')).toBe('نام.فایل.ext');
});
