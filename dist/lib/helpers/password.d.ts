export declare const PASSWORD: {
    generate: (length: number, exclude?: {
        number?: boolean;
        lower?: boolean;
        upper?: boolean;
        special?: boolean;
    }) => string;
    getStrength: (password: string) => number;
};
//# sourceMappingURL=password.d.ts.map