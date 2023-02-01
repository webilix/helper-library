import { STRING } from '../../lib/helpers/string';

test('STRING: changeNumbers', () => {
    expect(STRING.changeNumbers('0123456789', 'EN')).toBe('0123456789');
    expect(STRING.changeNumbers('0123456789', 'FA')).toBe('۰۱۲۳۴۵۶۷۸۹');
    expect(STRING.changeNumbers('۰۱۲۳۴۵۶۷۸۹', 'EN')).toBe('0123456789');
    expect(STRING.changeNumbers('۰۱۲۳۴۵۶۷۸۹', 'FA')).toBe('۰۱۲۳۴۵۶۷۸۹');
});

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
    '۰۱۲۳۴۵۶۷۸۹آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ'.split('').forEach((char: string) => {
        expect(STRING.hasPersian(char)).toBe(true);
    });

    expect(STRING.hasPersian('English')).toBe(false);
    expect(STRING.hasPersian('~!@#$%^&*()_+{}[]=-0987654321`')).toBe(false);
    expect(STRING.hasPersian('<a href="google.com">GOOGLE</a>')).toBe(false);
});

test('STRING: toFileSize', () => {
    expect(STRING.toFileSize('+1B')).toBe(1);
    [0, 1, 1.1, 1.11, 1.111].forEach((factor: number) => {
        expect(STRING.toFileSize(`${factor}B`)).toBe(factor * 1024 ** 0);
        expect(STRING.toFileSize(`${factor}KB`)).toBe(factor * 1024 ** 1);
        expect(STRING.toFileSize(`${factor}MB`)).toBe(factor * 1024 ** 2);
        expect(STRING.toFileSize(`${factor}GB`)).toBe(factor * 1024 ** 3);
        expect(STRING.toFileSize(`${factor}TB`)).toBe(factor * 1024 ** 4);
        expect(STRING.toFileSize(`${factor}b`)).toBe(factor * 1024 ** 0);
        expect(STRING.toFileSize(`${factor}kb`)).toBe(factor * 1024 ** 1);
        expect(STRING.toFileSize(`${factor}mb`)).toBe(factor * 1024 ** 2);
        expect(STRING.toFileSize(`${factor}gb`)).toBe(factor * 1024 ** 3);
        expect(STRING.toFileSize(`${factor}tb`)).toBe(factor * 1024 ** 4);
    });

    expect(STRING.toFileSize('')).toBe(0);
    expect(STRING.toFileSize('B')).toBe(0);
    expect(STRING.toFileSize('K')).toBe(0);
    expect(STRING.toFileSize('M')).toBe(0);
    expect(STRING.toFileSize('G')).toBe(0);
    expect(STRING.toFileSize('T')).toBe(0);
    expect(STRING.toFileSize('.KB')).toBe(0);
    expect(STRING.toFileSize('1.KB')).toBe(0);
    expect(STRING.toFileSize('-1KB')).toBe(0);
});
