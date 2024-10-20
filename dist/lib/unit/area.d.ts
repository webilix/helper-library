export type UnitArea = 'MT' | 'CM' | 'KM' | 'IN' | 'FT' | 'YD' | 'ML' | 'HT';
declare function getRate(from: UnitArea): number;
declare function getRate(from: UnitArea, to: UnitArea): number;
declare function convert(value: number, from: UnitArea): number;
declare function convert(value: number, from: UnitArea, to: UnitArea): number;
declare function convert(value: number, from: UnitArea, decimal: number): number;
declare function convert(value: number, from: UnitArea, to: UnitArea, decimal: number): number;
export declare const AREA: {
    readonly list: UnitArea[];
    readonly options: {
        id: UnitArea;
        title: string;
    }[];
    getTitle: (unit: UnitArea) => string;
    getRate: typeof getRate;
    convert: typeof convert;
};
export {};
//# sourceMappingURL=area.d.ts.map