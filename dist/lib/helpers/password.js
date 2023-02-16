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
};
//# sourceMappingURL=password.js.map