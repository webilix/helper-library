import { NUMBER } from '../lib/number';

test('NUMBER: toFA', () => {
    expect(NUMBER.toFA(1234567890)).toBe('۱۲۳۴۵۶۷۸۹۰');
    expect(NUMBER.toFA('string: 111')).toBe('string: ۱۱۱');
});

test('NUMBER: format', () => {
    expect(NUMBER.format(1234567890)).toBe('۱,۲۳۴,۵۶۷,۸۹۰');
    expect(NUMBER.format(1234567890, 'EN')).toBe('1,234,567,890');
    expect(NUMBER.format(-1234567.89)).toBe('-۱,۲۳۴,۵۶۷.۸۹');
    expect(NUMBER.format(-1234567.89, 'EN')).toBe('-1,234,567.89');
});
