declare function getPlate(plate: string[]): (string | null)[];
declare function getPlate(plate: string): (string | null)[];
declare function getPlate(plate: string, join: string): (string | null)[];
declare function toString(plate: string[]): string | null;
declare function toString(plate: string[], join: string): string | null;
export declare const PLATE: {
    letters: string[];
    getPlate: typeof getPlate;
    toString: typeof toString;
};
export {};
//# sourceMappingURL=plate.d.ts.map