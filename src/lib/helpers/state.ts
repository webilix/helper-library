import { cityList, ICity, IState, stateList } from '../shared';

//#region STATE
const findOneById = (id: string): IState | undefined => stateList.find((state) => state.id === id);
const findByTitle = (query: string): IState[] => stateList.filter((state) => state.title.includes(query));
const findOneByTitle = (title: string): IState | undefined => stateList.find((state) => state.title === title);
//#endregion

//#region CITY
const findByState = (stateId: string): ICity[] => cityList.filter((city) => city.state.id === stateId);

function findOneCityById(id: string): ICity | undefined;
function findOneCityById(id: string, stateId: string): ICity | undefined;
function findOneCityById(id: string, stateId?: string): ICity | undefined {
    return cityList.find((city) => city.id === id && (!stateId || city.state.id === stateId));
}

function findCityByTitle(query: string): ICity[];
function findCityByTitle(query: string, stateId: string): ICity[];
function findCityByTitle(query: string, stateId?: string): ICity[] {
    return cityList.filter((city) => city.title.includes(query) && (!stateId || city.state.id === stateId));
}

function findOneCityByTitle(title: string): ICity | undefined;
function findOneCityByTitle(title: string, stateId: string): ICity | undefined;
function findOneCityByTitle(title: string, stateId?: string): ICity | undefined {
    return cityList.find((city) => city.title === title && (!stateId || city.state.id === stateId));
}
//#endregion

export const STATE = {
    get states(): IState[] {
        return stateList;
    },

    get cities(): ICity[] {
        return cityList;
    },

    // STATE
    findOneById,
    findByTitle,
    findOneByTitle,

    // CITY
    CITY: {
        findByState: findByState,
        findOneById: findOneCityById,
        findByTitle: findCityByTitle,
        findOneByTitle: findOneCityByTitle,
    },
};
