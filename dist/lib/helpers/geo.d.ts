import { IGeoCoordinates } from '../shared';
export declare const GEO: {
    coordinates: () => Promise<IGeoCoordinates>;
    distance: (from: {
        latitude: number;
        longitude: number;
    }, to: {
        latitude: number;
        longitude: number;
    }) => number;
};
//# sourceMappingURL=geo.d.ts.map