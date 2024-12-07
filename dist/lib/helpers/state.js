"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE = void 0;
const shared_1 = require("../shared");
//#region STATE
const findOneById = (id) => shared_1.stateList.find((state) => state.id === id);
const findByTitle = (query) => shared_1.stateList.filter((state) => state.title.includes(query));
const findOneByTitle = (title) => shared_1.stateList.find((state) => state.title === title);
//#endregion
//#region CITY
const findByState = (stateId) => shared_1.cityList.filter((city) => city.state.id === stateId);
function findOneCityById(id, stateId) {
    return shared_1.cityList.find((city) => city.id === id && (!stateId || city.state.id === stateId));
}
function findCityByTitle(query, stateId) {
    return shared_1.cityList.filter((city) => city.title.includes(query) && (!stateId || city.state.id === stateId));
}
function findOneCityByTitle(title, stateId) {
    return shared_1.cityList.find((city) => city.title === title && (!stateId || city.state.id === stateId));
}
//#endregion
exports.STATE = {
    get states() {
        return shared_1.stateList;
    },
    get cities() {
        return shared_1.cityList;
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
//# sourceMappingURL=state.js.map