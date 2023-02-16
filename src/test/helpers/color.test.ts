import { COLOR } from '../../lib/helpers/color';

test('COLOR: getFormat', () => {
    expect(COLOR.getFormat('')).toBe(null);
    expect(COLOR.getFormat('#000')).toBe('HEX');
    expect(COLOR.getFormat('hsl(0,0%,0%)')).toBe('HSL');
    expect(COLOR.getFormat('rgb(0,0,0)')).toBe('RGB');
});
