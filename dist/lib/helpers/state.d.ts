import { ICity, IState } from '../shared';
declare function getCityList(): ICity[];
declare function getCityList(stateId: string): ICity[];
declare function findOneCityById(id: string): ICity | undefined;
declare function findOneCityById(id: string, stateId: string): ICity | undefined;
declare function findCityByTitle(query: string): ICity[];
declare function findCityByTitle(query: string, stateId: string): ICity[];
declare function findOneCityByTitle(title: string): ICity | undefined;
declare function findOneCityByTitle(title: string, stateId: string): ICity | undefined;
export declare const STATE: {
    getList: () => IState[];
    findOneById: (id: string) => IState | undefined;
    findByTitle: (query: string) => IState[];
    findOneByTitle: (title: string) => IState | undefined;
    CITY: {
        getList: typeof getCityList;
        findOneById: typeof findOneCityById;
        findByTitle: typeof findCityByTitle;
        findOneByTitle: typeof findOneCityByTitle;
    };
};
export {};
//# sourceMappingURL=state.d.ts.map