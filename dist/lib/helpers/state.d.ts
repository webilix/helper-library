import { ICity, IState } from '../shared';
declare function findOneCityById(id: string): ICity | undefined;
declare function findOneCityById(id: string, stateId: string): ICity | undefined;
declare function findCityByTitle(query: string): ICity[];
declare function findCityByTitle(query: string, stateId: string): ICity[];
declare function findOneCityByTitle(title: string): ICity | undefined;
declare function findOneCityByTitle(title: string, stateId: string): ICity | undefined;
export declare const STATE: {
    readonly states: IState[];
    readonly cities: ICity[];
    findOneById: (id: string) => IState | undefined;
    findByTitle: (query: string) => IState[];
    findOneByTitle: (title: string) => IState | undefined;
    CITY: {
        findByState: (stateId: string) => ICity[];
        findOneById: typeof findOneCityById;
        findByTitle: typeof findCityByTitle;
        findOneByTitle: typeof findOneCityByTitle;
    };
};
export {};
//# sourceMappingURL=state.d.ts.map