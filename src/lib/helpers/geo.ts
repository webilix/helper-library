import { IGeoCoordinates, IGeoRouteLength } from '../shared';

function coordinates(): Promise<IGeoCoordinates> {
    return new Promise<IGeoCoordinates>((resolve, reject) => {
        try {
            if (!navigator || !navigator.geolocation) {
                reject('Geolocation is not supported by this browser.');
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (response: GeolocationPosition) =>
                    resolve({
                        latitude: response.coords.latitude,
                        longitude: response.coords.longitude,
                    }),
                (err: GeolocationPositionError) => reject(err.message),
            );
        } catch (e: any) {
            reject(e.message || 'navigator is not defined');
        }
    });
}

function distance(from: IGeoCoordinates, to: IGeoCoordinates): number {
    const R = 6371e3; // metres
    const φ1 = (from.latitude * Math.PI) / 180; // φ, λ in radians
    const φ2 = (to.latitude * Math.PI) / 180;
    const Δφ = ((to.latitude - from.latitude) * Math.PI) / 180;
    const Δλ = ((to.longitude - from.longitude) * Math.PI) / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.round(R * c); // in metres
}

function routeLength(route: IGeoCoordinates[]): IGeoRouteLength {
    const parts: { from: IGeoCoordinates; to: IGeoCoordinates; length: number }[] = [];
    route.forEach((coordinates, index: number) => {
        if (index === 0) return;

        const from: IGeoCoordinates = route[index - 1];
        const to: IGeoCoordinates = coordinates;
        parts.push({ from, to, length: distance(from, to) });
    });

    return {
        length: parts.reduce((sum: number, p) => sum + p.length, 0),
        parts,
    };
}

export const GEO = {
    coordinates,
    distance,
    routeLength,
};
