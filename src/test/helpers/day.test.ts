import { DAY } from '../../lib/helpers/day';

test('DAY: toTitle', () => {
    expect(DAY.toTitle('01-01')).toBe('1 فروردین');
    expect(DAY.toTitle('12-30')).toBe('30 اسفند');
});

test('DAY: toTitle (THROW)', () => {
    expect(() => DAY.toTitle('00-01')).toThrow('Value is not a valid jalali day');
});
