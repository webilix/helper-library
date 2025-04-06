export declare const Helper: {
    IS: {
        ARRAY: {
            in: (values: any[], arr: any[]) => boolean;
            unique: (arr: any[], value?: (v: any) => any) => boolean;
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
        plate: {
            (value: string[]): boolean;
            (value: string): boolean;
            (value: string, join: string): boolean;
        };
        string: (value: any) => boolean;
    };
    RE: {
        DATE: {
            get: (fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
        };
        DOMAIN: {
            get: (fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
        };
        EMAIL: {
            get: (fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
        };
        HEX_COLOR: {
            get: (fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
        };
        HSL_COLOR: {
            get: (fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
        };
        IP4: {
            get: (fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
        };
        JSON_DATE: {
            get: (fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
        };
        MOBILE: {
            get: (fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
        };
        NUMERIC: {
            get: (minLength?: number, maxLength?: number, fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string, minLength?: number, maxLength?: number) => boolean;
            find: (text: string, minLength?: number, maxLength?: number) => string[];
            replace: (text: string, replaceWith?: string, minLength?: number, maxLength?: number) => string;
        };
        PASSWORD: {
            get: (length?: number, forceLowerCase?: boolean, forceUpperCase?: boolean, forceNumber?: boolean, fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string, length?: number, forceLowerCase?: boolean, forceUpperCase?: boolean, forceNumber?: boolean) => boolean;
        };
        RGB_COLOR: {
            get: (fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
        };
        TIME: {
            get: (fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string) => boolean;
            find: (text: string) => string[];
            replace: (text: string, replaceWith?: string) => string;
        };
        URL: {
            get: (full?: boolean, fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string, full?: boolean) => boolean;
            find: (text: string, full?: boolean) => string[];
            replace: (text: string, replaceWith?: string, full?: boolean) => string;
        };
        USERNAME: {
            get: (length?: number, useDash?: boolean, useDot?: boolean, startWithChar?: boolean, endWithChar?: boolean, fullLine?: boolean, flags?: string) => RegExp;
            verify: (text: string, length?: number, useDash?: boolean, useDot?: boolean, startWithChar?: boolean, endWithChar?: boolean) => boolean;
        };
    };
    BANK: {
        findCard: (card: string) => import("./lib/shared").IBank | null;
        getList: () => import("./lib/shared").IBank[];
    };
    COLOR: {
        getFormat: (color: string) => import("./lib/shared").ColorFormats | null;
        getGradient: {
            (from: string, to: string, count: number): string[];
            (from: string, to: string, count: number, format: import("./lib/shared").ColorFormats): string[];
        };
        getShade: {
            (color: string, count: number): string[];
            (color: string, count: number, format: import("./lib/shared").ColorFormats): string[];
        };
        toHEX: (color: string) => string | null;
        toHSL: (color: string) => string | null;
        toRGB: (color: string) => string | null;
    };
    DATE: {
        getDays: {
            (from: Date): number;
            (from: Date, to: Date): number;
            (from: Date, timezone: string): number;
            (from: Date, to: Date, timezone: string): number;
        };
        getMonths: {
            (from: Date): number;
            (from: Date, to: Date): number;
            (from: Date, timezone: string): number;
            (from: Date, to: Date, timezone: string): number;
        };
        getDuration: {
            (from: Date): string;
            (from: Date, to: Date): string;
        };
        getSeconds: {
            (from: Date): number;
            (from: Date, to: Date): number;
        };
        jalaliPeriod: {
            (from: Date): string;
            (from: Date, to: Date): string;
            (from: Date, timezone: string): string;
            (from: Date, to: Date, timezone: string): string;
        };
        toString: {
            (): string;
            (date: Date): string;
        };
    };
    GEO: {
        coordinates: () => Promise<import("./lib/shared").IGeoCoordinates>;
        distance: (from: {
            latitude: number;
            longitude: number;
        }, to: {
            latitude: number;
            longitude: number;
        }) => number;
    };
    NUMBER: {
        format: {
            (num: number): string;
            (num: number, locale: "EN" | "FA"): string;
        };
        getTitle: (num: number) => string;
        toEN: {
            (num: number): string;
            (num: string): string;
        };
        toFA: {
            (num: number): string;
            (num: string): string;
        };
        toFileSize: {
            (size: number): string;
            (size: number, locale: "EN" | "FA"): string;
        };
    };
    PASSWORD: {
        generate: {
            (length: number): string;
            (length: number, exclude: {
                number?: boolean;
                lower?: boolean;
                upper?: boolean;
                special?: boolean;
            }): string;
        };
        getStrength: (password: string) => number;
    };
    PLATE: {
        readonly letters: string[];
        getPlate: {
            (plate: string[]): (string | null)[];
            (plate: string): (string | null)[];
            (plate: string, join: string): (string | null)[];
        };
        toString: {
            (plate: string[]): string | null;
            (plate: string[], join: string): string | null;
        };
    };
    STATE: {
        readonly states: import("./lib/shared").IState[];
        readonly cities: import("./lib/shared").ICity[];
        findOneById: (id: string) => import("./lib/shared").IState | undefined;
        findByTitle: (query: string) => import("./lib/shared").IState[];
        findOneByTitle: (title: string) => import("./lib/shared").IState | undefined;
        CITY: {
            findByState: (stateId: string) => import("./lib/shared").ICity[];
            findOneById: {
                (id: string): import("./lib/shared").ICity | undefined;
                (id: string, stateId: string): import("./lib/shared").ICity | undefined;
            };
            findByTitle: {
                (query: string): import("./lib/shared").ICity[];
                (query: string, stateId: string): import("./lib/shared").ICity[];
            };
            findOneByTitle: {
                (title: string): import("./lib/shared").ICity | undefined;
                (title: string, stateId: string): import("./lib/shared").ICity | undefined;
            };
        };
    };
    STRING: {
        changeNumbers: {
            (str: string): string;
            (str: string, locale: "EN" | "FA"): string;
        };
        escapeHTML: (str: string) => string;
        getBankCardView: {
            (bankCard: string): string;
            (bankCard: string, join: string): string;
        };
        getFileName: {
            (name: string, ext: string): string;
            (name: string, ext: string, join: string): string;
        };
        getMobileView: {
            (mobile: string): string;
            (mobile: string, join: string): string;
        };
        getRandom: {
            (length: number): string;
            (length: number, type: "numeric" | "alphabetic" | "alphanumeric"): string;
        };
        hasPersian: (text: string) => boolean;
        toFileSize: (size: string) => number;
    };
    TIME: {
        getDuration: (second: number) => string;
        toString: {
            (): string;
            (date: Date): string;
        };
    };
    UNIT: {
        AREA: {
            readonly list: import("./lib/unit/area").UnitArea[];
            readonly options: {
                id: import("./lib/unit/area").UnitArea;
                title: string;
            }[];
            getTitle: (unit: import("./lib/unit/area").UnitArea) => string;
            getRate: {
                (from: import("./lib/unit/area").UnitArea): number;
                (from: import("./lib/unit/area").UnitArea, to: import("./lib/unit/area").UnitArea): number;
            };
            convert: {
                (value: number, from: import("./lib/unit/area").UnitArea): number;
                (value: number, from: import("./lib/unit/area").UnitArea, to: import("./lib/unit/area").UnitArea): number;
                (value: number, from: import("./lib/unit/area").UnitArea, decimal: number): number;
                (value: number, from: import("./lib/unit/area").UnitArea, to: import("./lib/unit/area").UnitArea, decimal: number): number;
            };
        };
        LENGTH: {
            readonly list: import("./lib/unit/length").UnitLength[];
            readonly options: {
                id: import("./lib/unit/length").UnitLength;
                title: string;
            }[];
            getTitle: (unit: import("./lib/unit/length").UnitLength) => string;
            getRate: {
                (from: import("./lib/unit/length").UnitLength): number;
                (from: import("./lib/unit/length").UnitLength, to: import("./lib/unit/length").UnitLength): number;
            };
            convert: {
                (value: number, from: import("./lib/unit/length").UnitLength): number;
                (value: number, from: import("./lib/unit/length").UnitLength, to: import("./lib/unit/length").UnitLength): number;
                (value: number, from: import("./lib/unit/length").UnitLength, decimal: number): number;
                (value: number, from: import("./lib/unit/length").UnitLength, to: import("./lib/unit/length").UnitLength, decimal: number): number;
            };
        };
        VOLUME: {
            readonly list: import("./lib/unit/volume").UnitVolume[];
            readonly options: {
                id: import("./lib/unit/volume").UnitVolume;
                title: string;
            }[];
            getTitle: (unit: import("./lib/unit/volume").UnitVolume) => string;
            getRate: {
                (from: import("./lib/unit/volume").UnitVolume): number;
                (from: import("./lib/unit/volume").UnitVolume, to: import("./lib/unit/volume").UnitVolume): number;
            };
            convert: {
                (value: number, from: import("./lib/unit/volume").UnitVolume): number;
                (value: number, from: import("./lib/unit/volume").UnitVolume, to: import("./lib/unit/volume").UnitVolume): number;
                (value: number, from: import("./lib/unit/volume").UnitVolume, decimal: number): number;
                (value: number, from: import("./lib/unit/volume").UnitVolume, to: import("./lib/unit/volume").UnitVolume, decimal: number): number;
            };
        };
        WEIGHT: {
            readonly list: import("./lib/unit/weight").UnitWeight[];
            readonly options: {
                id: import("./lib/unit/weight").UnitWeight;
                title: string;
            }[];
            getTitle: (unit: import("./lib/unit/weight").UnitWeight) => string;
            getRate: {
                (from: import("./lib/unit/weight").UnitWeight): number;
                (from: import("./lib/unit/weight").UnitWeight, to: import("./lib/unit/weight").UnitWeight): number;
            };
            convert: {
                (value: number, from: import("./lib/unit/weight").UnitWeight): number;
                (value: number, from: import("./lib/unit/weight").UnitWeight, to: import("./lib/unit/weight").UnitWeight): number;
                (value: number, from: import("./lib/unit/weight").UnitWeight, decimal: number): number;
                (value: number, from: import("./lib/unit/weight").UnitWeight, to: import("./lib/unit/weight").UnitWeight, decimal: number): number;
            };
        };
    };
};
export { ColorFormats, IBank, ICity, IGeoCoordinates, IState } from './lib/shared';
export { UnitArea } from './lib/unit/area';
export { UnitLength } from './lib/unit/length';
export { UnitVolume } from './lib/unit/volume';
export { UnitWeight } from './lib/unit/weight';
//# sourceMappingURL=index.d.ts.map