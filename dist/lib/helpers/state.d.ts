import { ICity, IState } from '../shared';
declare const findOneById: (id: string) => IState | undefined;
declare const findByTitle: (query: string) => IState[];
declare const findOneByTitle: (title: string) => IState | undefined;
declare const findByState: (stateId: string) => ICity[];
declare function findOneCityById(id: string): ICity | undefined;
declare function findOneCityById(id: string, stateId: string): ICity | undefined;
declare function findCityByTitle(query: string): ICity[];
declare function findCityByTitle(query: string, stateId: string): ICity[];
declare function findOneCityByTitle(title: string): ICity | undefined;
declare function findOneCityByTitle(title: string, stateId: string): ICity | undefined;
export declare const STATE: {
    readonly states: IState[];
    readonly cities: ICity[];
    findOneById: typeof findOneById;
    findByTitle: typeof findByTitle;
    findOneByTitle: typeof findOneByTitle;
    CITY: {
        findByState: typeof findByState;
        findOneById: typeof findOneCityById;
        findByTitle: typeof findCityByTitle;
        findOneByTitle: typeof findOneCityByTitle;
    };
};
export {};
//# sourceMappingURL=state.d.ts.map