"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_1 = require("../lib/date");
test('DATE: toString', () => {
    const date = new Date('2000-01-01');
    expect(date_1.DATE.toString(new Date()).length).toBe(10);
    expect(date_1.DATE.toString(date)).toBe('2000-01-01');
    expect(date_1.DATE.toString(new Date(date.getTime() + 24 * 3600000))).toBe('2000-01-02');
});
test('DATE: jalaliPeriod', () => {
    const from = new Date('2000-01-01');
    const to = new Date('2000-01-02');
    expect(date_1.DATE.jalaliPeriod(from, from)).toBe('۱۱ دی ۱۳۷۸');
    expect(date_1.DATE.jalaliPeriod(from, to)).toBe('۱۱ - ۱۲ دی ۱۳۷۸');
});
test('DATE: getDuration', () => {
    const from = new Date('2000-01-01');
    const to = new Date('2000-01-02');
    expect(date_1.DATE.getDuration(from, from)).toBe('00:00:00');
    expect(date_1.DATE.getDuration(from, to)).toBe('24:00:00');
});
//# sourceMappingURL=date.test.js.map