import { PasswordChars } from '../shared';

export const PASSWORD = {
    generate: (
        length: number,
        exclude?: { number?: boolean; lower?: boolean; upper?: boolean; special?: boolean },
    ): string => {
        if (length <= 3) throw new Error('Length must be bigger than 3');
        if (exclude?.number && exclude?.lower && exclude?.upper && exclude?.special)
            throw new Error('All possible chars are excluded');

        const getRandomChar = (chars: string): string => chars[Math.floor(Math.random() * chars.length)];

        const password: string[] = [];
        if (!exclude?.number) password.push(getRandomChar(PasswordChars.number));
        if (!exclude?.lower) password.push(getRandomChar(PasswordChars.lower));
        if (!exclude?.upper) password.push(getRandomChar(PasswordChars.upper));
        if (!exclude?.special) password.push(getRandomChar(PasswordChars.special));

        const fullChars: string = [
            !exclude?.number ? PasswordChars.number : '',
            !exclude?.lower ? PasswordChars.lower : '',
            !exclude?.upper ? PasswordChars.upper : '',
            !exclude?.special ? PasswordChars.special : '',
        ].join('');
        while (password.length < length) password.push(getRandomChar(fullChars));

        return password.sort(() => (Math.random() < 0.5 ? 1 : -1)).join('');
    },
};
