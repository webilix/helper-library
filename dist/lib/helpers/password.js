"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD = void 0;
const shared_1 = require("../shared");
exports.PASSWORD = {
    generate: (length, exclude) => {
        if (length <= 3)
            throw new Error('Length must be bigger than 3');
        if ((exclude === null || exclude === void 0 ? void 0 : exclude.number) && (exclude === null || exclude === void 0 ? void 0 : exclude.lower) && (exclude === null || exclude === void 0 ? void 0 : exclude.upper) && (exclude === null || exclude === void 0 ? void 0 : exclude.special))
            throw new Error('All possible chars are excluded');
        const getRandomChar = (chars) => chars[Math.floor(Math.random() * chars.length)];
        const password = [];
        if (!(exclude === null || exclude === void 0 ? void 0 : exclude.number))
            password.push(getRandomChar(shared_1.PasswordChars.number));
        if (!(exclude === null || exclude === void 0 ? void 0 : exclude.lower))
            password.push(getRandomChar(shared_1.PasswordChars.lower));
        if (!(exclude === null || exclude === void 0 ? void 0 : exclude.upper))
            password.push(getRandomChar(shared_1.PasswordChars.upper));
        if (!(exclude === null || exclude === void 0 ? void 0 : exclude.special))
            password.push(getRandomChar(shared_1.PasswordChars.special));
        const fullChars = [
            !(exclude === null || exclude === void 0 ? void 0 : exclude.number) ? shared_1.PasswordChars.number : '',
            !(exclude === null || exclude === void 0 ? void 0 : exclude.lower) ? shared_1.PasswordChars.lower : '',
            !(exclude === null || exclude === void 0 ? void 0 : exclude.upper) ? shared_1.PasswordChars.upper : '',
            !(exclude === null || exclude === void 0 ? void 0 : exclude.special) ? shared_1.PasswordChars.special : '',
        ].join('');
        while (password.length < length)
            password.push(getRandomChar(fullChars));
        return password.sort(() => (Math.random() < 0.5 ? 1 : -1)).join('');
    },
    getStrength: (password) => {
        const count = {
            upper: 0,
            lower: 0,
            number: 0,
            symbol: 0,
            middle: 0,
            repeatInc: 0,
            repeatChar: 0,
            consecutiveUpper: 0,
            consecutiveLower: 0,
            consecutiveNumber: 0,
            sequentialLetter: 0,
            sequentialNumber: 0,
            sequentialSymbol: 0,
        };
        const chars = { letter: shared_1.PasswordChars.lower, number: shared_1.PasswordChars.number, symbol: shared_1.PasswordChars.special };
        const aPassword = password.replace(/\s+/g, '').split(/\s*/);
        let lastCharType = null;
        aPassword.forEach((character, index) => {
            if (character.match(/[A-Z]/g)) {
                count.upper++;
                if (lastCharType === 'U')
                    count.consecutiveUpper++;
                lastCharType = 'U';
            }
            else if (character.match(/[a-z]/g)) {
                count.lower++;
                if (lastCharType === 'L')
                    count.consecutiveLower++;
                lastCharType = 'L';
            }
            else if (character.match(/[0-9]/g)) {
                count.number++;
                if (index > 0 && index < aPassword.length - 1)
                    count.middle++;
                if (lastCharType === 'N')
                    count.consecutiveNumber++;
                lastCharType = 'N';
            }
            else {
                count.symbol++;
                if (index > 0 && index < aPassword.length - 1)
                    count.middle++;
                lastCharType = 'S';
            }
            let exists = false;
            aPassword.forEach((checkCharacter, checkIndex) => {
                if (character === checkCharacter && index !== checkIndex) {
                    exists = true;
                    count.repeatInc += Math.abs(aPassword.length / (checkIndex - index));
                }
            });
            if (exists) {
                count.repeatChar++;
                const unique = aPassword.length - count.repeatChar;
                count.repeatInc = unique !== 0 ? Math.ceil(count.repeatInc / unique) : Math.ceil(count.repeatInc);
            }
        });
        const requirement = (password.length >= 8 ? 1 : 0) +
            (count.upper !== 0 ? 1 : 0) +
            (count.lower !== 0 ? 1 : 0) +
            (count.number !== 0 ? 1 : 0) +
            (count.symbol !== 0 ? 1 : 0);
        for (let l = 0; l < chars.letter.length - 2; l++) {
            const fwd = chars.letter.substring(l, l + 3);
            const rev = fwd.split('').reverse().join('');
            if (password.toLowerCase().indexOf(fwd) !== -1 || password.toLowerCase().indexOf(rev) !== -1)
                count.sequentialLetter++;
        }
        for (let n = 0; n < chars.number.length - 2; n++) {
            const fwd = chars.number.substring(n, n + 3);
            const rev = fwd.split('').reverse().join('');
            if (password.toLowerCase().indexOf(fwd) !== -1 || password.toLowerCase().indexOf(rev) !== -1)
                count.sequentialNumber++;
        }
        for (let s = 0; s < chars.symbol.length - 2; s++) {
            const fwd = chars.symbol.substring(s, s + 3);
            const rev = fwd.split('').reverse().join('');
            if (password.toLowerCase().indexOf(fwd) !== -1 || password.toLowerCase().indexOf(rev) !== -1)
                count.sequentialSymbol++;
        }
        const additions = [
            // Number of Characters
            password.length * 4,
            // Uppercase Letters
            count.upper ? (password.length - count.upper) * 2 : 0,
            // Lowercase Letters
            count.lower ? (password.length - count.lower) * 2 : 0,
            // Numbers
            count.number * 4,
            // Symbols
            count.symbol * 6,
            // 	Middle Numbers or Symbols
            count.middle * 2,
            // Requirements
            requirement > 3 ? requirement * 2 : 0,
        ].reduce((pv, cv) => pv + cv, 0);
        const deductions = [
            // Letters Only
            count.number !== 0 || count.symbol !== 0 ? 0 : password.length,
            // Numbers Only
            count.upper !== 0 || count.lower !== 0 || count.symbol !== 0 ? 0 : password.length,
            // Repeat Characters (Case Insensitive)
            count.repeatInc,
            // Consecutive Uppercase Letters
            count.consecutiveUpper * 2,
            // Consecutive Lowercase Letters
            count.consecutiveLower * 2,
            // Consecutive Numbers
            count.consecutiveNumber * 2,
            // Sequential Letters (3+)
            count.sequentialLetter * 3,
            // Sequential Numbers (3+)
            count.sequentialNumber * 3,
            // Sequential Symbols (3+)
            count.sequentialSymbol * 3,
        ].reduce((pv, cv) => pv + cv, 0);
        const score = (additions - deductions) / 10;
        return score > 10 ? 10 : score < 0 ? 0 : score;
    },
};
//# sourceMappingURL=password.js.map