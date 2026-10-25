import { regexpDay } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['01-01', '01-31', '06-31', '07-01', '07-30', '12-30'];
const invalid: string[] = ['00-01', '13-01', '1-01', '01-00', '01-1', '01-32', '12-31'];

testVerify('DAY', regexpDay, valid, invalid);
testFind('DAY', regexpDay, valid, invalid);
testReplace('DAY', regexpDay, valid, invalid);
