import { UNIT } from '../lib/unit';

test(`UNIT: AREA`, () => {
    expect(UNIT.AREA.list.length).toBe(8);
    expect(UNIT.AREA.options.length).toBe(8);

    expect(UNIT.AREA.convert(10, 'FT')).toBe(0.929);
    expect(UNIT.AREA.convert(10, 'FT', 5)).toBe(0.92903);
});

test(`UNIT: LENGTH`, () => {
    expect(UNIT.LENGTH.list.length).toBe(8);
    expect(UNIT.LENGTH.options.length).toBe(8);

    expect(UNIT.LENGTH.convert(10, 'FT')).toBe(3.048);
    expect(UNIT.LENGTH.convert(10, 'FT', 5)).toBe(3.048);
});

test(`UNIT: VOLUME`, () => {
    expect(UNIT.VOLUME.list.length).toBe(4);
    expect(UNIT.VOLUME.options.length).toBe(4);

    expect(UNIT.VOLUME.convert(10, 'GL')).toBe(37.854);
    expect(UNIT.VOLUME.convert(10, 'GL', 5)).toBe(37.85412);
});

test(`UNIT: WEIGHT`, () => {
    expect(UNIT.WEIGHT.list.length).toBe(5);
    expect(UNIT.WEIGHT.options.length).toBe(5);

    expect(UNIT.WEIGHT.convert(10, 'OZ')).toBe(0.283);
    expect(UNIT.WEIGHT.convert(10, 'OZ', 5)).toBe(0.2835);
});
