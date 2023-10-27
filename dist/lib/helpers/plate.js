"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLATE = void 0;
const is_1 = require("../is");
const shared_1 = require("../shared");
function getPlate(plate, join = '-') {
    console.log(plate, join);
    return is_1.IS.plate(plate, join) ? (Array.isArray(plate) ? plate : plate.split(join)) : [null, null, null, null];
}
function toString(plate, join = '-') {
    return is_1.IS.plate(plate) ? plate.join(join) : null;
}
exports.PLATE = {
    letters: shared_1.plateLetters,
    getPlate: getPlate,
    toString: toString,
};
//# sourceMappingURL=plate.js.map