"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = require("../lib/time");
test('TIME: toString', () => {
    expect(time_1.TIME.toString(new Date()).length).toBe(8);
});
test('TIME: getDuration', () => {
    expect(time_1.TIME.getDuration(0)).toBe('00:00:00');
    expect(time_1.TIME.getDuration(1)).toBe('00:00:01');
    expect(time_1.TIME.getDuration(10)).toBe('00:00:10');
    expect(time_1.TIME.getDuration(100)).toBe('00:01:40');
    expect(time_1.TIME.getDuration(1000)).toBe('00:16:40');
    expect(time_1.TIME.getDuration(10000)).toBe('02:46:40');
    expect(time_1.TIME.getDuration(100000)).toBe('27:46:40');
    expect(time_1.TIME.getDuration(1000000)).toBe('277:46:40');
});
//# sourceMappingURL=time.test.js.map