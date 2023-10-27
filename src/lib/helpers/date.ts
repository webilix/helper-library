import { JalaliDateTime } from '@webilix/jalali-date-time';

import { IS } from '../is';

import { TIME } from './time';

function getDays(from: Date): number;
function getDays(from: Date, to: Date): number;
function getDays(from: Date, timezone: string): number;
function getDays(from: Date, to: Date, timezone: string): number;
function getDays(from: Date, arg1?: any, arg2?: any): number {
    const to: Date = arg1 && IS.date(arg1) ? arg1 : new Date();
    const timezone: string = arg1 && typeof arg1 === 'string' ? arg1 : arg2 || '';

    const jalali = JalaliDateTime({ timezone });
    const fDate: Date = jalali.periodDay(1, from).from;
    const tDate: Date = jalali.periodDay(1, to || new Date()).from;
    const seconds: number = Math.floor(Math.abs(fDate.getTime() - tDate.getTime()) / 1000);
    return Math.floor(seconds / (24 * 3600)) + 1;
}

function getDuration(from: Date): string;
function getDuration(from: Date, to: Date): string;
function getDuration(from: Date, to?: Date): string {
    return TIME.getDuration(getSeconds(from, to || new Date()));
}

function getSeconds(from: Date): number;
function getSeconds(from: Date, to: Date): number;
function getSeconds(from: Date, to?: Date): number {
    return Math.floor(Math.abs(from.getTime() - (to || new Date()).getTime()) / 1000);
}

function jalaliPeriod(from: Date): string;
function jalaliPeriod(from: Date, to: Date): string;
function jalaliPeriod(from: Date, timezone: string): string;
function jalaliPeriod(from: Date, to: Date, timezone: string): string;
function jalaliPeriod(from: Date, arg1?: any, arg2?: any): string {
    const to: Date = arg1 && IS.date(arg1) ? arg1 : new Date();
    const timezone: string = arg1 && typeof arg1 === 'string' ? arg1 : arg2 || '';

    const jalali = JalaliDateTime({ timezone });
    const [fDate, tDate]: [Date, Date] = from.getTime() > to.getTime() ? [to, from] : [from, to];

    let jFrom: string = jalali.toString(fDate, { format: 'Y-M-D' });
    const [fY, fM, fD] = jFrom.split('-');

    let jTo: string = jalali.toString(tDate, { format: 'Y-M-D' });
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
}

function toString(): string;
function toString(date: Date): string;
function toString(date?: Date): string {
    if (date && !IS.date(date)) return '';

    date = date || new Date();
    const y: string = date.getFullYear().toString();
    const m: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const d: string = date.getDate().toString().padStart(2, '0');

    return `${y}-${m}-${d}`;
}

export const DATE = {
    getDays: getDays,
    getDuration: getDuration,
    getSeconds: getSeconds,
    jalaliPeriod: jalaliPeriod,
    toString: toString,
};
