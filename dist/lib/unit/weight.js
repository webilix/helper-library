"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEIGHT = void 0;
const UnitWeightInfo = {
    KG: { title: 'کیلوگرم', rate: 1 },
    GR: { title: 'گرم', rate: 0.001 },
    TN: { title: 'تن', rate: 1000 },
    OZ: { title: 'اونس', rate: 0.028349524691869014 },
    LB: { title: 'پوند', rate: 0.45359290943563974 },
};
const list = Object.keys(UnitWeightInfo);
const options = list.map((unit) => ({
    id: unit,
    title: UnitWeightInfo[unit].title,
}));
const getTitle = (unit) => UnitWeightInfo[unit].title;
function getRate(from, to) {
    to = to || 'KG';
    return from === to ? 1 : UnitWeightInfo[from].rate / UnitWeightInfo[to].rate;
}
function convert(value, from, arg1, arg2) {
    const to = typeof arg1 === 'string' && list.includes(arg1) ? arg1 : 'KG';
    let decimal = arg2 || typeof arg1 === 'number' ? arg1 : 3;
    decimal = decimal > 0 && decimal <= 5 ? decimal : 3;
    const conversion = value * getRate(from, to);
    return +conversion.toFixed(decimal);
}
exports.WEIGHT = {
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
//# sourceMappingURL=weight.js.map