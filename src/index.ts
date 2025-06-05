import { IS } from './lib/is';
import { RE } from './lib/re';

import { BANK } from './lib/helpers/bank';
import { COLOR } from './lib/helpers/color';
import { DATE } from './lib/helpers/date';
import { GEO } from './lib/helpers/geo';
import { NUMBER } from './lib/helpers/number';
import { PASSWORD } from './lib/helpers/password';
import { PLATE } from './lib/helpers/plate';
import { STATE } from './lib/helpers/state';
import { STRING } from './lib/helpers/string';
import { TIME } from './lib/helpers/time';

import { UNIT } from './lib/unit';

export const Helper = {
    IS,
    RE,

    BANK,
    COLOR,
    DATE,
    GEO,
    NUMBER,
    PASSWORD,
    PLATE,
    STATE,
    STRING,
    TIME,

    UNIT,
};

// SHARED DATA
export { ColorFormats, IBank, ICity, IGeoCoordinates, IGeoRouteLength, IState } from './lib/shared';

// UNIT TYPES
export { UnitArea } from './lib/unit/area';
export { UnitLength } from './lib/unit/length';
export { UnitVolume } from './lib/unit/volume';
export { UnitWeight } from './lib/unit/weight';
