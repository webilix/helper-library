import { regexpIP4 } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['127.0.0.1', '0.0.0.0', '255.255.255.255'];
const invalid: string[] = ['a.0.0.0', '0.a.0.0', '0.0.a.0', '0.0.0.a', '0.256.0.0', '0.0.256.0'];

testVerify('IP4', regexpIP4, valid, invalid);
testFind('IP4', regexpIP4, valid, invalid);
testReplace('IP4', regexpIP4, valid, invalid);
