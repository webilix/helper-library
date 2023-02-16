import { IS } from '../lib/is';

test(`IS: ARRAY.in`, () => {
    const tests: { values: any[]; arr: any[]; result: boolean }[] = [
        { values: [], arr: [1, 2, 3], result: true },
        { values: [1, 2, 3], arr: [1, 2, 3], result: true },
        { values: [1, 2, 4], arr: [1, 2, 3], result: false },
    ];

    tests.forEach((test) => {
        expect(IS.ARRAY.in(test.values, test.arr)).toBe(test.result);
    });
});

test(`IS: ARRAY.unique`, () => {
    const tests: { arr: any[]; result: boolean; value?: (v: any) => any }[] = [
        { arr: [], result: true },
        { arr: [1, 2, 3], result: true },
        { arr: [1, 2, 1], result: false },

        { arr: [[1], [2], [3]], result: true, value: (v: number[]) => v[0] },
        { arr: [[1], [2], [1]], result: false, value: (v: number[]) => v[0] },
    ];

    tests.forEach((test) => {
        expect(IS.ARRAY.unique(test.arr, test.value)).toBe(test.result);
    });
});

test(`IS: STRING.bankCard`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '0000000000000000', result: false },
        { value: '1234567891234567', result: false },
        { value: '1234567891234563', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.bankCard(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.color`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '#000', result: true },
        { value: 'hsl(0,0%,0%)', result: true },
        { value: 'rgb(0,0,0)', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.color(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.date`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '2000', result: false },
        { value: '2000-1-01', result: false },
        { value: '2000-01-1', result: false },
        { value: '2000-01-00', result: false },
        { value: '2000-01-32', result: false },
        { value: '2000-00-01', result: false },
        { value: '2000-13-01', result: false },
        { value: '2000.01.01', result: false },
        { value: '2000-01-01', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.date(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.domain`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: 'domain', result: false },
        { value: 'domain.c', result: false },
        { value: 'domain.com', result: true },
        { value: 'sub.domain.com', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.domain(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.email`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: 'email@', result: false },
        { value: '@domain.com', result: false },
        { value: 'email@domain.com', result: true },
        { value: 'email.address@sub.domain.com', result: true },
        { value: 'email-address@sub.domain.com', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.email(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.hexColor`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '123456', result: false },
        { value: '#1', result: false },
        { value: '#12', result: false },
        { value: '#1234', result: false },
        { value: '#12345', result: false },
        { value: '#1234567', result: false },
        { value: '#z00', result: false },
        { value: '#0z0', result: false },
        { value: '#00z', result: false },
        { value: '#z00000', result: false },
        { value: '#0z0000', result: false },
        { value: '#00z000', result: false },
        { value: '#000z00', result: false },
        { value: '#0000z0', result: false },
        { value: '#00000z', result: false },
        { value: '#123', result: true },
        { value: '#123456', result: true },
        { value: '#fff', result: true },
        { value: '#ffffff', result: true },
        { value: '#FFF', result: true },
        { value: '#FFFFFF', result: true },
        { value: '#f60', result: true },
        { value: '#f60f60', result: true },
        { value: '#F60', result: true },
        { value: '#F60F60', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.hexColor(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.ip4`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '256.0.0.0', result: false },
        { value: '0.256.0.0', result: false },
        { value: '0.0.256.0', result: false },
        { value: '0.0.0.256', result: false },
        { value: 'a.0.0.0', result: false },
        { value: '0.a.0.0', result: false },
        { value: '0.0.a.0', result: false },
        { value: '0.0.0.a', result: false },
        { value: '127.0.0.1', result: true },
        { value: '0.0.0.0', result: true },
        { value: '255.255.255.255', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.ip4(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.jsonDate`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '2000-01-01', result: false },
        { value: '00:00:00', result: false },
        { value: '2000-01-01T00:00:00', result: false },
        { value: '2000-01-01T00:00:00.000', result: false },
        { value: '2000-01-01T00:00:00Z', result: false },
        { value: '2000-01-01T00:00:00.000Z', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.jsonDate(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.mobile`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '0912', result: false },
        { value: '9123456789', result: false },
        { value: '0912.345.6789', result: false },
        { value: '09123456789', result: true },
        { value: '0912 345 6789', result: true },
        { value: '0912-345-6789', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.mobile(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.nationalCode`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '0000000000', result: false },
        { value: '1234567890', result: false },
        { value: '0123456789', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.nationalCode(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.numeric`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '+1', result: false },
        { value: '-1', result: false },
        { value: '1.1', result: false },
        { value: '1234567890', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.numeric(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.objectId`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '1234567890', result: false },
        { value: '61d24c823f16dcfe229962cg', result: false },
        { value: '123456789012', result: true },
        { value: '61d24c823f16dcfe229962ce', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.objectId(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.time`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '1:01:01', result: false },
        { value: '01:1:01', result: false },
        { value: '01:01:1', result: false },
        { value: '24:00:00', result: false },
        { value: '00:60:00', result: false },
        { value: '00:00:60', result: false },
        { value: '00.00.00', result: false },
        { value: '00:00:00', result: true },
        { value: '23:59:59', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.time(test.value)).toBe(test.result);
    });
});

test(`IS: STRING.url`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: 'domain.com', result: false },
        { value: 'http:domain.com', result: false },
        { value: 'http//domain.com', result: false },
        { value: 'https:domain.com', result: false },
        { value: 'https//domain.com', result: false },
        { value: 'http://domain.com', result: true },
        { value: 'https://domain.com', result: true },
        { value: 'http://domain.com/', result: true },
        { value: 'https://domain.com/', result: true },
        { value: 'http://domain.com/path/', result: true },
        { value: 'https://domain.com/path/', result: true },
    ];

    tests.forEach((test) => {
        expect(IS.STRING.url(test.value)).toBe(test.result);
    });
});

test(`IS: array`, () => {
    const tests: { value: any; result: boolean }[] = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: false },
        { value: [], result: true },
        { value: {}, result: false },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: true },
        { value: { key: 'value' }, result: false },
    ];

    tests.forEach((test) => {
        expect(IS.array(test.value)).toBe(test.result);
    });
});

test(`IS: boolean`, () => {
    const tests: { value: any; result: boolean }[] = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: false },
        { value: [], result: false },
        { value: {}, result: false },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: true },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];

    tests.forEach((test) => {
        expect(IS.boolean(test.value)).toBe(test.result);
    });
});

test(`IS: date`, () => {
    const tests: { value: any; result: boolean }[] = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: false },
        { value: [], result: false },
        { value: {}, result: false },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: true },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];

    tests.forEach((test) => {
        expect(IS.date(test.value)).toBe(test.result);
    });
});

test(`IS: empty`, () => {
    const tests: { value: any; result: boolean }[] = [
        { value: null, result: true },
        { value: undefined, result: true },
        { value: '', result: true },
        { value: [], result: true },
        { value: {}, result: true },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];

    tests.forEach((test) => {
        expect(IS.empty(test.value)).toBe(test.result);
    });
});

test(`IS: null`, () => {
    const tests: { value: any; result: boolean }[] = [
        { value: null, result: true },
        { value: undefined, result: true },
        { value: '', result: false },
        { value: [], result: false },
        { value: {}, result: false },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];

    tests.forEach((test) => {
        expect(IS.null(test.value)).toBe(test.result);
    });
});

test(`IS: number`, () => {
    const tests: { value: any; result: boolean }[] = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: false },
        { value: [], result: false },
        { value: {}, result: false },
        { value: 'string', result: false },
        { value: 123, result: true },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];

    tests.forEach((test) => {
        expect(IS.number(test.value)).toBe(test.result);
    });
});

test(`IS: object`, () => {
    const tests: { value: any; result: boolean }[] = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: false },
        { value: [], result: false },
        { value: {}, result: true },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: true },
    ];

    tests.forEach((test) => {
        expect(IS.object(test.value)).toBe(test.result);
    });
});

test('IS: plate', () => {
    expect(IS.plate(['12', 'ا', '345', '67'])).toBe(true);
    expect(IS.plate('12-ا-345-67')).toBe(true);
    expect(IS.plate('12.ا.345.67', '.')).toBe(true);

    expect(IS.plate([])).toBe(false);
    expect(IS.plate(['12'])).toBe(false);
    expect(IS.plate(['12', '345'])).toBe(false);
    expect(IS.plate(['12', '345', '67'])).toBe(false);
    expect(IS.plate(['12', 'ا', '345', '67', '89'])).toBe(false);
    expect(IS.plate('12')).toBe(false);
    expect(IS.plate('12-67')).toBe(false);
    expect(IS.plate('12-345-67')).toBe(false);
    expect(IS.plate('12-ا-345-67-89')).toBe(false);
    expect(IS.plate('12.ا.345.67')).toBe(false);
});

test(`IS: string`, () => {
    const tests: { value: any; result: boolean }[] = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: true },
        { value: [], result: false },
        { value: {}, result: false },
        { value: 'string', result: true },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];

    tests.forEach((test) => {
        expect(IS.string(test.value)).toBe(test.result);
    });
});
