import { COLOR } from '../../lib/helpers/color';

test('COLOR: getFormat', () => {
    expect(COLOR.getFormat('')).toBe(null);
    expect(COLOR.getFormat('#000')).toBe('HEX');
    expect(COLOR.getFormat('hsl(0,0%,0%)')).toBe('HSL');
    expect(COLOR.getFormat('rgb(0,0,0)')).toBe('RGB');
});

test('COLOR: toHEX', () => {
    const hex: string = '#7b8c73';
    const hsl: string = 'hsl(100, 10%, 50%)';
    const rgb: string = 'rgb(123, 140, 115)';

    expect(COLOR.toHEX('')).toBe(null);
    expect(COLOR.toHEX(hex)).toBe(hex);
    expect(COLOR.toHEX(hsl)).toBe(hex);
    expect(COLOR.toHEX(rgb)).toBe(hex);
});
