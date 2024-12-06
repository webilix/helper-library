"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const password_1 = require("../../lib/helpers/password");
const shared_1 = require("../../lib/shared");
test('PASSWORD: generate', () => {
    expect(password_1.PASSWORD.generate(12).length).toBe(12);
    const number = password_1.PASSWORD.generate(32, { lower: true, upper: true, special: true });
    for (let n = 0; n < number.length; n++)
        expect(shared_1.passwordChars.number.indexOf(number.substring(n, n + 1))).not.toBe(-1);
    const lower = password_1.PASSWORD.generate(32, { number: true, upper: true, special: true });
    for (let n = 0; n < number.length; n++)
        expect(shared_1.passwordChars.lower.indexOf(lower.substring(n, n + 1))).not.toBe(-1);
    const upper = password_1.PASSWORD.generate(32, { number: true, lower: true, special: true });
    for (let n = 0; n < number.length; n++)
        expect(shared_1.passwordChars.upper.indexOf(upper.substring(n, n + 1))).not.toBe(-1);
    const special = password_1.PASSWORD.generate(32, { number: true, lower: true, upper: true });
    for (let n = 0; n < number.length; n++)
        expect(shared_1.passwordChars.special.indexOf(special.substring(n, n + 1))).not.toBe(-1);
});
test('PASSWORD: getStrength', () => {
    const tests = [
        { password: '', strength: 0 },
        { password: '0bL$', strength: 4.6 },
        { password: 'hGB=6', strength: 5.2 },
        { password: '$UfP0;', strength: 6.8 },
        { password: 'D^G5)^oQ', strength: 9.5 },
        { password: 'huK8#{63V', strength: 10 },
        { password: shared_1.passwordChars.number, strength: 4.4 },
        { password: shared_1.passwordChars.lower, strength: 0 },
        { password: shared_1.passwordChars.upper, strength: 0 },
        { password: shared_1.passwordChars.special, strength: 10 },
    ];
    for (let t = 0; t < tests.length; t++)
        expect(password_1.PASSWORD.getStrength(tests[t].password)).toBe(tests[t].strength);
});
//# sourceMappingURL=password.test.js.map