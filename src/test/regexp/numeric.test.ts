import { regexpNumeric } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['100', '010', '20000000'];
const invalid: string[] = ['S', 'S100', '100S', '+100', '-100', '100.00'];

testVerify('NUMERIC', regexpNumeric(), valid, invalid);
testVerify('NUMERIC', regexpNumeric(4), ['4444', '55555'], ['1', '22', '33']);
testVerify('NUMERIC', regexpNumeric(4, 4), ['4444'], ['1', '22', '33', '55555']);
testFind('NUMERIC', regexpNumeric(), valid, ['STRING']);
testReplace('NUMERIC', regexpNumeric(), valid, ['STRING']);

test('RE NUMERIC: invalid input', () => {
    const test1 = () => regexpNumeric(0, 1);
    expect(test1).toThrow();

    const test2 = () => regexpNumeric(1, 0);
    expect(test2).toThrow();

    const test3 = () => regexpNumeric(2, 1);
    expect(test3).toThrow();
});
