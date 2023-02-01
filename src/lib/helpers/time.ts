import { IS } from '../is';

export const TIME = {
    getDuration: (second: number): string => {
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
    },

    toString: (date: Date): string => {
        if (!IS.date(date)) return '';

        const h: string = date.getHours().toString().padStart(2, '0');
        const m: string = date.getMinutes().toString().padStart(2, '0');
        const s: string = date.getSeconds().toString().padStart(2, '0');

        return `${h}:${m}:${s}`;
    },
};
