"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VOLUME = void 0;
const UnitVolumeInfo = {
    LT: { title: 'لیتر', rate: 1 },
    ML: { title: 'میلی لیتر', rate: 0.001 },
    GL: { title: 'گالن', rate: 3.785411784 },
    BR: { title: 'بشکه', rate: 158.987294928 },
};
const list = Object.keys(UnitVolumeInfo);
const options = list.map((unit) => ({
    id: unit,
    title: UnitVolumeInfo[unit].title,
}));
const getTitle = (unit) => UnitVolumeInfo[unit].title;
function getRate(from, to) {
    to = to || 'LT';
    return from === to ? 1 : UnitVolumeInfo[from].rate / UnitVolumeInfo[to].rate;
}
function convert(value, from, arg1, arg2) {
    const to = typeof arg1 === 'string' && list.includes(arg1) ? arg1 : 'LT';
    let decimal = arg2 || typeof arg1 === 'number' ? arg1 : 3;
    decimal = decimal > 0 && decimal <= 5 ? decimal : 3;
    const conversion = value * getRate(from, to);
    return +conversion.toFixed(decimal);
}
exports.VOLUME = {
    get list() {
        return list;
    },
    get options() {
        return options;
    },
    getTitle,
    getRate,
    convert,
};
//# sourceMappingURL=volume.js.map