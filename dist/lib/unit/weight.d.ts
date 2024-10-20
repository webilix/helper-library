export type UnitWeight = 'KG' | 'GR' | 'TN' | 'OZ' | 'LB';
declare function getRate(from: UnitWeight): number;
declare function getRate(from: UnitWeight, to: UnitWeight): number;
declare function convert(value: number, from: UnitWeight): number;
declare function convert(value: number, from: UnitWeight, to: UnitWeight): number;
declare function convert(value: number, from: UnitWeight, decimal: number): number;
declare function convert(value: number, from: UnitWeight, to: UnitWeight, decimal: number): number;
export declare const WEIGHT: {
    readonly list: UnitWeight[];
    readonly options: {
        id: UnitWeight;
        title: string;
    }[];
    getTitle: (unit: UnitWeight) => string;
    getRate: typeof getRate;
    convert: typeof convert;
};
export {};
//# sourceMappingURL=weight.d.ts.map