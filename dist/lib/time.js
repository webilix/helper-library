"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIME = void 0;
const validator_library_1 = require("validator-library");
exports.TIME = {
    toString: (date) => {
        if (!validator_library_1.Validator.VALUE.isDate(date))
            return '';
        const h = date.getHours().toString().padStart(2, '0');
        const m = date.getMinutes().toString().padStart(2, '0');
        const s = date.getSeconds().toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    },
    getDuration: (second) => {
        if (!validator_library_1.Validator.VALUE.isNumber(second) || second <= 0)
            return '00:00:00';
        const hour = Math.floor(second / 3600);
        second -= hour * 3600;
        const minute = Math.floor(second / 60);
        second -= minute * 60;
        return (`${hour.toString().padStart(2, '0')}:` +
            `${minute.toString().padStart(2, '0')}:` +
            `${second.toString().padStart(2, '0')}`);
    },
};
//# sourceMappingURL=time.js.map