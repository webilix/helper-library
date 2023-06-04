"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geo_1 = require("../../lib/helpers/geo");
test('GEO: distance', () => {
    const from = { latitude: 0, longitude: 0 };
    expect(geo_1.GEO.distance(from, { latitude: 0, longitude: 0 })).toBe(0);
    expect(geo_1.GEO.distance(from, { latitude: 1, longitude: 0 })).toBe(111195);
    expect(geo_1.GEO.distance(from, { latitude: 0, longitude: 1 })).toBe(111195);
    expect(geo_1.GEO.distance(from, { latitude: 1, longitude: 1 })).toBe(157249);
});
//# sourceMappingURL=geo.test.js.map