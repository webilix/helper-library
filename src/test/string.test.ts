import { STRING } from '../lib/string';

test('STRING: escapeHTML', () => {
    expect(STRING.escapeHTML(`'' <> <> && ""`)).toBe('&#039;&#039; &lt;&gt; &lt;&gt; &amp;&amp; &quot;&quot;');
});

test('STRING: getBankCardView', () => {
    expect(STRING.getBankCardView(`1234123412341234`)).toBe('');
    expect(STRING.getBankCardView(`1234123412341238`)).toBe('1234-1234-1234-1238');
    expect(STRING.getBankCardView(`1234123412341238`, '.')).toBe('1234.1234.1234.1238');
});

test('STRING: getFileName', () => {
    expect(STRING.getFileName(`name`, 'ext')).toBe('name.ext');
    expect(STRING.getFileName(`نام فایل`, 'ext')).toBe('نام-فایل.ext');
    expect(STRING.getFileName(`نام     فایل`, 'ext')).toBe('نام-فایل.ext');
    expect(STRING.getFileName(`نام‌فایل`, 'ext', '.')).toBe('نام.فایل.ext');
    expect(STRING.getFileName(`نام     فایل`, 'ext', '.')).toBe('نام.فایل.ext');
});

test('STRING: getMobileView', () => {
    expect(STRING.getMobileView(`9123456789`)).toBe('');
    expect(STRING.getMobileView(`09123456789`)).toBe('0912-345-6789');
    expect(STRING.getMobileView(`09123456789`, '.')).toBe('0912.345.6789');
});

test('STRING: getRandom', () => {
    expect(STRING.getRandom(12).length).toBe(12);
    expect(STRING.getRandom(12, 'numeric').length).toBe(12);
    expect(STRING.getRandom(12, 'alphabetic').length).toBe(12);
    expect(STRING.getRandom(12, 'alphanumeric').length).toBe(12);
});

test('STRING: hasPersian', () => {
    'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ'.split('').forEach((char: string) => {
        expect(STRING.hasPersian(char)).toBe(true);
    });

    expect(STRING.hasPersian('English')).toBe(false);
    expect(STRING.hasPersian('~!@#$%^&*()_+{}[]=-0987654321`')).toBe(false);
    expect(STRING.hasPersian('<a href="google.com">GOOGLE</a>')).toBe(false);
});
