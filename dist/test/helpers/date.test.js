"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_1 = require("../../lib/helpers/date");
test('DATE: getDays', () => {
    const from = new Date('2000-01-01');
    const to = new Date('2000-01-02');
    expect(date_1.DATE.getDays(from, from)).toBe(1);
    expect(date_1.DATE.getDays(from, to)).toBe(2);
});
test('DATE: getMonths', () => {
    expect(date_1.DATE.getMonths(new Date('2000-01-02'), new Date('2000-01-01'))).toBe(0);
    expect(date_1.DATE.getMonths(new Date('2000-01-01'), new Date('2000-01-01'))).toBe(1);
    expect(date_1.DATE.getMonths(new Date('2000-01-01'), new Date('2010-01-01'))).toBe(121);
    expect(date_1.DATE.getMonths(new Date('2000-01-31'), new Date('2010-01-01'))).toBe(120);
});
test('DATE: getDuration', () => {
    const from = new Date('2000-01-01');
    const to = new Date('2000-01-02');
    expect(date_1.DATE.getDuration(from, from)).toBe('00:00:00');
    expect(date_1.DATE.getDuration(from, to)).toBe('24:00:00');
});
test('DATE: getSeconds', () => {
    const from = new Date('2000-01-01');
    const to = new Date('2000-01-02');
    expect(date_1.DATE.getSeconds(from, from)).toBe(0);
    expect(date_1.DATE.getSeconds(from, to)).toBe(86400);
});
test('DATE: jalaliPeriod', () => {
    const from = new Date('2000-01-01');
    const to = new Date('2000-01-02');
    expect(date_1.DATE.jalaliPeriod(from, from)).toBe('۱۱ دی ۱۳۷۸');
    expect(date_1.DATE.jalaliPeriod(from, to)).toBe('۱۱ - ۱۲ دی ۱۳۷۸');
});
test('DATE: toString', () => {
    const date = new Date('2000-01-01');
    expect(date_1.DATE.toString(new Date()).length).toBe(10);
    expect(date_1.DATE.toString(date)).toBe('2000-01-01');
    expect(date_1.DATE.toString(new Date(date.getTime() + 24 * 3600000))).toBe('2000-01-02');
});
//# sourceMappingURL=date.test.js.map