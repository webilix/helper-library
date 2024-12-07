export interface IState {
    id: string;
    title: string;
    cityCount: number;
}
export interface ICity {
    id: string;
    title: string;
    state: {
        id: string;
        title: string;
    };
    latitude: number;
    longitude: number;
}
export declare const stateList: IState[];
export declare const cityList: ICity[];
//# sourceMappingURL=state.d.ts.map