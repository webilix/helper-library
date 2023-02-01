import { IS } from '../is';
import { plateLetters } from '../shared';

function getPlate(plate: string[]): (string | null)[];
function getPlate(plate: string): (string | null)[];
function getPlate(plate: string, join: string): (string | null)[];
function getPlate(plate: any, join: string = '-'): (string | null)[] {
    return IS.plate(plate, join) ? (Array.isArray(plate) ? plate : plate.split(join)) : [null, null, null, null];
}

export const PLATE = {
    letters: plateLetters,
    getPlate: getPlate,

    toString: (plate: string[], join: string = '-'): string | null => (IS.plate(plate) ? plate.join(join) : null),
};
