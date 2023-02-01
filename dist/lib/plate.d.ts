declare function getPlate(plate: string[]): (string | null)[];
declare function getPlate(plate: string): (string | null)[];
declare function getPlate(plate: string, join: string): (string | null)[];
declare function isValid(plate: string[]): boolean;
declare function isValid(plate: string): boolean;
declare function isValid(plate: string, join: string): boolean;
export declare const PLATE: {
    letters: string[];
    getPlate: typeof getPlate;
    isValid: typeof isValid;
    toString: (plate: string[], join?: string) => string | null;
};
export {};
//# sourceMappingURL=plate.d.ts.map