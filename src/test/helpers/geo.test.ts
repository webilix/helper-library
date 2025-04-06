import { GEO } from '../../lib/helpers/geo';

test('GEO: distance', () => {
    const from = { latitude: 0, longitude: 0 };

    expect(GEO.distance(from, { latitude: 0, longitude: 0 })).toBe(0);
    expect(GEO.distance(from, { latitude: 1, longitude: 0 })).toBe(111195);
    expect(GEO.distance(from, { latitude: 0, longitude: 1 })).toBe(111195);
    expect(GEO.distance(from, { latitude: 1, longitude: 1 })).toBe(157249);
});
