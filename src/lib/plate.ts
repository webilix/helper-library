import { Validator } from '@webilix/validator-library';

const letters: string[] = 'ابپتثجدزژسشصطعفقکگلمنوهی'.split('');

function getPlate(plate: string[]): (string | null)[];
function getPlate(plate: string): (string | null)[];
function getPlate(plate: string, join: string): (string | null)[];
function getPlate(plate: any, join: string = '-'): (string | null)[] {
    return isValid(plate, join) ? (Array.isArray(plate) ? plate : plate.split(join)) : [null, null, null, null];
}

function isValid(plate: string[]): boolean;
function isValid(plate: string): boolean;
function isValid(plate: string, join: string): boolean;
function isValid(plate: any, join: string = '-'): boolean {
    const value: string[] = Array.isArray(plate) ? plate : plate.split(join);

    if (value.length !== 4) return false;
    // LEFT
    if (!Validator.STRING.isNumeric(value[0]) || value[0].length !== 2) return false;
    // LETTER
    if (!Validator.VALUE.isString(value[1]) || !letters.includes(value[1])) return false;
    // RIGHT
    if (!Validator.STRING.isNumeric(value[2]) || value[2].length !== 3) return false;
    // IRAN
    if (!Validator.STRING.isNumeric(value[3]) || value[3].length !== 2) return false;

    return true;
}

export const PLATE = {
    letters: letters,
    getPlate: getPlate,
    isValid: isValid,

    toString: (plate: string[], join: string = '-'): string | null => (isValid(plate) ? plate.join(join) : null),
};
