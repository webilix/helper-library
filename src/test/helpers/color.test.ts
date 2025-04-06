import { COLOR } from '../../lib/helpers/color';

test('COLOR: getFormat', () => {
    expect(COLOR.getFormat('')).toBe(null);
    expect(COLOR.getFormat('#000')).toBe('HEX');
    expect(COLOR.getFormat('hsl(0,0%,0%)')).toBe('HSL');
    expect(COLOR.getFormat('rgb(0,0,0)')).toBe('RGB');
});

test('COLOR: getGradient', () => {
    const gradient: string[] = COLOR.getGradient('rgb(0,0,0)', 'hsl(360, 100%, 100%)', 5, 'HEX');
    const result: string[] = ['#000000', '#3f3f3f', '#7f7f7f', '#bfbfbf', '#ffffff'];
    expect(gradient.join('-')).toBe(result.join('-'));

    const rgb: string[] = COLOR.getGradient('rgb(0,0,0)', 'hsl(360, 100%, 100%)', 5, 'RGB');
    for (let c = 0; c < rgb.length; c++) expect(rgb[c]).toBe(COLOR.toRGB(result[c]));

    const hsl: string[] = COLOR.getGradient('rgb(0,0,0)', 'hsl(360, 100%, 100%)', 5, 'HSL');
    for (let c = 0; c < rgb.length; c++) expect(hsl[c]).toBe(COLOR.toHSL(result[c]));
});

test('COLOR: getShade', () => {
    const shade: string[] = COLOR.getShade('rgb(64,128,192)', 5, 'HEX');
    const result: string[] = ['#000000', '#204060', '#4080c0', '#9fbfdf', '#ffffff'];
    expect(shade.join('-')).toBe(result.join('-'));

    const rgb: string[] = COLOR.getShade('rgb(64,128,192)', 5, 'RGB');
    for (let c = 0; c < rgb.length; c++) expect(rgb[c]).toBe(COLOR.toRGB(result[c]));

    const hsl: string[] = COLOR.getShade('rgb(64,128,192)', 5, 'HSL');
    for (let c = 0; c < rgb.length; c++) expect(hsl[c]).toBe(COLOR.toHSL(result[c]));
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

test('COLOR: toRGB', () => {
    const hex = '#7c8b74';
    const hsl = 'hsl(99, 9%, 50%)';
    const rgb = 'rgb(124, 139, 116)';

    expect(COLOR.toRGB('')).toBe(null);
    expect(COLOR.toRGB(hex)).toBe(rgb);
    expect(COLOR.toRGB(hsl)).toBe(rgb);
    expect(COLOR.toRGB(rgb)).toBe(rgb);
});
