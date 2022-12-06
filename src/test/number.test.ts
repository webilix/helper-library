import { NUMBER } from '../lib/number';

test('NUMBER: format', () => {
    expect(NUMBER.format(1234567890)).toBe('۱,۲۳۴,۵۶۷,۸۹۰');
    expect(NUMBER.format(1234567890, 'EN')).toBe('1,234,567,890');
    expect(NUMBER.format(-1234567.89)).toBe('-۱,۲۳۴,۵۶۷.۸۹');
    expect(NUMBER.format(-1234567.89, 'EN')).toBe('-1,234,567.89');
});

test('NUMBER: toEN', () => {
    expect(NUMBER.toEN('۰۱۲۳۴۵۶۷۸۹')).toBe('0123456789');
    expect(NUMBER.toEN('string: ۱۱۱')).toBe('string: 111');
});

test('NUMBER: toFA', () => {
    expect(NUMBER.toFA(1234567890)).toBe('۱۲۳۴۵۶۷۸۹۰');
    expect(NUMBER.toFA('string: 111')).toBe('string: ۱۱۱');
});

test('NUMBER: toFileSize', () => {
    const tests: [number, string, string][] = [
        [-1, '', ''],
        [0, '۰ بایت', '0 B'],
        [100, '۱۰۰ بایت', '100 B'],
        [20000, '۱۹.۵۳ کیلوبایت', '19.53 KB'],
        [30000000, '۲۸.۶۱ مگابایت', '28.61 MB'],
        [40000000000, '۳۷.۲۵ گیگابایت', '37.25 GB'],
        [50000000000000, '۴۵.۴۷ ترابایت', '45.47 TB'],
        [2000000000000000, '۱،۸۱۸.۹۹ ترابایت', '1,818.99 TB'],
    ];

    tests.forEach(([n, fa, en]: [number, string, string]) => {
        expect(NUMBER.toFileSize(n)).toBe(fa);
        expect(NUMBER.toFileSize(n, true)).toBe(en);
    });
});
