declare function changeNumbers(str: string): string;
declare function changeNumbers(str: string, locale: 'EN' | 'FA'): string;
declare function escapeHTML(str: string): string;
declare function getBankCardView(bankCard: string): string;
declare function getBankCardView(bankCard: string, join: string): string;
declare function getFileName(name: string, ext: string): string;
declare function getFileName(name: string, ext: string, join: string): string;
declare function getMobileView(mobile: string): string;
declare function getMobileView(mobile: string, join: string): string;
declare function getRandom(length: number): string;
declare function getRandom(length: number, type: 'numeric' | 'alphabetic' | 'alphanumeric'): string;
declare function hasPersian(text: string): boolean;
declare function toFileSize(size: string): number;
export declare const STRING: {
    changeNumbers: typeof changeNumbers;
    escapeHTML: typeof escapeHTML;
    getBankCardView: typeof getBankCardView;
    getFileName: typeof getFileName;
    getMobileView: typeof getMobileView;
    getRandom: typeof getRandom;
    hasPersian: typeof hasPersian;
    toFileSize: typeof toFileSize;
};
export {};
//# sourceMappingURL=string.d.ts.map