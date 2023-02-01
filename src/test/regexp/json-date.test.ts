import { regexpJsonDate } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['2000-01-01T00:00:00.000Z'];
const invalid: string[] = ['2000-01-01 00:00:00', '2000-01-01T00:00:00.000', '2000-01-01T00:00:00Z'];

testVerify('JSON DATE', regexpJsonDate, valid, invalid);
testFind('JSON DATE', regexpJsonDate, valid, invalid);
testReplace('JSON DATE', regexpJsonDate, valid, invalid);
