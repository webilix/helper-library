import { IS } from '../is';
import { plateLetters } from '../shared';

function getPlate(plate: string[]): (string | null)[];
function getPlate(plate: string): (string | null)[];
function getPlate(plate: string, join: string): (string | null)[];
function getPlate(plate: any, join: string = '-'): (string | null)[] {
    console.log(plate, join);

    return IS.plate(plate, join) ? (Array.isArray(plate) ? plate : plate.split(join)) : [null, null, null, null];
}

function toString(plate: string[]): string | null;
function toString(plate: string[], join: string): string | null;
function toString(plate: string[], join: string = '-'): string | null {
    return IS.plate(plate) ? plate.join(join) : null;
}

export const PLATE = {
    letters: plateLetters,
    getPlate: getPlate,
    toString: toString,
};
