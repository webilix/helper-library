import { COLOR } from '../../lib/helpers/color';

test('COLOR: getFormat', () => {
    expect(COLOR.getFormat('')).toBe(null);
    expect(COLOR.getFormat('#000')).toBe('HEX');
    expect(COLOR.getFormat('hsl(0,0%,0%)')).toBe('HSL');
    expect(COLOR.getFormat('rgb(0,0,0)')).toBe('RGB');
});

test('COLOR: toHEX', () => {
    const hex = '#7c8b74';
    const hsl = 'hsl(99, 9%, 50%)';
    const rgb = 'rgb(124, 139, 116)';

    expect(COLOR.toHEX('')).toBe(null);
    expect(COLOR.toHEX(hex)).toBe(hex);
    expect(COLOR.toHEX(hsl)).toBe(hex);
    expect(COLOR.toHEX(rgb)).toBe(hex);
});

test('COLOR: toHSL', () => {
    const hex = '#7c8b74';
    const hsl = 'hsl(99, 9%, 50%)';
    const rgb = 'rgb(124, 139, 116)';

    expect(COLOR.toHSL('')).toBe(null);
    expect(COLOR.toHSL(hex)).toBe(hsl);
    expect(COLOR.toHSL(hsl)).toBe(hsl);
    expect(COLOR.toHSL(rgb)).toBe(hsl);
});
