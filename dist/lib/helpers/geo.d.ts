import { IGeoLocation } from '../shared';
export declare const GEO: {
    location: () => Promise<IGeoLocation>;
    distance: (from: {
        latitude: number;
        longitude: number;
    }, to: {
        latitude: number;
        longitude: number;
    }) => number;
};
//# sourceMappingURL=geo.d.ts.map