import { regexpDate } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['1800-01-01', '1900-01-01', '2000-01-01', '2100-01-01', '0000-01-01', '9999-12-31'];
const invalid: string[] = ['2000-00-01', '2000-13-01', '2000-1-01', '2000-01-00', '2000-01-32', '2000-01-1'];

testVerify('DATE', regexpDate, valid, invalid);
testFind('DATE', regexpDate, valid, invalid);
testReplace('DATE', regexpDate, valid, invalid);
