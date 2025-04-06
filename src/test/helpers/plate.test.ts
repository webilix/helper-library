import { PLATE } from '../../lib/helpers/plate';

test('PLATE: letters', () => {
    expect(PLATE.letters.length).toBe(24);
});

test('PLATE: getPlate', () => {
    expect(PLATE.getPlate(['12', 'ا', '345', '67']).includes(null)).toBe(false);
    expect(PLATE.getPlate('12-ا-345-67').includes(null)).toBe(false);
    expect(PLATE.getPlate('12.ا.345.67', '.').includes(null)).toBe(false);

    expect(PLATE.getPlate([]).includes(null)).toBe(true);
    expect(PLATE.getPlate(['12']).includes(null)).toBe(true);
    expect(PLATE.getPlate(['12', '345']).includes(null)).toBe(true);
    expect(PLATE.getPlate(['12', '345', '67']).includes(null)).toBe(true);
    expect(PLATE.getPlate(['12', 'ا', '345', '67', '89']).includes(null)).toBe(true);
    expect(PLATE.getPlate('12').includes(null)).toBe(true);
    expect(PLATE.getPlate('12-67').includes(null)).toBe(true);
    expect(PLATE.getPlate('12-345-67').includes(null)).toBe(true);
    expect(PLATE.getPlate('12-ا-345-67-89').includes(null)).toBe(true);
    expect(PLATE.getPlate('12.ا.345.67').includes(null)).toBe(true);
});

test('PLATE: toString', () => {
    expect(PLATE.toString(['12', 'ا', '345', '67'])).toBe('12-ا-345-67');
    expect(PLATE.toString(['12', 'ا', '345', '67'], '.')).toBe('12.ا.345.67');

    expect(PLATE.toString([])).toBe(null);
    expect(PLATE.toString(['12'])).toBe(null);
    expect(PLATE.toString(['12', '345'])).toBe(null);
    expect(PLATE.toString(['12', '345', '67'])).toBe(null);
    expect(PLATE.toString(['12', 'ا', '345', '67', '89'])).toBe(null);
});
