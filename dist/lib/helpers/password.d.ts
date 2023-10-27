declare function generate(length: number): string;
declare function generate(length: number, exclude: {
    number?: boolean;
    lower?: boolean;
    upper?: boolean;
    special?: boolean;
}): string;
declare function getStrength(password: string): number;
export declare const PASSWORD: {
    generate: typeof generate;
    getStrength: typeof getStrength;
};
export {};
//# sourceMappingURL=password.d.ts.map