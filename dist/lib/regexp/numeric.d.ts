export declare const NUMERIC: {
    get: (minLength?: number, maxLength?: number, fullLine?: boolean, flags?: string) => RegExp;
    verify: (text: string, minLength?: number, maxLength?: number) => boolean;
    find: (text: string, minLength?: number, maxLength?: number) => string[];
    replace: (text: string, replaceWith?: string, minLength?: number, maxLength?: number) => string;
};
//# sourceMappingURL=numeric.d.ts.map