"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAY = void 0;
const is_1 = require("../is");
function toTitle(jalaliDay) {
    if (!is_1.IS.STRING.day(jalaliDay))
        throw new Error('Value is not a valid jalali day');
    const [month, day] = jalaliDay.split('-').map((v) => +v);
    const titles = [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند',
    ];
    return `${day} ${titles[month - 1]}`;
}
exports.DAY = {
    toTitle,
};
//# sourceMappingURL=day.js.map