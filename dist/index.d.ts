export declare const Helper: {
    BANK: {
        findCard: (card: string) => import("./lib/bank").IBank | null;
        getList: () => import("./lib/bank").IBank[];
    };
    DATE: {
        getDuration: (from: Date, to: Date) => string;
        getSeconds: (from: Date, to: Date) => number;
        jalaliPeriod: (from: Date, to: Date, timezone?: string) => string;
        toString: (date: Date) => string;
    };
    NUMBER: {
        format: (num: number, locale?: "EN" | "FA") => string;
        toEN: (num: string | number) => string;
        toFA: (num: string | number) => string;
        toFileSize: (size: number, english?: boolean) => string;
    };
    PLATE: {
        letters: string[];
        getPlate: {
            (plate: string[]): (string | null)[];
            (plate: string): (string | null)[];
            (plate: string, join: string): (string | null)[];
        };
        isValid: {
            (plate: string[]): boolean;
            (plate: string): boolean;
            (plate: string, join: string): boolean;
        };
        toString: (plate: string[], join?: string) => string | null;
    };
    STRING: {
        changeNumbers: (str: string, changeTo?: "EN" | "FA") => string;
        escapeHTML: (str: string) => string;
        getBankCardView: (bankCard: string, join?: string) => string;
        getFileName: (name: string, ext: string, seperator?: string) => string;
        getMobileView: (mobile: string, join?: string) => string;
        getRandom: (length: number, type?: "numeric" | "alphabetic" | "alphanumeric") => string;
        hasPersian: (text: string) => boolean;
        toFileSize: (size: string) => number;
    };
    TIME: {
        getDuration: (second: number) => string;
        toString: (date: Date) => string;
    };
};
export { IBank } from './lib/bank';
//# sourceMappingURL=index.d.ts.map