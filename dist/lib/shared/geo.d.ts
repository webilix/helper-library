export interface IGeoCoordinates {
    latitude: number;
    longitude: number;
}
export interface IGeoRouteLength {
    length: number;
    parts: {
        from: IGeoCoordinates;
        to: IGeoCoordinates;
        length: number;
    }[];
}
//# sourceMappingURL=geo.d.ts.map