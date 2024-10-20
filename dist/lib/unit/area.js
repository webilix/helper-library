"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AREA = void 0;
const UnitAreaInfo = {
    MT: { title: 'متر مربع', rate: 1 },
    CM: { title: 'سانتی‌متر مربع', rate: 0.0001 },
    KM: { title: 'کیلومتر مربع', rate: 1000000 },
    IN: { title: 'اینچ مربع', rate: 0.00064516 },
    FT: { title: 'فوت مربع', rate: 0.09290304 },
    YD: { title: 'یارد مربع', rate: 0.83612736 },
    ML: { title: 'مایل مربع', rate: 2589988.1103 },
    HT: { title: 'هکتار', rate: 10000 },
};
const list = Object.keys(UnitAreaInfo);
const options = list.map((unit) => ({
    id: unit,
    title: UnitAreaInfo[unit].title,
}));
const getTitle = (unit) => UnitAreaInfo[unit].title;
function getRate(from, to) {
    to = to || 'MT';
    return from === to ? 1 : UnitAreaInfo[from].rate / UnitAreaInfo[to].rate;
}
function convert(value, from, arg1, arg2) {
    const to = typeof arg1 === 'string' && list.includes(arg1) ? arg1 : 'MT';
    let decimal = arg2 || typeof arg1 === 'number' ? arg1 : 3;
    decimal = decimal > 0 && decimal <= 5 ? decimal : 3;
    const conversion = value * getRate(from, to);
    return +conversion.toFixed(decimal);
}
exports.AREA = {
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
//# sourceMappingURL=area.js.map