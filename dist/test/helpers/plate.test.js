"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plate_1 = require("../../lib/helpers/plate");
test('PLATE: letters', () => {
    expect(plate_1.PLATE.letters.length).toBe(24);
});
test('PLATE: getPlate', () => {
    expect(plate_1.PLATE.getPlate(['12', 'ا', '345', '67']).includes(null)).toBe(false);
    expect(plate_1.PLATE.getPlate('12-ا-345-67').includes(null)).toBe(false);
    expect(plate_1.PLATE.getPlate('12.ا.345.67', '.').includes(null)).toBe(false);
    expect(plate_1.PLATE.getPlate([]).includes(null)).toBe(true);
    expect(plate_1.PLATE.getPlate(['12']).includes(null)).toBe(true);
    expect(plate_1.PLATE.getPlate(['12', '345']).includes(null)).toBe(true);
    expect(plate_1.PLATE.getPlate(['12', '345', '67']).includes(null)).toBe(true);
    expect(plate_1.PLATE.getPlate(['12', 'ا', '345', '67', '89']).includes(null)).toBe(true);
    expect(plate_1.PLATE.getPlate('12').includes(null)).toBe(true);
    expect(plate_1.PLATE.getPlate('12-67').includes(null)).toBe(true);
    expect(plate_1.PLATE.getPlate('12-345-67').includes(null)).toBe(true);
    expect(plate_1.PLATE.getPlate('12-ا-345-67-89').includes(null)).toBe(true);
    expect(plate_1.PLATE.getPlate('12.ا.345.67').includes(null)).toBe(true);
});
test('PLATE: toString', () => {
    expect(plate_1.PLATE.toString(['12', 'ا', '345', '67'])).toBe('12-ا-345-67');
    expect(plate_1.PLATE.toString(['12', 'ا', '345', '67'], '.')).toBe('12.ا.345.67');
    expect(plate_1.PLATE.toString([])).toBe(null);
    expect(plate_1.PLATE.toString(['12'])).toBe(null);
    expect(plate_1.PLATE.toString(['12', '345'])).toBe(null);
    expect(plate_1.PLATE.toString(['12', '345', '67'])).toBe(null);
    expect(plate_1.PLATE.toString(['12', 'ا', '345', '67', '89'])).toBe(null);
});
//# sourceMappingURL=plate.test.js.map