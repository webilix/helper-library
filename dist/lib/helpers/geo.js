"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GEO = void 0;
exports.GEO = {
    coordinates: () => {
        return new Promise((resolve, reject) => {
            try {
                if (!navigator || !navigator.geolocation) {
                    reject('Geolocation is not supported by this browser.');
                    return;
                }
                navigator.geolocation.getCurrentPosition((response) => resolve({
                    latitude: response.coords.latitude,
                    longitude: response.coords.longitude,
                }), (err) => reject(err.message));
            }
            catch (e) {
                reject(e.message || 'navigator is not defined');
            }
        });
    },
    distance: (from, to) => {
        const R = 6371e3; // metres
        const φ1 = (from.latitude * Math.PI) / 180; // φ, λ in radians
        const φ2 = (to.latitude * Math.PI) / 180;
        const Δφ = ((to.latitude - from.latitude) * Math.PI) / 180;
        const Δλ = ((to.longitude - from.longitude) * Math.PI) / 180;
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round(R * c); // in metres
    },
};
//# sourceMappingURL=geo.js.map