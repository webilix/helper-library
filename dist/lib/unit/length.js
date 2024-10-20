"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LENGTH = void 0;
const UnitLengthInfo = {
    MT: { title: 'متر', rate: 1 },
    MM: { title: 'میلی‌متر', rate: 0.001 },
    CM: { title: 'سانتی‌متر', rate: 0.01 },
    KM: { title: 'کیلومتر', rate: 1000 },
    IN: { title: 'اینچ', rate: 0.0254 },
    FT: { title: 'فوت', rate: 0.3048 },
    YD: { title: 'یارد', rate: 0.9144 },
    ML: { title: 'مایل', rate: 1609 },
};
const list = Object.keys(UnitLengthInfo);
const options = list.map((unit) => ({
    id: unit,
    title: UnitLengthInfo[unit].title,
}));
const getTitle = (unit) => UnitLengthInfo[unit].title;
function getRate(from, to) {
    to = to || 'MT';
    return from === to ? 1 : UnitLengthInfo[from].rate / UnitLengthInfo[to].rate;
}
function convert(value, from, arg1, arg2) {
    const to = typeof arg1 === 'string' && list.includes(arg1) ? arg1 : 'MT';
    let decimal = arg2 || typeof arg1 === 'number' ? arg1 : 3;
    decimal = decimal > 0 && decimal <= 5 ? decimal : 3;
    const conversion = value * getRate(from, to);
    return +conversion.toFixed(decimal);
}
exports.LENGTH = {
    get list() {
        return list;
    },
    get options() {
        return options;
    },
    getTitle: getTitle,
    getRate: getRate,
    convert: convert,
};
//# sourceMappingURL=length.js.map