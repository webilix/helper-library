import { NUMBER } from '../../lib/helpers/number';

test('NUMBER: format', () => {
    expect(NUMBER.format(1234567890)).toBe('۱,۲۳۴,۵۶۷,۸۹۰');
    expect(NUMBER.format(1234567890, 'EN')).toBe('1,234,567,890');
    expect(NUMBER.format(-1234567.89)).toBe('-۱,۲۳۴,۵۶۷.۸۹');
    expect(NUMBER.format(-1234567.89, 'EN')).toBe('-1,234,567.89');
});

test('NUMBER: getTitle', () => {
    expect(NUMBER.getTitle(123456789)).toBe('صد و بیست و سه میلیون و چهارصد و پنجاه و شش هزار و هفتصد و هشتاد و نه');
    expect(NUMBER.getTitle(0)).toBe('صفر');
    expect(NUMBER.getTitle(1)).toBe('یک');
    expect(NUMBER.getTitle(0.1)).toBe('یک دهم');
    expect(NUMBER.getTitle(0.1001)).toBe('یک دهم');
    expect(NUMBER.getTitle(0.01)).toBe('یک صدم');
    expect(NUMBER.getTitle(0.0101)).toBe('یک صدم');
    expect(NUMBER.getTitle(0.001)).toBe('یک هزارم');
    expect(NUMBER.getTitle(0.0011)).toBe('یک هزارم');
    expect(NUMBER.getTitle(1_000)).toBe('یک هزار');
    expect(NUMBER.getTitle(1_000_000)).toBe('یک میلیون');
    expect(NUMBER.getTitle(1_000_000_000)).toBe('یک میلیارد');
    expect(NUMBER.getTitle(1_000_000_000_000)).toBe('یک تریلیون');
    expect(NUMBER.getTitle(1_200_000_000_000)).toBe('یک تریلیون و دویست میلیارد');
    expect(NUMBER.getTitle(1_200_300_000_000)).toBe('یک تریلیون و دویست میلیارد و سیصد میلیون');
    expect(NUMBER.getTitle(1_200_300_400_000)).toBe('یک تریلیون و دویست میلیارد و سیصد میلیون و چهارصد هزار');
    expect(NUMBER.getTitle(1_200_300_400_500)).toBe('یک تریلیون و دویست میلیارد و سیصد میلیون و چهارصد هزار و پانصد');
    expect(NUMBER.getTitle(1_020_030_040_050)).toBe('یک تریلیون و بیست میلیارد و سی میلیون و چهل هزار و پنجاه');
    expect(NUMBER.getTitle(1_002_003_004_005)).toBe('یک تریلیون و دو میلیارد و سه میلیون و چهار هزار و پنچ');
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
