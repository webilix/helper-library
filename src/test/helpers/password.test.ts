import { PasswordChars } from '../../lib/shared';
import { PASSWORD } from '../../lib/helpers/password';

test('PASSWORD: generate', () => {
    expect(PASSWORD.generate(12).length).toBe(12);

    const number: string = PASSWORD.generate(32, { lower: true, upper: true, special: true });
    for (let n = 0; n < number.length; n++)
        expect(PasswordChars.number.indexOf(number.substring(n, n + 1))).not.toBe(-1);

    const lower: string = PASSWORD.generate(32, { number: true, upper: true, special: true });
    for (let n = 0; n < number.length; n++) expect(PasswordChars.lower.indexOf(lower.substring(n, n + 1))).not.toBe(-1);

    const upper: string = PASSWORD.generate(32, { number: true, lower: true, special: true });
    for (let n = 0; n < number.length; n++) expect(PasswordChars.upper.indexOf(upper.substring(n, n + 1))).not.toBe(-1);

    const special: string = PASSWORD.generate(32, { number: true, lower: true, upper: true });
    for (let n = 0; n < number.length; n++)
        expect(PasswordChars.special.indexOf(special.substring(n, n + 1))).not.toBe(-1);
});
