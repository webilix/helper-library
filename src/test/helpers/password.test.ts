import { PASSWORD } from '../../lib/helpers/password';
import { passwordChars } from '../../lib/shared';

test('PASSWORD: generate', () => {
    expect(PASSWORD.generate(12).length).toBe(12);

    const number: string = PASSWORD.generate(32, { lower: true, upper: true, special: true });
    for (let n = 0; n < number.length; n++)
        expect(passwordChars.number.indexOf(number.substring(n, n + 1))).not.toBe(-1);

    const lower: string = PASSWORD.generate(32, { number: true, upper: true, special: true });
    for (let n = 0; n < number.length; n++) expect(passwordChars.lower.indexOf(lower.substring(n, n + 1))).not.toBe(-1);

    const upper: string = PASSWORD.generate(32, { number: true, lower: true, special: true });
    for (let n = 0; n < number.length; n++) expect(passwordChars.upper.indexOf(upper.substring(n, n + 1))).not.toBe(-1);

    const special: string = PASSWORD.generate(32, { number: true, lower: true, upper: true });
    for (let n = 0; n < number.length; n++)
        expect(passwordChars.special.indexOf(special.substring(n, n + 1))).not.toBe(-1);
});

test('PASSWORD: getStrength', () => {
    const tests: { password: string; strength: number }[] = [
        { password: '', strength: 0 },
        { password: '0bL$', strength: 4.6 },
        { password: 'hGB=6', strength: 5.2 },
        { password: '$UfP0;', strength: 6.8 },
        { password: 'D^G5)^oQ', strength: 9.5 },
        { password: 'huK8#{63V', strength: 10 },
        { password: passwordChars.number, strength: 4.4 },
        { password: passwordChars.lower, strength: 0 },
        { password: passwordChars.upper, strength: 0 },
        { password: passwordChars.special, strength: 10 },
    ];

    for (let t = 0; t < tests.length; t++) expect(PASSWORD.getStrength(tests[t].password)).toBe(tests[t].strength);
});
