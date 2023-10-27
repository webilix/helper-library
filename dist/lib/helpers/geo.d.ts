import { IGeoCoordinates } from '../shared';
declare function coordinates(): Promise<IGeoCoordinates>;
declare function distance(from: {
    latitude: number;
    longitude: number;
}, to: {
    latitude: number;
    longitude: number;
}): number;
export declare const GEO: {
    coordinates: typeof coordinates;
    distance: typeof distance;
};
export {};
//# sourceMappingURL=geo.d.ts.map