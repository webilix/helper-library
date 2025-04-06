"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS = void 0;
const big_integer_1 = __importDefault(require("big-integer"));
const re_1 = require("./re");
const shared_1 = require("./shared");
function arrayIn(values, arr) {
    for (const v of values)
        if (!arr.includes(v))
            return false;
    return true;
}
function arrayUnique(arr, value) {
    return (arr
        .map((v) => (value ? value(v) : v))
        .filter((v, index, self) => self.indexOf(v) === index).length === arr.length);
}
function isStringBankCard(bankCard) {
    const numbers = bankCard.split('');
    // Check for all unique numbers
    const unique = numbers.filter((n, index, self) => self.indexOf(n) === index);
    if (unique.length === 1)
        return false;
    let check = 0;
    numbers.forEach((n, index) => {
        const charCheck = +n * (index % 2 === 0 ? 2 : 1);
        check += charCheck > 9 ? charCheck - 9 : charCheck;
    });
    return check % 10 === 0;
}
function isStringBankSheba(bankSheba) {
    const sheba = (bankSheba.substring(4) + bankSheba.substring(0, 4))
        .toUpperCase()
        .replace('I', '18')
        .replace('R', '27');
    return re_1.RE.NUMERIC.get().test(sheba) && (0, big_integer_1.default)(sheba).divmod(97).remainder.toJSNumber() === 1;
}
function isStringNationalCode(nationalCode) {
    const numbers = nationalCode.split('');
    // Check for all unique numbers
    const unique = numbers.filter((n, index, self) => self.indexOf(n) === index);
    if (unique.length === 1)
        return false;
    let check = 0;
    numbers.forEach((n, index) => {
        if (index >= 9)
            return;
        check += (10 - index) * +n;
    });
    check = check % 11;
    check = check < 2 ? check : 11 - check;
    return check === +numbers[9];
}
function isStringObjectId(objectId) {
    if (objectId.length === 12) {
        const bytes = Buffer.from(objectId);
        return bytes.byteLength === 12;
    }
    if (objectId.length === 24)
        return /^[0-9a-fA-F]{24}$/.test(objectId);
    return false;
}
function isPlate(value, join = '-') {
    const plate = Array.isArray(value) ? value : exports.IS.string(value) ? value.split(join) : [];
    if (plate.length !== 4)
        return false;
    // LEFT
    if (!exports.IS.STRING.numeric(plate[0]) || plate[0].length !== 2)
        return false;
    // LETTER
    if (!exports.IS.string(plate[1]) || !shared_1.plateLetters.includes(plate[1]))
        return false;
    // RIGHT
    if (!exports.IS.STRING.numeric(plate[2]) || plate[2].length !== 3)
        return false;
    // IRAN
    if (!exports.IS.STRING.numeric(plate[3]) || plate[3].length !== 2)
        return false;
    return true;
}
exports.IS = {
    //#region ARRAY
    ARRAY: {
        in: arrayIn,
        unique: arrayUnique,
    },
    //#endregion
    //#region STRING
    STRING: {
        bankCard: (value) => exports.IS.string(value) && value.length === 16 && exports.IS.STRING.numeric(value) && isStringBankCard(value),
        bankSheba: (value) => exports.IS.string(value) &&
            value.length === 26 &&
            value.toUpperCase().substring(0, 2) === 'IR' &&
            exports.IS.STRING.numeric(value.substring(2)) &&
            isStringBankSheba(value),
        color: (value) => exports.IS.string(value) &&
            (re_1.RE.HEX_COLOR.get().test(value) || re_1.RE.HSL_COLOR.get().test(value) || re_1.RE.RGB_COLOR.get().test(value)),
        date: (value) => exports.IS.string(value) && re_1.RE.DATE.get().test(value),
        domain: (value) => exports.IS.string(value) && re_1.RE.DOMAIN.get().test(value),
        email: (value) => exports.IS.string(value) && re_1.RE.EMAIL.get().test(value.toLowerCase()),
        hexColor: (value) => exports.IS.string(value) && re_1.RE.HEX_COLOR.get().test(value),
        ip4: (value) => exports.IS.string(value) && re_1.RE.IP4.get().test(value),
        jsonDate: (value) => exports.IS.string(value) && re_1.RE.JSON_DATE.get().test(value),
        mobile: (value) => exports.IS.string(value) && re_1.RE.MOBILE.get().test(value),
        nationalCode: (value) => exports.IS.string(value) && value.length === 10 && exports.IS.STRING.numeric(value) && isStringNationalCode(value),
        number: (value) => !exports.IS.empty(value) && exports.IS.string(value) && exports.IS.number(+value),
        numeric: (value) => exports.IS.string(value) && re_1.RE.NUMERIC.get().test(value),
        objectId: (value) => exports.IS.string(value) && isStringObjectId(value),
        time: (value) => exports.IS.string(value) && re_1.RE.TIME.get().test(value),
        url: (value) => exports.IS.string(value) && re_1.RE.URL.get(true).test(value),
    },
    //#endregion
    //#region VALUE
    array: (value) => Array.isArray(value),
    boolean: (value) => typeof value === 'boolean',
    date: (value) => Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime()),
    empty: (value) => exports.IS.null(value) ||
        value === '' ||
        (exports.IS.array(value) && value.length === 0) ||
        (exports.IS.object(value) && Object.keys(value).length === 0),
    null: (value) => value === null || value === undefined,
    number: (value) => typeof value === 'number' && !isNaN(value),
    object: (value) => value !== null && typeof value == 'object' && !exports.IS.array(value) && !exports.IS.date(value),
    plate: isPlate,
    string: (value) => typeof value === 'string',
    //#endregion
};
//# sourceMappingURL=is.js.map