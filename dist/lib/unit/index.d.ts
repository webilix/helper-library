export declare const UNIT: {
    AREA: {
        readonly list: import("./area").UnitArea[];
        readonly options: {
            id: import("./area").UnitArea;
            title: string;
        }[];
        getTitle: (unit: import("./area").UnitArea) => string;
        getRate: {
            (from: import("./area").UnitArea): number;
            (from: import("./area").UnitArea, to: import("./area").UnitArea): number;
        };
        convert: {
            (value: number, from: import("./area").UnitArea): number;
            (value: number, from: import("./area").UnitArea, to: import("./area").UnitArea): number;
            (value: number, from: import("./area").UnitArea, decimal: number): number;
            (value: number, from: import("./area").UnitArea, to: import("./area").UnitArea, decimal: number): number;
        };
    };
    LENGTH: {
        readonly list: import("./length").UnitLength[];
        readonly options: {
            id: import("./length").UnitLength;
            title: string;
        }[];
        getTitle: (unit: import("./length").UnitLength) => string;
        getRate: {
            (from: import("./length").UnitLength): number;
            (from: import("./length").UnitLength, to: import("./length").UnitLength): number;
        };
        convert: {
            (value: number, from: import("./length").UnitLength): number;
            (value: number, from: import("./length").UnitLength, to: import("./length").UnitLength): number;
            (value: number, from: import("./length").UnitLength, decimal: number): number;
            (value: number, from: import("./length").UnitLength, to: import("./length").UnitLength, decimal: number): number;
        };
    };
    VOLUME: {
        readonly list: import("./volume").UnitVolume[];
        readonly options: {
            id: import("./volume").UnitVolume;
            title: string;
        }[];
        getTitle: (unit: import("./volume").UnitVolume) => string;
        getRate: {
            (from: import("./volume").UnitVolume): number;
            (from: import("./volume").UnitVolume, to: import("./volume").UnitVolume): number;
        };
        convert: {
            (value: number, from: import("./volume").UnitVolume): number;
            (value: number, from: import("./volume").UnitVolume, to: import("./volume").UnitVolume): number;
            (value: number, from: import("./volume").UnitVolume, decimal: number): number;
            (value: number, from: import("./volume").UnitVolume, to: import("./volume").UnitVolume, decimal: number): number;
        };
    };
    WEIGHT: {
        readonly list: import("./weight").UnitWeight[];
        readonly options: {
            id: import("./weight").UnitWeight;
            title: string;
        }[];
        getTitle: (unit: import("./weight").UnitWeight) => string;
        getRate: {
            (from: import("./weight").UnitWeight): number;
            (from: import("./weight").UnitWeight, to: import("./weight").UnitWeight): number;
        };
        convert: {
            (value: number, from: import("./weight").UnitWeight): number;
            (value: number, from: import("./weight").UnitWeight, to: import("./weight").UnitWeight): number;
            (value: number, from: import("./weight").UnitWeight, decimal: number): number;
            (value: number, from: import("./weight").UnitWeight, to: import("./weight").UnitWeight, decimal: number): number;
        };
    };
};
//# sourceMappingURL=index.d.ts.map