import { IS } from '../is';

function toTitle(jalaliDay: string): string {
    if (!IS.STRING.day(jalaliDay)) throw new Error('Value is not a valid jalali day');

    const [month, day] = jalaliDay.split('-').map((v) => +v);
    const titles: string[] = [
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

export const DAY = {
    toTitle,
};
