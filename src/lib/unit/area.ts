export type UnitArea = 'MT' | 'CM' | 'KM' | 'IN' | 'FT' | 'YD' | 'ML' | 'HT';

const UnitAreaInfo: { [key in UnitArea]: { title: string; rate: number } } = {
    MT: { title: 'متر مربع', rate: 1 },
    CM: { title: 'سانتی‌متر مربع', rate: 0.0001 },
    KM: { title: 'کیلومتر مربع', rate: 1000000 },
    IN: { title: 'اینچ مربع', rate: 0.00064516 },
    FT: { title: 'فوت مربع', rate: 0.09290304 },
    YD: { title: 'یارد مربع', rate: 0.83612736 },
    ML: { title: 'مایل مربع', rate: 2589988.1103 },
    HT: { title: 'هکتار', rate: 10000 },
};

const list: UnitArea[] = Object.keys(UnitAreaInfo) as UnitArea[];
const options: { id: UnitArea; title: string }[] = list.map((unit: UnitArea) => ({
    id: unit,
    title: UnitAreaInfo[unit].title,
}));

const getTitle = (unit: UnitArea): string => UnitAreaInfo[unit].title;

function getRate(from: UnitArea): number;
function getRate(from: UnitArea, to: UnitArea): number;
function getRate(from: UnitArea, to?: UnitArea): number {
    to = to || 'MT';

    return from === to ? 1 : UnitAreaInfo[from].rate / UnitAreaInfo[to].rate;
}

function convert(value: number, from: UnitArea): number;
function convert(value: number, from: UnitArea, to: UnitArea): number;
function convert(value: number, from: UnitArea, decimal: number): number;
function convert(value: number, from: UnitArea, to: UnitArea, decimal: number): number;
function convert(value: number, from: UnitArea, arg1?: any, arg2?: any): number {
    const to: UnitArea = typeof arg1 === 'string' && list.includes(arg1 as UnitArea) ? (arg1 as UnitArea) : 'MT';

    let decimal: number = arg2 || typeof arg1 === 'number' ? arg1 : 3;
    decimal = decimal > 0 && decimal <= 5 ? decimal : 3;

    const conversion: number = value * getRate(from, to);
    return +conversion.toFixed(decimal);
}

export const AREA = {
    get list(): UnitArea[] {
        return list;
    },

    get options(): { id: UnitArea; title: string }[] {
        return options;
    },

    getTitle,
    getRate,
    convert,
};
