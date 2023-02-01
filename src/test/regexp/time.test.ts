import { regexpTime } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['00:00:00', '23:59:59'];
const invalid: string[] = ['24:00:00', '00:60:60', '00:00:60', '00:0:00', '00:00:0'];

testVerify('TIME', regexpTime, valid, invalid);
testFind('TIME', regexpTime, valid, invalid);
testReplace('TIME', regexpTime, valid, invalid);
