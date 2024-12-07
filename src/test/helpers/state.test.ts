import { STATE } from '../../lib/helpers/state';

test('STATE: getList', () => {
    expect(STATE.getList().length).toBe(31);
});

test('STATE: findOneById', () => {
    const result: boolean[] = STATE.getList().map((state) => !!STATE.findOneById(state.id));
    expect(result).not.toContain(false);
    expect(!!STATE.findOneById('استانی که وجود ندارد')).toBe(false);
});

test('STATE: findByTitle', () => {
    const result: boolean[] = STATE.getList().map((state) => STATE.findByTitle(state.title).length !== 0);
    expect(result).not.toContain(false);
    expect(STATE.findByTitle('استانی که وجود ندارد').length === 0).toBe(true);
});

test('STATE: findOneByTitle', () => {
    const result: boolean[] = STATE.getList().map((state) => !!STATE.findOneByTitle(state.title));
    expect(result).not.toContain(false);
    expect(!!STATE.findOneByTitle('استانی که وجود ندارد')).toBe(false);
});

test('STATE: CITY.getList', () => {
    const count: number = STATE.getList().reduce((sum: number, s) => sum + s.cityCount, 0);

    expect(STATE.CITY.getList().length).toBe(count);
});

test('STATE: CITY.findOneById', () => {
    const cities = STATE.CITY.getList();

    const result: boolean[] = cities.map((city) => !!STATE.CITY.findOneById(city.id));
    expect(result).not.toContain(false);
    expect(!!STATE.CITY.findOneById('شهری که وجود ندارد')).toBe(false);

    const resultByState: boolean[] = cities.map((city) => !!STATE.CITY.findOneById(city.id, city.state.id));
    expect(resultByState).not.toContain(false);
    expect(!!STATE.CITY.findOneById(cities[0].id, '00')).toBe(false);
});

test('STATE: CITY.findByTitle', () => {
    const cities = STATE.CITY.getList();

    const result: boolean[] = cities.map((city) => STATE.CITY.findByTitle(city.title).length !== 0);
    expect(result).not.toContain(false);
    expect(STATE.CITY.findByTitle('شهری که وجود ندارد').length === 0).toBe(true);

    const resultByState: boolean[] = cities.map(
        (city) => STATE.CITY.findByTitle(city.title, city.state.id).length !== 0,
    );
    expect(resultByState).not.toContain(false);
    expect(STATE.CITY.findByTitle(cities[0].id, '00').length === 0).toBe(true);
});

test('STATE: CITY.findOneByTitle', () => {
    const cities = STATE.CITY.getList();

    const result: boolean[] = cities.map((city) => !!STATE.CITY.findOneByTitle(city.title));
    expect(result).not.toContain(false);
    expect(!!STATE.CITY.findOneByTitle('شهری که وجود ندارد')).toBe(false);

    const resultByState: boolean[] = cities.map((city) => !!STATE.CITY.findOneByTitle(city.title, city.state.id));
    expect(resultByState).not.toContain(false);
    expect(!!STATE.CITY.findOneByTitle(cities[0].id, '00')).toBe(false);
});
