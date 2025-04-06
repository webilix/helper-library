import { RE } from './re';
import { plateLetters } from './shared';

function arrayIn(values: any[], arr: any[]): boolean {
    for (const v of values) if (!arr.includes(v)) return false;
    return true;
}

function arrayUnique(arr: any[], value?: (v: any) => any): boolean {
    return (
        arr
            .map((v: any) => (value ? value(v) : v))
            .filter((v: any, index: number, self: string[]) => self.indexOf(v) === index).length === arr.length
    );
}

function isStringBankCard(bankCard: string): boolean {
    const numbers: string[] = bankCard.split('');

    // Check for all unique numbers
    const unique = numbers.filter((n, index: number, self: string[]) => self.indexOf(n) === index);
    if (unique.length === 1) return false;

    let check: number = 0;
    numbers.forEach((n: string, index: number) => {
        const charCheck: number = +n * (index % 2 === 0 ? 2 : 1);
        check += charCheck > 9 ? charCheck - 9 : charCheck;
    });

    return check % 10 === 0;
}

function isStringNationalCode(nationalCode: string): boolean {
    const numbers: string[] = nationalCode.split('');

    // Check for all unique numbers
    const unique = numbers.filter((n, index: number, self: string[]) => self.indexOf(n) === index);
    if (unique.length === 1) return false;

    let check = 0;
    numbers.forEach((n: string, index: number) => {
        if (index >= 9) return;
        check += (10 - index) * +n;
    });

    check = check % 11;
    check = check < 2 ? check : 11 - check;

    return check === +numbers[9];
}

function isStringObjectId(objectId: string): boolean {
    if (objectId.length === 12) {
        const bytes = Buffer.from(objectId);
        return bytes.byteLength === 12;
    }

    if (objectId.length === 24) return /^[0-9a-fA-F]{24}$/.test(objectId);

    return false;
}

function isPlate(value: string[]): boolean;
function isPlate(value: string): boolean;
function isPlate(value: string, join: string): boolean;
function isPlate(value: any, join: string = '-'): boolean {
    const plate: string[] = Array.isArray(value) ? value : IS.string(value) ? value.split(join) : [];

    if (plate.length !== 4) return false;
    // LEFT
    if (!IS.STRING.numeric(plate[0]) || plate[0].length !== 2) return false;
    // LETTER
    if (!IS.string(plate[1]) || !plateLetters.includes(plate[1])) return false;
    // RIGHT
    if (!IS.STRING.numeric(plate[2]) || plate[2].length !== 3) return false;
    // IRAN
    if (!IS.STRING.numeric(plate[3]) || plate[3].length !== 2) return false;

    return true;
}

export const IS = {
    //#region ARRAY
    ARRAY: {
        in: arrayIn,
        unique: arrayUnique,
    },
    //#endregion

    //#region STRING
    STRING: {
        bankCard: (value: any): boolean =>
            IS.string(value) && value.length === 16 && IS.STRING.numeric(value) && isStringBankCard(value),

        color: (value: any): boolean =>
            IS.string(value) &&
            (RE.HEX_COLOR.get().test(value) || RE.HSL_COLOR.get().test(value) || RE.RGB_COLOR.get().test(value)),

        date: (value: any): boolean => IS.string(value) && RE.DATE.get().test(value),

        domain: (value: any): boolean => IS.string(value) && RE.DOMAIN.get().test(value),

        email: (value: any): boolean => IS.string(value) && RE.EMAIL.get().test(value.toLowerCase()),

        hexColor: (value: any): boolean => IS.string(value) && RE.HEX_COLOR.get().test(value),

        ip4: (value: any): boolean => IS.string(value) && RE.IP4.get().test(value),

        jsonDate: (value: any): boolean => IS.string(value) && RE.JSON_DATE.get().test(value),

        mobile: (value: any): boolean => IS.string(value) && RE.MOBILE.get().test(value),

        nationalCode: (value: any): boolean =>
            IS.string(value) && value.length === 10 && IS.STRING.numeric(value) && isStringNationalCode(value),

        number: (value: any): boolean => !IS.empty(value) && IS.string(value) && IS.number(+value),

        numeric: (value: any): boolean => IS.string(value) && RE.NUMERIC.get().test(value),

        objectId: (value: any): boolean => IS.string(value) && isStringObjectId(value),

        time: (value: any): boolean => IS.string(value) && RE.TIME.get().test(value),

        url: (value: any): boolean => IS.string(value) && RE.URL.get(true).test(value),
    },
    //#endregion

    //#region VALUE
    array: (value: any): boolean => Array.isArray(value),

    boolean: (value: any): boolean => typeof value === 'boolean',

    date: (value: any): boolean =>
        Object.prototype.toString.call(value) === '[object Date]' && !isNaN((value as Date).getTime()),

    empty: (value: any): boolean =>
        IS.null(value) ||
        value === '' ||
        (IS.array(value) && value.length === 0) ||
        (IS.object(value) && Object.keys(value).length === 0),

    null: (value: any): boolean => value === null || value === undefined,

    number: (value: any): boolean => typeof value === 'number' && !isNaN(value),

    object: (value: any): boolean => value !== null && typeof value == 'object' && !IS.array(value) && !IS.date(value),

    plate: isPlate,

    string: (value: any): boolean => typeof value === 'string',
    //#endregion
};
