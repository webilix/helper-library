declare function format(num: number): string;
declare function format(num: number, locale: 'EN' | 'FA'): string;
declare function getTitle(num: number): string;
declare function toEN(num: number): string;
declare function toEN(num: string): string;
declare function toFA(num: number): string;
declare function toFA(num: string): string;
declare function toFileSize(size: number): string;
declare function toFileSize(size: number, locale: 'EN' | 'FA'): string;
export declare const NUMBER: {
    format: typeof format;
    getTitle: typeof getTitle;
    toEN: typeof toEN;
    toFA: typeof toFA;
    toFileSize: typeof toFileSize;
};
export {};
//# sourceMappingURL=number.d.ts.map