export declare const Helper: {
    DATE: {
        toString: (date: Date) => string;
        jalaliPeriod: (from: Date, to: Date, timezone?: string) => string;
        getDuration: (from: Date, to: Date) => string;
    };
    NUMBER: {
        toFA: (num: string | number) => string;
        toEN: (num: string | number) => string;
        format: (num: number, locale?: "FA" | "EN") => string;
    };
    STRING: {
        getRandom: (length: number, type?: "numeric" | "alphabetic" | "alphanumeric") => string;
        escapeHTML: (str: string) => string;
        getFileName: (name: string, ext: string, seperator?: string) => string;
    };
    TIME: {
        toString: (date: Date) => string;
        getDuration: (second: number) => string;
    };
};
//# sourceMappingURL=index.d.ts.map