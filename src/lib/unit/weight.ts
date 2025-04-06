export type UnitWeight = 'KG' | 'GR' | 'TN' | 'OZ' | 'LB';

const UnitWeightInfo: { [key in UnitWeight]: { title: string; rate: number } } = {
    KG: { title: 'کیلوگرم', rate: 1 },
    GR: { title: 'گرم', rate: 0.001 },
    TN: { title: 'تن', rate: 1000 },
    OZ: { title: 'اونس', rate: 0.028349524691869014 },
    LB: { title: 'پوند', rate: 0.45359290943563974 },
};

const list: UnitWeight[] = Object.keys(UnitWeightInfo) as UnitWeight[];
const options: { id: UnitWeight; title: string }[] = list.map((unit: UnitWeight) => ({
    id: unit,
    title: UnitWeightInfo[unit].title,
}));

const getTitle = (unit: UnitWeight): string => UnitWeightInfo[unit].title;

function getRate(from: UnitWeight): number;
function getRate(from: UnitWeight, to: UnitWeight): number;
function getRate(from: UnitWeight, to?: UnitWeight): number {
    to = to || 'KG';

    return from === to ? 1 : UnitWeightInfo[from].rate / UnitWeightInfo[to].rate;
}

function convert(value: number, from: UnitWeight): number;
function convert(value: number, from: UnitWeight, to: UnitWeight): number;
function convert(value: number, from: UnitWeight, decimal: number): number;
function convert(value: number, from: UnitWeight, to: UnitWeight, decimal: number): number;
function convert(value: number, from: UnitWeight, arg1?: any, arg2?: any): number {
    const to: UnitWeight = typeof arg1 === 'string' && list.includes(arg1 as UnitWeight) ? (arg1 as UnitWeight) : 'KG';

    let decimal: number = arg2 || typeof arg1 === 'number' ? arg1 : 3;
    decimal = decimal > 0 && decimal <= 5 ? decimal : 3;

    const conversion: number = value * getRate(from, to);
    return +conversion.toFixed(decimal);
}

export const WEIGHT = {
    get list(): UnitWeight[] {
        return list;
    },

    get options(): { id: UnitWeight; title: string }[] {
        return options;
    },

    getTitle,
    getRate,
    convert,
};
