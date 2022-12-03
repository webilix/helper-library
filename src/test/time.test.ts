import { TIME } from '../lib/time';

test('TIME: getDuration', () => {
    expect(TIME.getDuration(0)).toBe('00:00:00');
    expect(TIME.getDuration(1)).toBe('00:00:01');
    expect(TIME.getDuration(10)).toBe('00:00:10');
    expect(TIME.getDuration(100)).toBe('00:01:40');
    expect(TIME.getDuration(1_000)).toBe('00:16:40');
    expect(TIME.getDuration(10_000)).toBe('02:46:40');
    expect(TIME.getDuration(100_000)).toBe('27:46:40');
    expect(TIME.getDuration(1_000_000)).toBe('277:46:40');
});

test('TIME: toString', () => {
    expect(TIME.toString(new Date()).length).toBe(8);
});
