"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIME = void 0;
const is_1 = require("../is");
function getDuration(second) {
    if (!is_1.IS.number(second) || second <= 0)
        return '00:00:00';
    const hour = Math.floor(second / 3600);
    second -= hour * 3600;
    const minute = Math.floor(second / 60);
    second -= minute * 60;
    return (`${hour.toString().padStart(2, '0')}:` +
        `${minute.toString().padStart(2, '0')}:` +
        `${second.toString().padStart(2, '0')}`);
}
function toString(date) {
    if (date && !is_1.IS.date(date))
        return '';
    date = date || new Date();
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
}
exports.TIME = {
    getDuration: getDuration,
    toString: toString,
};
//# sourceMappingURL=time.js.map