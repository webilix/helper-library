"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS = void 0;
const regex_library_1 = require("@webilix/regex-library");
const shared_1 = require("./shared");
function isPlate(value, join = '-') {
    const plate = Array.isArray(value) ? value : value.split(join);
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
        in: (values, arr) => {
            for (const v of values)
                if (!arr.includes(v))
                    return false;
            return true;
        },
        unique: (arr, value) => arr
            .map((v) => (value ? value(v) : v))
            .filter((v, index, self) => self.indexOf(v) === index).length === arr.length,
    },
    //#region
    //#region STRING
    STRING: {
        bankCard: (value) => {
            if (!exports.IS.string(value))
                return false;
            if (value.length !== 16 || !exports.IS.STRING.numeric(value))
                return false;
            const numbers = value.split('');
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
        },
        date: (value) => exports.IS.string(value) && regex_library_1.RegX.DATE.get().test(value),
        domain: (value) => exports.IS.string(value) && regex_library_1.RegX.DOMAIN.get().test(value),
        email: (value) => exports.IS.string(value) && regex_library_1.RegX.EMAIL.get().test(value.toLowerCase()),
        hexColor: (value) => exports.IS.string(value) && regex_library_1.RegX.HEX_COLOR.get().test(value),
        ip4: (value) => exports.IS.string(value) && regex_library_1.RegX.IP4.get().test(value),
        jsonDate: (value) => exports.IS.string(value) && regex_library_1.RegX.JSON_DATE.get().test(value),
        mobile: (value) => exports.IS.string(value) && regex_library_1.RegX.MOBILE.get().test(value),
        nationalCode: (value) => {
            if (!exports.IS.string(value))
                return false;
            if (value.length !== 10 || !exports.IS.STRING.numeric(value))
                return false;
            const numbers = value.split('');
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
        },
        numeric: (value) => exports.IS.string(value) && regex_library_1.RegX.NUMERIC.get().test(value),
        objectId: (value) => {
            if (!exports.IS.string(value))
                return false;
            if (value.length === 12) {
                const bytes = Buffer.from(value);
                return bytes.byteLength === 12;
            }
            else if (value.length === 24)
                return /^[0-9a-fA-F]{24}$/.test(value);
            return false;
        },
        time: (value) => exports.IS.string(value) && regex_library_1.RegX.TIME.get().test(value),
        url: (value) => exports.IS.string(value) && regex_library_1.RegX.URL.get(true).test(value),
    },
    //#endregion
    //#region VALUE
    array: (value) => Array.isArray(value),
    boolean: (value) => typeof value === 'boolean',
    date: (value) => {
        if (Object.prototype.toString.call(value) !== '[object Date]')
            return false;
        const date = value;
        return !isNaN(date.getTime());
    },
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