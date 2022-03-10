"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATE = void 0;
const jalali_date_time_1 = require("jalali-date-time");
const validator_library_1 = require("validator-library");
const time_1 = require("./time");
exports.DATE = {
    toString: (date) => {
        if (!validator_library_1.Validator.VALUE.isDate(date))
            return '';
        const y = date.getFullYear().toString();
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const d = date.getDate().toString().padStart(2, '0');
        return `${y}-${m}-${d}`;
    },
    jalaliPeriod: (from, to, timezone = 'Asia/Tehran') => {
        const jalali = (0, jalali_date_time_1.JalaliDateTime)({ timezone });
        if (from.getTime() > to.getTime()) {
            const temp = from;
            from = to;
            to = temp;
        }
        let jFrom = jalali.toString(from, { format: 'Y-M-D' });
        const [fY, fM, fD] = jFrom.split('-');
        let jTo = jalali.toString(to, { format: 'Y-M-D' });
        const [tY, tM, tD] = jTo.split('-');
        let format = '';
        if (fY !== tY)
            format = 'd N Y';
        else if (fM !== tM)
            format = 'd N';
        else if (fD !== tD)
            format = 'd';
        const gFrom = jalali.gregorian(jFrom).date;
        jFrom = format ? jalali.toTitle(new Date(gFrom + 'T00:00:00'), { format }) + ' - ' : '';
        const gTo = jalali.gregorian(jTo).date;
        jTo = jalali.toTitle(new Date(gTo + 'T00:00:00'), { format: 'd N Y' });
        return jFrom + jTo;
    },
    getDuration: (from, to) => time_1.TIME.getDuration(Math.floor(Math.abs(from.getTime() - to.getTime()) / 1000)),
};
//# sourceMappingURL=date.js.map