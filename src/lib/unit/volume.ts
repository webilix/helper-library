export type UnitVolume = 'LT' | 'ML' | 'GL' | 'BR';

const UnitVolumeInfo: { [key in UnitVolume]: { title: string; rate: number } } = {
    LT: { title: 'لیتر', rate: 1 },
    ML: { title: 'میلی لیتر', rate: 0.001 },
    GL: { title: 'گالن', rate: 3.785411784 },
    BR: { title: 'بشکه', rate: 158.987294928 },
};

const list: UnitVolume[] = Object.keys(UnitVolumeInfo) as UnitVolume[];
const options: { id: UnitVolume; title: string }[] = list.map((unit: UnitVolume) => ({
    id: unit,
    title: UnitVolumeInfo[unit].title,
}));

const getTitle = (unit: UnitVolume): string => UnitVolumeInfo[unit].title;

function getRate(from: UnitVolume): number;
function getRate(from: UnitVolume, to: UnitVolume): number;
function getRate(from: UnitVolume, to?: UnitVolume): number {
    to = to || 'LT';

    return from === to ? 1 : UnitVolumeInfo[from].rate / UnitVolumeInfo[to].rate;
}

function convert(value: number, from: UnitVolume): number;
function convert(value: number, from: UnitVolume, to: UnitVolume): number;
function convert(value: number, from: UnitVolume, decimal: number): number;
function convert(value: number, from: UnitVolume, to: UnitVolume, decimal: number): number;
function convert(value: number, from: UnitVolume, arg1?: any, arg2?: any): number {
    const to: UnitVolume = typeof arg1 === 'string' && list.includes(arg1 as UnitVolume) ? (arg1 as UnitVolume) : 'LT';

    let decimal: number = arg2 || typeof arg1 === 'number' ? arg1 : 3;
    decimal = decimal > 0 && decimal <= 5 ? decimal : 3;

    const conversion: number = value * getRate(from, to);
    return +conversion.toFixed(decimal);
}

export const VOLUME = {
    get list(): UnitVolume[] {
        return list;
    },

    get options(): { id: UnitVolume; title: string }[] {
        return options;
    },

    getTitle: getTitle,
    getRate: getRate,
    convert: convert,
};
