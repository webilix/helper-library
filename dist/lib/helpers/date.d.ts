declare function getDays(from: Date): number;
declare function getDays(from: Date, to: Date): number;
declare function getDays(from: Date, timezone: string): number;
declare function getDays(from: Date, to: Date, timezone: string): number;
declare function getMonths(from: Date): number;
declare function getMonths(from: Date, to: Date): number;
declare function getMonths(from: Date, timezone: string): number;
declare function getMonths(from: Date, to: Date, timezone: string): number;
declare function getDuration(from: Date): string;
declare function getDuration(from: Date, to: Date): string;
declare function getSeconds(from: Date): number;
declare function getSeconds(from: Date, to: Date): number;
declare function jalaliPeriod(from: Date): string;
declare function jalaliPeriod(from: Date, to: Date): string;
declare function jalaliPeriod(from: Date, timezone: string): string;
declare function jalaliPeriod(from: Date, to: Date, timezone: string): string;
declare function toString(): string;
declare function toString(date: Date): string;
export declare const DATE: {
    getDays: typeof getDays;
    getMonths: typeof getMonths;
    getDuration: typeof getDuration;
    getSeconds: typeof getSeconds;
    jalaliPeriod: typeof jalaliPeriod;
    toString: typeof toString;
};
export {};
//# sourceMappingURL=date.d.ts.map