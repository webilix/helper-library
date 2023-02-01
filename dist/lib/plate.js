"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLATE = void 0;
const validator_library_1 = require("@webilix/validator-library");
const letters = 'ابپتثجدزژسشصطعفقکگلمنوهی'.split('');
function getPlate(plate, join = '-') {
    return isValid(plate, join) ? (Array.isArray(plate) ? plate : plate.split(join)) : [null, null, null, null];
}
function isValid(plate, join = '-') {
    const value = Array.isArray(plate) ? plate : plate.split(join);
    if (value.length !== 4)
        return false;
    // LEFT
    if (!validator_library_1.Validator.STRING.isNumeric(value[0]) || value[0].length !== 2)
        return false;
    // LETTER
    if (!validator_library_1.Validator.VALUE.isString(value[1]) || !letters.includes(value[1]))
        return false;
    // RIGHT
    if (!validator_library_1.Validator.STRING.isNumeric(value[2]) || value[2].length !== 3)
        return false;
    // IRAN
    if (!validator_library_1.Validator.STRING.isNumeric(value[3]) || value[3].length !== 2)
        return false;
    return true;
}
exports.PLATE = {
    letters: letters,
    getPlate: getPlate,
    isValid: isValid,
    toString: (plate, join = '-') => (isValid(plate) ? plate.join(join) : null),
};
//# sourceMappingURL=plate.js.map