export type UnitVolume = 'LT' | 'ML' | 'GL' | 'BR';
declare const getTitle: (unit: UnitVolume) => string;
declare function getRate(from: UnitVolume): number;
declare function getRate(from: UnitVolume, to: UnitVolume): number;
declare function convert(value: number, from: UnitVolume): number;
declare function convert(value: number, from: UnitVolume, to: UnitVolume): number;
declare function convert(value: number, from: UnitVolume, decimal: number): number;
declare function convert(value: number, from: UnitVolume, to: UnitVolume, decimal: number): number;
export declare const VOLUME: {
    readonly list: UnitVolume[];
    readonly options: {
        id: UnitVolume;
        title: string;
    }[];
    getTitle: typeof getTitle;
    getRate: typeof getRate;
    convert: typeof convert;
};
export {};
//# sourceMappingURL=volume.d.ts.map