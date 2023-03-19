import { JalaliDateTime } from '@webilix/jalali-date-time';

import { IS } from '../is';

import { TIME } from './time';

export const DATE = {
    getDays: (from: Date, to?: Date, timezone: string = 'Asia/Tehran'): number => {
        const jalali = JalaliDateTime({ timezone });

        from = jalali.periodDay(1, from).from;
        to = jalali.periodDay(1, to).from;
        const seconds: number = Math.floor(Math.abs(from.getTime() - to.getTime()) / 1000);
        return Math.floor(seconds / (24 * 3600)) + 1;
    },

    getDuration: (from: Date, to: Date): string => TIME.getDuration(DATE.getSeconds(from, to)),

    getSeconds: (from: Date, to: Date): number => Math.floor(Math.abs(from.getTime() - to.getTime()) / 1000),

    jalaliPeriod: (from: Date, to: Date, timezone: string = 'Asia/Tehran'): string => {
        const jalali = JalaliDateTime({ timezone });

        if (from.getTime() > to.getTime()) {
            const temp: Date = from;
            from = to;
            to = temp;
        }

        let jFrom: string = jalali.toString(from, { format: 'Y-M-D' });
        const [fY, fM, fD] = jFrom.split('-');

        let jTo: string = jalali.toString(to, { format: 'Y-M-D' });
        const [tY, tM, tD] = jTo.split('-');

        let format: string = '';
        if (fY !== tY) format = 'd N Y';
        else if (fM !== tM) format = 'd N';
        else if (fD !== tD) format = 'd';

        const gFrom: string = jalali.gregorian(jFrom).date;
        jFrom = format ? jalali.toTitle(new Date(gFrom + 'T00:00:00'), { format }) + ' - ' : '';

        const gTo = jalali.gregorian(jTo).date;
        jTo = jalali.toTitle(new Date(gTo + 'T00:00:00'), { format: 'd N Y' });

        return jFrom + jTo;
    },

    toString: (date: Date): string => {
        if (!IS.date(date)) return '';

        const y: string = date.getFullYear().toString();
        const m: string = (date.getMonth() + 1).toString().padStart(2, '0');
        const d: string = date.getDate().toString().padStart(2, '0');

        return `${y}-${m}-${d}`;
    },
};
