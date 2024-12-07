"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATE = void 0;
const jalali_date_time_1 = require("@webilix/jalali-date-time");
const is_1 = require("../is");
const time_1 = require("./time");
function getDays(from, arg1, arg2) {
    const to = arg1 && is_1.IS.date(arg1) ? arg1 : new Date();
    const timezone = arg1 && typeof arg1 === 'string' ? arg1 : arg2 || '';
    const jalali = (0, jalali_date_time_1.JalaliDateTime)({ timezone });
    const fDate = jalali.periodDay(1, from).from;
    const tDate = jalali.periodDay(1, to || new Date()).from;
    const seconds = Math.floor(Math.abs(fDate.getTime() - tDate.getTime()) / 1000);
    return Math.floor(seconds / (24 * 3600)) + 1;
}
function getMonths(from, arg1, arg2) {
    const to = arg1 && is_1.IS.date(arg1) ? arg1 : new Date();
    if (from.getTime() > to.getTime())
        return 0;
    const timezone = arg1 && typeof arg1 === 'string' ? arg1 : arg2 || '';
    const jalali = (0, jalali_date_time_1.JalaliDateTime)({ timezone });
    const getDate = (date) => {
        const [year, month, day] = jalali
            .toString(date)
            .substring(0, 10)
            .split('-')
            .map((s) => +s);
        return { year, month, day };
    };
    const fDate = getDate(from);
    const tDate = getDate(to);
    if (tDate.month < fDate.month) {
        tDate.month += 12;
        tDate.year--;
    }
    let month = tDate.day >= 15 ? 1 : 0;
    while (tDate.month-- > fDate.month)
        month++;
    while (tDate.year-- !== fDate.year)
        month += 12;
    return month > 0 ? month : 0;
}
function getDuration(from, to) {
    return time_1.TIME.getDuration(getSeconds(from, to || new Date()));
}
function getSeconds(from, to) {
    return Math.floor(Math.abs(from.getTime() - (to || new Date()).getTime()) / 1000);
}
function jalaliPeriod(from, arg1, arg2) {
    const to = arg1 && is_1.IS.date(arg1) ? arg1 : new Date();
    const timezone = arg1 && typeof arg1 === 'string' ? arg1 : arg2 || '';
    const jalali = (0, jalali_date_time_1.JalaliDateTime)({ timezone });
    const [fDate, tDate] = from.getTime() > to.getTime() ? [to, from] : [from, to];
    let jFrom = jalali.toString(fDate, { format: 'Y-M-D' });
    const [fY, fM, fD] = jFrom.split('-');
    let jTo = jalali.toString(tDate, { format: 'Y-M-D' });
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
}
function toString(date) {
    if (date && !is_1.IS.date(date))
        return '';
    date = date || new Date();
    const y = date.getFullYear().toString();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const d = date.getDate().toString().padStart(2, '0');
    return `${y}-${m}-${d}`;
}
exports.DATE = {
    getDays,
    getMonths,
    getDuration,
    getSeconds,
    jalaliPeriod,
    toString,
};
//# sourceMappingURL=date.js.map