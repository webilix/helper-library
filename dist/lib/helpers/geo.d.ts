import { IGeoCoordinates, IGeoRouteLength } from '../shared';
declare function coordinates(): Promise<IGeoCoordinates>;
declare function distance(from: IGeoCoordinates, to: IGeoCoordinates): number;
declare function routeLength(route: IGeoCoordinates[]): IGeoRouteLength;
export declare const GEO: {
    coordinates: typeof coordinates;
    distance: typeof distance;
    routeLength: typeof routeLength;
};
export {};
//# sourceMappingURL=geo.d.ts.map