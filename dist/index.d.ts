export declare const Helper: {
    DATE: {
        getDuration: (from: Date, to: Date) => string;
        getSeconds: (from: Date, to: Date) => number;
        jalaliPeriod: (from: Date, to: Date, timezone?: string) => string;
        toString: (date: Date) => string;
    };
    NUMBER: {
        format: (num: number, locale?: "FA" | "EN") => string;
        toEN: (num: string | number) => string;
        toFA: (num: string | number) => string;
    };
    STRING: {
        changeNumbers: (str: string, changeTo?: "FA" | "EN") => string;
        escapeHTML: (str: string) => string;
        getBankCardView: (bankCard: string, join?: string) => string;
        getFileName: (name: string, ext: string, seperator?: string) => string;
        getMobileView: (mobile: string, join?: string) => string;
        getRandom: (length: number, type?: "numeric" | "alphabetic" | "alphanumeric") => string;
        hasPersian: (text: string) => boolean;
    };
    TIME: {
        getDuration: (second: number) => string;
        toString: (date: Date) => string;
    };
};
//# sourceMappingURL=index.d.ts.map