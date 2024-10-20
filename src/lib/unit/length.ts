export type UnitLength = 'MT' | 'MM' | 'CM' | 'KM' | 'IN' | 'FT' | 'YD' | 'ML';

const UnitLengthInfo: { [key in UnitLength]: { title: string; rate: number } } = {
    MT: { title: 'متر', rate: 1 },
    MM: { title: 'میلی‌متر', rate: 0.001 },
    CM: { title: 'سانتی‌متر', rate: 0.01 },
    KM: { title: 'کیلومتر', rate: 1000 },
    IN: { title: 'اینچ', rate: 0.0254 },
    FT: { title: 'فوت', rate: 0.3048 },
    YD: { title: 'یارد', rate: 0.9144 },
    ML: { title: 'مایل', rate: 1609 },
};

const list: UnitLength[] = Object.keys(UnitLengthInfo) as UnitLength[];
const options: { id: UnitLength; title: string }[] = list.map((unit: UnitLength) => ({
    id: unit,
    title: UnitLengthInfo[unit].title,
}));

const getTitle = (unit: UnitLength): string => UnitLengthInfo[unit].title;

function getRate(from: UnitLength): number;
function getRate(from: UnitLength, to: UnitLength): number;
function getRate(from: UnitLength, to?: UnitLength): number {
    to = to || 'MT';

    return from === to ? 1 : UnitLengthInfo[from].rate / UnitLengthInfo[to].rate;
}

function convert(value: number, from: UnitLength): number;
function convert(value: number, from: UnitLength, to: UnitLength): number;
function convert(value: number, from: UnitLength, decimal: number): number;
function convert(value: number, from: UnitLength, to: UnitLength, decimal: number): number;
function convert(value: number, from: UnitLength, arg1?: any, arg2?: any): number {
    const to: UnitLength = typeof arg1 === 'string' && list.includes(arg1 as UnitLength) ? (arg1 as UnitLength) : 'MT';

    let decimal: number = arg2 || typeof arg1 === 'number' ? arg1 : 3;
    decimal = decimal > 0 && decimal <= 5 ? decimal : 3;

    const conversion: number = value * getRate(from, to);
    return +conversion.toFixed(decimal);
}

export const LENGTH = {
    get list(): UnitLength[] {
        return list;
    },

    get options(): { id: UnitLength; title: string }[] {
        return options;
    },

    getTitle: getTitle,
    getRate: getRate,
    convert: convert,
};
