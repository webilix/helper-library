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
test('GEO: routeLength', () => {
    const coordinates = { latitude: 0, longitude: 0 };
    expect(geo_1.GEO.routeLength([coordinates]).length).toBe(0);
    expect(geo_1.GEO.routeLength([coordinates, coordinates]).length).toBe(0);
    const route1 = [
        { latitude: 0, longitude: 0 },
        { latitude: 1, longitude: 0 },
        { latitude: 0, longitude: 1 },
        { latitude: 1, longitude: 1 },
    ];
    expect(geo_1.GEO.routeLength(route1).length).toBe(379639);
    const route2 = [
        { latitude: 35.6997865, longitude: 51.3396374 },
        { latitude: 35.7004409, longitude: 51.339337 },
        { latitude: 35.7006984, longitude: 51.3385324 },
        { latitude: 35.700677, longitude: 51.3368479 },
        { latitude: 35.7003337, longitude: 51.3356892 },
        { latitude: 35.6998401, longitude: 51.3354317 },
        { latitude: 35.6991535, longitude: 51.3355605 },
        { latitude: 35.6988853, longitude: 51.3362042 },
        { latitude: 35.6987672, longitude: 51.3372342 },
        { latitude: 35.6987887, longitude: 51.3380388 },
        { latitude: 35.6989604, longitude: 51.3389079 },
        { latitude: 35.6991857, longitude: 51.3394336 },
        { latitude: 35.699647, longitude: 51.339616 },
    ];
    expect(geo_1.GEO.routeLength(route2).length).toBe(977);
});
//# sourceMappingURL=geo.test.js.map