declare function arrayIn(values: any[], arr: any[]): boolean;
declare function arrayUnique(arr: any[], value?: (v: any) => any): boolean;
declare function isPlate(value: string[]): boolean;
declare function isPlate(value: string): boolean;
declare function isPlate(value: string, join: string): boolean;
export declare const IS: {
    ARRAY: {
        in: typeof arrayIn;
        unique: typeof arrayUnique;
    };
    STRING: {
        bankCard: (value: any) => boolean;
        bankSheba: (value: any) => boolean;
        color: (value: any) => boolean;
        date: (value: any) => boolean;
        domain: (value: any) => boolean;
        email: (value: any) => boolean;
        hexColor: (value: any) => boolean;
        ip4: (value: any) => boolean;
        jsonDate: (value: any) => boolean;
        mobile: (value: any) => boolean;
        nationalCode: (value: any) => boolean;
        number: (value: any) => boolean;
        numeric: (value: any) => boolean;
        objectId: (value: any) => boolean;
        time: (value: any) => boolean;
        url: (value: any) => boolean;
    };
    array: (value: any) => boolean;
    boolean: (value: any) => boolean;
    date: (value: any) => boolean;
    empty: (value: any) => boolean;
    null: (value: any) => boolean;
    number: (value: any) => boolean;
    object: (value: any) => boolean;
    plate: typeof isPlate;
    string: (value: any) => boolean;
};
export {};
//# sourceMappingURL=is.d.ts.map