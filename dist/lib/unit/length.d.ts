export type UnitLength = 'MT' | 'MM' | 'CM' | 'KM' | 'IN' | 'FT' | 'YD' | 'ML';
declare function getRate(from: UnitLength): number;
declare function getRate(from: UnitLength, to: UnitLength): number;
declare function convert(value: number, from: UnitLength): number;
declare function convert(value: number, from: UnitLength, to: UnitLength): number;
declare function convert(value: number, from: UnitLength, decimal: number): number;
declare function convert(value: number, from: UnitLength, to: UnitLength, decimal: number): number;
export declare const LENGTH: {
    readonly list: UnitLength[];
    readonly options: {
        id: UnitLength;
        title: string;
    }[];
    getTitle: (unit: UnitLength) => string;
    getRate: typeof getRate;
    convert: typeof convert;
};
export {};
//# sourceMappingURL=length.d.ts.map