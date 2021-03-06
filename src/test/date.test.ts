import { DATE } from '../lib/date';

test('DATE: toString', () => {
    const date: Date = new Date('2000-01-01');

    expect(DATE.toString(new Date()).length).toBe(10);
    expect(DATE.toString(date)).toBe('2000-01-01');
    expect(DATE.toString(new Date(date.getTime() + 24 * 3600_000))).toBe('2000-01-02');
});

test('DATE: jalaliPeriod', () => {
    const from: Date = new Date('2000-01-01');
    const to: Date = new Date('2000-01-02');

    expect(DATE.jalaliPeriod(from, from)).toBe('۱۱ دی ۱۳۷۸');
    expect(DATE.jalaliPeriod(from, to)).toBe('۱۱ - ۱۲ دی ۱۳۷۸');
});

test('DATE: getDuration', () => {
    const from: Date = new Date('2000-01-01');
    const to: Date = new Date('2000-01-02');

    expect(DATE.getDuration(from, from)).toBe('00:00:00');
    expect(DATE.getDuration(from, to)).toBe('24:00:00');
});
