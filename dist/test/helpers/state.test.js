"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("../../lib/helpers/state");
test('STATE: getList', () => {
    expect(state_1.STATE.getList().length).toBe(31);
});
test('STATE: findOneById', () => {
    const result = state_1.STATE.getList().map((state) => !!state_1.STATE.findOneById(state.id));
    expect(result).not.toContain(false);
    expect(!!state_1.STATE.findOneById('استانی که وجود ندارد')).toBe(false);
});
test('STATE: findByTitle', () => {
    const result = state_1.STATE.getList().map((state) => state_1.STATE.findByTitle(state.title).length !== 0);
    expect(result).not.toContain(false);
    expect(state_1.STATE.findByTitle('استانی که وجود ندارد').length === 0).toBe(true);
});
test('STATE: findOneByTitle', () => {
    const result = state_1.STATE.getList().map((state) => !!state_1.STATE.findOneByTitle(state.title));
    expect(result).not.toContain(false);
    expect(!!state_1.STATE.findOneByTitle('استانی که وجود ندارد')).toBe(false);
});
test('STATE: CITY.getList', () => {
    const count = state_1.STATE.getList().reduce((sum, s) => sum + s.cityCount, 0);
    expect(state_1.STATE.CITY.getList().length).toBe(count);
});
test('STATE: CITY.findOneById', () => {
    const cities = state_1.STATE.CITY.getList();
    const result = cities.map((city) => !!state_1.STATE.CITY.findOneById(city.id));
    expect(result).not.toContain(false);
    expect(!!state_1.STATE.CITY.findOneById('شهری که وجود ندارد')).toBe(false);
    const resultByState = cities.map((city) => !!state_1.STATE.CITY.findOneById(city.id, city.state.id));
    expect(resultByState).not.toContain(false);
    expect(!!state_1.STATE.CITY.findOneById(cities[0].id, '00')).toBe(false);
});
test('STATE: CITY.findByTitle', () => {
    const cities = state_1.STATE.CITY.getList();
    const result = cities.map((city) => state_1.STATE.CITY.findByTitle(city.title).length !== 0);
    expect(result).not.toContain(false);
    expect(state_1.STATE.CITY.findByTitle('شهری که وجود ندارد').length === 0).toBe(true);
    const resultByState = cities.map((city) => state_1.STATE.CITY.findByTitle(city.title, city.state.id).length !== 0);
    expect(resultByState).not.toContain(false);
    expect(state_1.STATE.CITY.findByTitle(cities[0].id, '00').length === 0).toBe(true);
});
test('STATE: CITY.findOneByTitle', () => {
    const cities = state_1.STATE.CITY.getList();
    const result = cities.map((city) => !!state_1.STATE.CITY.findOneByTitle(city.title));
    expect(result).not.toContain(false);
    expect(!!state_1.STATE.CITY.findOneByTitle('شهری که وجود ندارد')).toBe(false);
    const resultByState = cities.map((city) => !!state_1.STATE.CITY.findOneByTitle(city.title, city.state.id));
    expect(resultByState).not.toContain(false);
    expect(!!state_1.STATE.CITY.findOneByTitle(cities[0].id, '00')).toBe(false);
});
//# sourceMappingURL=state.test.js.map