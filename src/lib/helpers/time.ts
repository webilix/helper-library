import { IS } from '../is';

function getDuration(second: number): string {
    if (!IS.number(second) || second <= 0) return '00:00:00';

    const hour: number = Math.floor(second / 3600);
    second -= hour * 3600;

    const minute: number = Math.floor(second / 60);
    second -= minute * 60;

    return (
        `${hour.toString().padStart(2, '0')}:` +
        `${minute.toString().padStart(2, '0')}:` +
        `${second.toString().padStart(2, '0')}`
    );
}

function toString(): string;
function toString(date: Date): string;
function toString(date?: Date): string {
    if (date && !IS.date(date)) return '';

    date = date || new Date();
    const h: string = date.getHours().toString().padStart(2, '0');
    const m: string = date.getMinutes().toString().padStart(2, '0');
    const s: string = date.getSeconds().toString().padStart(2, '0');

    return `${h}:${m}:${s}`;
}

export const TIME = {
    getDuration,
    toString,
};
